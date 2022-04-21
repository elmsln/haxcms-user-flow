const crypto = require('crypto');
const JWT = require('jsonwebtoken');

export const HAXCMS = new class HAXCMSClass {
  constructor() {
    this.sessionJwt = null;
    // @todo these need to be read in from a file
    this.privateKey = process.env.privateKey; // @todo need to set this
    this.superUser = {
      name: 'admin',
      password: 'admin',
    };
    this.user = {
      name: 'admin',
      password: 'admin',
    };
    this.salt = process.env.saltValue;
  }
  validateRequestToken(token = null, value = '', query)
  {
      if (this.isCLI()) {
          return true;
      }
      // default token is POST
      if (token == null && query['token']) {
        token = query['token'];
      }
      if (token != null) {
        if (token == this.getRequestToken(value)) {
          return true;
        }
      }
      return true;
  }
  getRequestToken(value = '')
  {
      return this.hmacBase64(value, this.privateKey + this.salt);
  }
  hmacBase64(data, key)
  {
    var buf1 = crypto.createHmac("sha256", "0").update(data).digest();
    var buf2 = Buffer.from(key);
    // generate the hash
    return Buffer.concat([buf1, buf2]).toString('base64');
  }
  /**
   * Validate a JTW during POST
   */
  validateJWT(req, res)
  {
    if (this.isCLI()) {
      return true;
    }
    var request = false;
    if (this.sessionJwt && this.sessionJwt != null) {
      request = this.decodeJWT(this.sessionJwt);
    }
    if (request == false && req.body && req.body['jwt'] && req.body['jwt'] != null) {
      request = this.decodeJWT(req.body['jwt'])
    }
    if (request == false && res.query && res.query['jwt'] && res.query['jwt'] != null) {
      request = this.decodeJWT(res.query['jwt'])
    }
    // if we were able to find a valid JWT in that mess, try and validate it
    if (  
        request != false &&
        request.id &&
        request.id == this.getRequestToken('user') &&
        request.user &&
        this.validateUser(request.user)) {
      return true;
    }
    return false;
  }
  /**
   * Get user's JWT
   */
  getJWT(name = null)
  {
      let token = {};
      token['id'] = this.getRequestToken('user');
      let n = Math.floor(Date.now() / 1000);
      // used at time
      token['iat'] = n;
      // expiration time, 15 minutes
      token['exp'] = n + (15 * 60);
      // if the user was supplied then add to token, if not it's relatively worthless but oh well :)
      if (name) {
          token['user'] = name;
      }
      return JWT.sign(token, this.privateKey + this.salt);
  }
  /**
   * Decode the JWT to ensure accuracy, return false if an error happens
   */
  decodeJWT(key) {
    // if it can decode, it'll be an object, otherwise it's false
    try {
      return JWT.verify(key, this.privateKey + this.salt);
    }
    catch (e) {
      return false;
    }
  }
  /**
   * Get user's Refresh Token
   */
  getRefreshToken(name = null) {
    let token = {};
    token['user'] = name;
    let n = Math.floor(Date.now() / 1000);
    token['iat'] = n;
    token['exp'] = n + (7 * 24 * 60 * 60);
    return JWT.sign(token, this.privateKey + this.salt);
  }
  /**
   * Decode the JWT to ensure accuracy, return false if an error happens
   */
  decodeRefreshToken(key) {
    // if it can decode, it'll be an object, otherwise it's false
    try {
      return JWT.verify(key, this.privateKey + this.salt);
    }
    catch (e) {
      return false;
    }
  }
  /**
   * Validate a JTW during POST
   */
  validateRefreshToken(endOnInvalid = true, req) {

    // get the refresh token from cookie
    let refreshToken = req.cookies['haxcms_refresh_token'];
    // if there isn't one then we have to bail hard
    if (!refreshToken) {
      res.send(401);
    }
    // if there is a refresh token then decode it
    let refreshTokenDecoded = this.decodeRefreshToken(refreshToken);
    let n = Math.floor(Date.now() / 1000);
    // validate the token
    // make sure token has issued and expiration dates
    if ((refreshTokenDecoded.iat) && (refreshTokenDecoded.exp)) {
      // issued at date is less than or equal to now
      if (refreshTokenDecoded.iat <= n) {
        // expiration date is greater than now
        if (n < refreshTokenDecoded.exp) {
          // it's valid
          return refreshTokenDecoded;
        }
      }
    }
    // kick back the end if its invalid
    if (endOnInvalid) {
      res.cookie('haxcms_refresh_token', '', { 
        expires:1,     
      });
      res.send(401);
    }
    return false;
  }
  /**
   * Validate that a user name that came across in a JWT decode is legit
   */
  validateUser(name)
  {
      if (
          this.user.name === name
      ) {
          return true;
      }
      else if (
          this.superUser.name === name
      ) {
          return true;
      }
      else {
          usr = {};
          usr.name = name;
          usr.grantAccess = false;
          // fire custom event for things to respond to as needed
          // this is for SaaS providers to provide global validation
          return usr.grantAccess;
      }
      return false;
  }
  /**
   * test the active user login based on session.
   */
  testLogin(name, pass, adminFallback = false)
  {
      if (
          this.user.name === name &&
          this.user.password === pass
      ) {
          return true;
      }
      // if fallback is allowed, meaning the super admin then let them in
      // the default is to strictly test for the login in question
      // the fallback being allowable is useful for managed environments
      else if (
          adminFallback &&
          this.superUser.name === name &&
          this.superUser.password === pass
      ) {
          return true;
      }
      else {
          let usr = {};
          usr.name = name;
          usr.password = pass;
          usr.adminFallback = adminFallback;
          usr.grantAccess = false;
          // fire custom event for things to respond to as needed
          return usr.grantAccess;
      }
      return false;
  }
}
import crypto from "crypto";
import JWT from "jsonwebtoken";

export const HAXCMS = new class HAXCMSClass {
  constructor() {
    this.sessionJwt = null;
    // @todo these need to be read in from a file
    this.privateKey = process.env.privateKey; // @todo need to set this
    this.user = {
      name: process.env.user,
      password: process.env.pass,
    };
    this.salt = process.env.saltValue;
  }
  validateRequestToken(token = null, value = '', query)
  {
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
  validateJWT(jwt)
  {
    var request = false;
    request = this.decodeJWT(jwt);
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
    return false;
  }
  /**
   * test the active user login based on session.
   */
  testLogin(name, pass)
  {
    if (
      this.user.name === name &&
      this.user.password === pass
    ) {
        return true;
    }
    return false;
  }
}
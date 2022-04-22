import { HAXCMS } from "./HAXcmsHelpers.js";
export default async function handler(req, res) {
  // parse and split into u/p
  const { username, password } = JSON.parse(req.body);
  let jwt = null;
  let status = 403;
  if (HAXCMS.testLogin(username, password)) {
    jwt = HAXCMS.getJWT(username);
    status = 200;
  }
  const data = {
      jwt: jwt,
      status: status
  }
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
  res.json(data);
}
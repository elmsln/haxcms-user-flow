import HAXCMS from "./HAXcmsHelpers.js";

export default async function handler(req, res) {
  const { username, password } = req.body;
  let jwt = null;
  if (HAXCMS.testLogin(username, password)) {
    jwt = HAXCMS.getJWT(username);
  }
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
  res.json(jwt);
}
import fetch from 'node-fetch';
import { HAXCMS } from "./HAXcmsHelpers.js";

export default async function handler(req, res) {
  let status = 403;
  let siteListData = null;
  const { jwt } = JSON.parse(req.body);
  // verify JWT
  if (HAXCMS.validateJWT(jwt)) {
    // simulated response from herokuapp
    const url = 'https://haxcms.herokuapp.com/system/api/listSites';
    siteListData = await fetch(url).then(res => res.json());
    if (siteListData) {
      status = 200;
    }
  }
  const data = {
      status: status,
      data: siteListData
  };
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
  res.json(data);
}
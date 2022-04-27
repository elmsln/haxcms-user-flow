import { HAXCMS } from './HAXcmsHelpers.js';

export default async function handler(req, res) {
  let status = 403;
  let response = null;
  const { jwt, name } = JSON.parse(req.body);
  const sitename = name;
  // verify JWT
  if (HAXCMS.validateJWT(jwt)) {
    // @todo, run the operation
    response = {
      detail: `${sitename} deleted`,
      name: sitename,
    };
    status = 200;
  }
  const data = {
    status,
    data: response,
  };
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  res.json(data);
}

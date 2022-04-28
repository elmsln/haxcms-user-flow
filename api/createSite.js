import { HAXCMS } from './HAXcmsHelpers.js';

export default async function handler(req, res) {
  let status = 403;
  let createSiteResponse = null;
  const { jwt, name, structure, theme, type } = JSON.parse(req.body);
  const sitename = name;
  // verify JWT
  if (HAXCMS.validateJWT(jwt)) {
    const respToken = HAXCMS.decodeJWT(jwt);
    const userName = respToken.user;
    createSiteResponse = {
      id: 'ddffg44-e00f-4033-ae3e-4692f6f5a73e',
      title: `${sitename}`,
      author: `${userName}`,
      description: `A ${structure} - ${type} called ${name}`,
      license: 'by-sa',
      metadata: {
        author: {
          image: 'files/ECrfY0IXUAA4qsQ.jpeg',
          name: 'Bryan Ollendyke',
          email: 'bto108@psu.edu',
          socialLink: 'https://twitter.com/btopro',
        },
        site: {
          name: `${sitename}`,
          created: 1565898366,
          updated: 1615262120,
          git: {},
          version: '2.0.8',
          domain: '',
          logo: 'files/1633609907554_48eae0bf5903e0f3b990_132.jpg',
          static: {
            cdn: 'build',
            offline: false,
          },
          settings: {
            pathauto: false,
            publishPagesOn: true,
            forceUpgrade: true,
            sw: false,
          },
        },
        theme: {
          element: `${theme}`,
          path: `@lrnwebcomponents/${theme}/${theme}.js`,
          name: `Course theme`,
          variables: {
            image: 'assets/banner.jpg',
            hexCode: '#aeff00',
            cssVariable: '--simple-colors-default-theme-deep-purple-7',
            icon: 'icons:cloud-circle',
          },
        },
        node: {
          fields: {},
        },
        pageCount: 48,
      },
      indent: 0,
      order: 0,
      parent: null,
      location: `/${userName}/sites/${sitename}/`,
      slug: `/${userName}/sites/${sitename}/`,
    };
    if (createSiteResponse) {
      status = 200;
    }
  }
  const data = {
    status,
    data: createSiteResponse,
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

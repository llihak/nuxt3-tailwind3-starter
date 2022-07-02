import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/_nuxt/3for1-4f08de1c.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-07-02T19:36:37.290Z",
    "path": "../public/_nuxt/3for1-4f08de1c.mjs"
  },
  "/_nuxt/addon-page-5d41f545.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-07-02T19:36:37.290Z",
    "path": "../public/_nuxt/addon-page-5d41f545.mjs"
  },
  "/_nuxt/apac-summit-99547a9a.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-07-02T19:36:37.290Z",
    "path": "../public/_nuxt/apac-summit-99547a9a.mjs"
  },
  "/_nuxt/bootstrap-02094148.mjs": {
    "type": "application/javascript",
    "etag": "\"1ab93-9GEIaBtYG1NWHEyp5COrIA+f9jU\"",
    "mtime": "2022-07-02T19:36:37.289Z",
    "path": "../public/_nuxt/bootstrap-02094148.mjs"
  },
  "/_nuxt/entry-7b41f974.mjs": {
    "type": "application/javascript",
    "etag": "\"65-zjRRaGEqfGQ4ejF66j+2NunvAmg\"",
    "mtime": "2022-07-02T19:36:37.289Z",
    "path": "../public/_nuxt/entry-7b41f974.mjs"
  },
  "/_nuxt/features-bd8311eb.mjs": {
    "type": "application/javascript",
    "etag": "\"da5-pv5v9NHemaTaXO5bnCEdYcK5FKQ\"",
    "mtime": "2022-07-02T19:36:37.290Z",
    "path": "../public/_nuxt/features-bd8311eb.mjs"
  },
  "/_nuxt/freebook-2e12c998.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-07-02T19:36:37.290Z",
    "path": "../public/_nuxt/freebook-2e12c998.mjs"
  },
  "/_nuxt/index-8d3794a8.mjs": {
    "type": "application/javascript",
    "etag": "\"15e-d1z6a8QnxxQ6OfMoeqcIULRB6bA\"",
    "mtime": "2022-07-02T19:36:37.290Z",
    "path": "../public/_nuxt/index-8d3794a8.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"b47-6v1/3RKt5AAeE9G9rj9XpVsrt8k\"",
    "mtime": "2022-07-02T19:36:37.292Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/OrderButton-1767f12c.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-07-02T19:36:37.289Z",
    "path": "../public/_nuxt/OrderButton-1767f12c.mjs"
  },
  "/_nuxt/Overview-56c97b1d.mjs": {
    "type": "application/javascript",
    "etag": "\"3ff-4szTtKxJA4bTYC0gebCC4Dy/enw\"",
    "mtime": "2022-07-02T19:36:37.289Z",
    "path": "../public/_nuxt/Overview-56c97b1d.mjs"
  },
  "/_nuxt/powertools-c8aa0258.mjs": {
    "type": "application/javascript",
    "etag": "\"d9e-PxvTve1N/BbGhDVzA1z/EnwgVK8\"",
    "mtime": "2022-07-02T19:36:37.290Z",
    "path": "../public/_nuxt/powertools-c8aa0258.mjs"
  },
  "/_nuxt/Products-f42251d0.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-07-02T19:36:37.289Z",
    "path": "../public/_nuxt/Products-f42251d0.mjs"
  },
  "/_nuxt/traders-summit-2811a584.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-07-02T19:36:37.290Z",
    "path": "../public/_nuxt/traders-summit-2811a584.mjs"
  },
  "/_nuxt/trial-2d3176d3.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-07-02T19:36:37.290Z",
    "path": "../public/_nuxt/trial-2d3176d3.mjs"
  },
  "/_nuxt/whats-new-8a7f0afa.mjs": {
    "type": "application/javascript",
    "etag": "\"109-OsV8hM/GgPn45ezsK6xIY6s38/E\"",
    "mtime": "2022-07-02T19:36:37.290Z",
    "path": "../public/_nuxt/whats-new-8a7f0afa.mjs"
  },
  "/_nuxt/assets/bootstrap.9b4d65f1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1647-ngdvrxA7NYeJAZt2mnNCCPv4OSs\"",
    "mtime": "2022-07-02T19:36:37.292Z",
    "path": "../public/_nuxt/assets/bootstrap.9b4d65f1.css"
  },
  "/_nuxt/assets/powertools.df74e7f8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1e1-s7nLAFlCeKpkCjKMmcVfs8E7WRo\"",
    "mtime": "2022-07-02T19:36:37.293Z",
    "path": "../public/_nuxt/assets/powertools.df74e7f8.css"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "C:/Users/khill/Documents/VUE/NUXT/Nuxt 3 + Tailwind CSS 3 Starter/nuxt3-tailwind3-starter/dist" + "/" + "1656790580";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };

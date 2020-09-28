importScripts("precache-manifest.57b1f7983a80fbf82cbb892db5ae8840.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({ prefix: "my-project" });

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
// workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
  ({ url }) => url.pathname.endsWith(".mp3"),
  new workbox.strategies.cacheFirst({
    cacheName: "mp3-caching",
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [200],
      }),
      new workbox.rangeRequet.RangeRequestsPlugin(),
    ],
  })
);


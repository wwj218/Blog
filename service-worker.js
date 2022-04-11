/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f9adeaf5aa0862002126e3d9e99a3be2"
  },
  {
    "url": "assets/css/0.styles.a4e69676.css",
    "revision": "e6d39ed1cffff110a2642d54e7e1ad4e"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.4fc9db24.js",
    "revision": "8f1a2178a3def7db0cad003722e8accf"
  },
  {
    "url": "assets/js/10.d1fa7b8c.js",
    "revision": "037324e8f30ce1b44a03209ad8e927dd"
  },
  {
    "url": "assets/js/11.df8f200c.js",
    "revision": "8608c19767cc5b36cb7771ce323b71aa"
  },
  {
    "url": "assets/js/12.1578b83f.js",
    "revision": "b80f59c4fcc9abe2c43eb98a2c32f8e9"
  },
  {
    "url": "assets/js/13.d0d9ea60.js",
    "revision": "fd695c2d233a2e79e1e28db886f25b06"
  },
  {
    "url": "assets/js/14.e02038c7.js",
    "revision": "26c9d6d6acd2a6d3995b0beba7d6b78e"
  },
  {
    "url": "assets/js/15.670847d2.js",
    "revision": "d2c910d24c8fa3806ec3ddafea1f7cf4"
  },
  {
    "url": "assets/js/16.730c9274.js",
    "revision": "2f824cfb05439feef05f0612110b1b30"
  },
  {
    "url": "assets/js/17.808875c1.js",
    "revision": "7a1a777fdbd023179831cc286e485554"
  },
  {
    "url": "assets/js/18.72be21e3.js",
    "revision": "3cf5111bc51507b0ab2e5f229175cd98"
  },
  {
    "url": "assets/js/4.eacc4a0f.js",
    "revision": "d63305df54ac7f36a2304ca9dfc7ded6"
  },
  {
    "url": "assets/js/5.27be2cee.js",
    "revision": "fd3d3ba0c6e7d90cf6b4d27d6dffcc81"
  },
  {
    "url": "assets/js/6.ca6e9302.js",
    "revision": "9f09ddd8c453f237541c8924fc1ce79e"
  },
  {
    "url": "assets/js/7.705dce02.js",
    "revision": "f389345e044626b596260efe23b5bc4a"
  },
  {
    "url": "assets/js/8.1af3eb19.js",
    "revision": "a2a489976b351f451b526c43cb6c3991"
  },
  {
    "url": "assets/js/9.439b8e22.js",
    "revision": "e88d92daf042be50cf4e7c2a9dc5bc1e"
  },
  {
    "url": "assets/js/app.e485acb4.js",
    "revision": "ea569a4274b6c7eadbbbf468f2ea56de"
  },
  {
    "url": "assets/js/vendors~flowchart.0327d349.js",
    "revision": "0403b51e58c9a28ce59f8ddb2a93337b"
  },
  {
    "url": "categories/其它/index.html",
    "revision": "2b4afad73ef83bc2f8e9fc53db296ab1"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "99d014aa8828c8da86550a53fbe7354c"
  },
  {
    "url": "categories/index.html",
    "revision": "5c4f8d68796952aa61558eeefb063907"
  },
  {
    "url": "head1.png",
    "revision": "5250a086491c00c3f550929be9fc4e3e"
  },
  {
    "url": "head2.png",
    "revision": "fee2a218b075e5e09f4bd9d9e8450e1a"
  },
  {
    "url": "icons/cat.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/cat.svg",
    "revision": "8e2d868e240a4e9b1520fd83ad4b3ad3"
  },
  {
    "url": "icons/cat128.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/cat16.png",
    "revision": "1aec0693ff6e320c0adedf185806b1ab"
  },
  {
    "url": "icons/cat48.png",
    "revision": "231db9fe2dd479a3aac7da8194bb9fd5"
  },
  {
    "url": "imgs/前端知识体系图.png",
    "revision": "597a602e49e86fea640cca01cfb9504e"
  },
  {
    "url": "index.html",
    "revision": "8e9bdbe5a39cd0084501e076ebd8eb46"
  },
  {
    "url": "line_bg.svg",
    "revision": "5825f033c6ff12cd1ed1f3c99dff5e4b"
  },
  {
    "url": "note/前端知识体系.html",
    "revision": "7d056dbb7315f4cd676a68b98d8a9ffd"
  },
  {
    "url": "pg1.png",
    "revision": "bd0779d6ca0bb181929f95e5be9053d3"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "34b5b2be9defdae62b8dab7d7368aba2"
  },
  {
    "url": "tag/css/index.html",
    "revision": "6e020b6e7e3830d3878b80c02fe78778"
  },
  {
    "url": "tag/index.html",
    "revision": "e6dad816877558a5b185810f41605731"
  },
  {
    "url": "tag/js/index.html",
    "revision": "6676b3d3857616f4e6313b8d5227a07e"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "2fbd599727eac02dbd9264d2a32b9fa8"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "3257ac0e9c703d9e89c3eb10f43d6377"
  },
  {
    "url": "timeline/index.html",
    "revision": "950bdbf4315587d07cb199e3880aa924"
  },
  {
    "url": "views/其它/小知识.html",
    "revision": "0b564cbb6f27887032a30427993a2459"
  },
  {
    "url": "views/其它/markdown语法.html",
    "revision": "e8116a2439fb1df3829152b4b878655c"
  },
  {
    "url": "views/前端/Grid布局笔记.html",
    "revision": "cbc5ca5c827d5d513abe584e12a3f151"
  },
  {
    "url": "views/前端/localStorage变动监听.html",
    "revision": "8553d622d2a61ea8fcf24dc0f794e7fd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

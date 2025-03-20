'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "71a193c2dd82aa1e6aa293d32ca25bf7",
"version.json": "d945788f744d541e8cec6dfe338c4753",
"index.html": "9e6a08980c9247e3afefc1556d8d518f",
"/": "9e6a08980c9247e3afefc1556d8d518f",
"main.dart.js": "0ce4d4a57d0444602002d05213026a66",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "2e1068b63082385d68f8a7feeb9f20cc",
"icons/Icon-192.png": "4352dada3fbd62de618796a665038499",
"icons/Icon-maskable-192.png": "4352dada3fbd62de618796a665038499",
"icons/Icon-maskable-512.png": "68b8eefdbebf382b283f7fc52fa1c025",
"icons/Icon-512.png": "68b8eefdbebf382b283f7fc52fa1c025",
"manifest.json": "560da6296c4b93633d039512966e8908",
".git/config": "fadef67e195b6a3eb4911967c1f7e223",
".git/objects/0d/a0de71a10267be130101e16abe383caedbb820": "e8a83f5ffcbe184f74d8bd6ae7abc3e1",
".git/objects/57/4edbd0941c31c46a8d9198e58ebe0a530931fa": "abbafed076b64e83bffcaea79ad2af34",
".git/objects/03/ac723c911a6829d9cf9965b4c9a9c02e992eba": "b1eb4a6f9c27339dea0ffc5d78d7d421",
".git/objects/ab/d80ffe890b83f832f543af2d40224745b45a22": "46590b384c1a91f2e695e584ca4518fe",
".git/objects/pack/pack-eaa8414797902cc9b82537027d7c561e2fa0b6b0.pack": "890211cdc24ffd41d491b28baf8a5b0b",
".git/objects/pack/pack-eaa8414797902cc9b82537027d7c561e2fa0b6b0.idx": "cca83c8d763ec8865a0ff2ec46335224",
".git/objects/16/8767e46be207b0ef45892ef0eb13aa037d3191": "6781da24441a929acae1cf9c86236f21",
".git/objects/72/1a3bf9d6be73b87c633953adcf315feae463b1": "9db821dd9683aa5b376c3efb78d66e53",
".git/objects/00/4b25da31e2437eea5fc243c4497beb9c4be7f9": "b2175da31db384688d962436d5cf5871",
".git/objects/39/097858c989576703e881afc07b5a64f6f3739b": "f7ce1c9d6029d21c5d63d4e6817f5e6c",
".git/objects/63/e44755c918e80459bdc3696a9803e9c580d428": "de7d286500d3eeb3c45ebff7ff39d601",
".git/objects/bf/2b3d983bf1d2d8cf02cc5c7178951c95a564b8": "6920379dd12a718f6b24f3bd5a8a464c",
".git/objects/8c/1219991390c186731ce8e228296349ac874c01": "e5f56cd854614ad6efd031b61d1f2fa6",
".git/objects/85/ea73f9e36654da594818457b7de1821918abad": "fed424891d51a4859717c59de233b1fa",
".git/objects/8e/4e368b398c3d9f3904b1d9fd4ed239820dba8e": "0494c06b43a012e3e004ebb80405009a",
".git/objects/25/e4020fa4cee59c9d6b25789fa24cf74202cbb1": "f4a4af112184389d3a6d2e8d4c91e876",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ebe84140d5fe6c99805166115116a2f5",
".git/logs/refs/heads/gh-pages": "4d3919291c49c596c7e57cae7bba7bdf",
".git/logs/refs/heads/main": "ab1b20676ae81d7cd88a4d4bdb11566d",
".git/logs/refs/remotes/origin/gh-pages": "65cb39369d77edc647acde5a45c8349d",
".git/logs/refs/remotes/origin/HEAD": "ab1b20676ae81d7cd88a4d4bdb11566d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/gh-pages": "10fbfdccb469b97c799db032d51d97c6",
".git/refs/heads/main": "5e2306c7300d13fbca87ab0f5155d85f",
".git/refs/remotes/origin/gh-pages": "10fbfdccb469b97c799db032d51d97c6",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/index": "e480151ece6c2a5e94afdbf8ede22b4f",
".git/packed-refs": "07e377fe834b3b5837ffac9632443671",
".git/COMMIT_EDITMSG": "69103e5af80118b578d06c61e33a05da",
"assets/AssetManifest.json": "81d15530a7ec7cd97b799b23be70c074",
"assets/NOTICES": "04613602d37ab1129ea70ed938f3eea4",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "e6d55374e736b0e2d59396ede193d693",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d84ac311fcd168d04ac55ab40d4bb88b",
"assets/fonts/MaterialIcons-Regular.otf": "58b76e97d2b8af6a2d5857ec1bfd7fc0",
"assets/assets/images/boss/boss_4.png": "b9cf6c5739a674e559d5d072da9e2d79",
"assets/assets/images/boss/boss_2.png": "d5774101caec5f8ae3094b2ff3985937",
"assets/assets/images/boss/boss_3.png": "0b9065d0095a3a76a33ae7ac227601d3",
"assets/assets/images/boss/boss_1.png": "2bb371794e4f119940fbc6e2913c64da",
"assets/assets/images/animals/tiger.png": "e5fb72ef709704ab45f93a0bd2096065",
"assets/assets/images/animals/snake.png": "0753a52af312fef413f6f54c35b1d1ee",
"assets/assets/images/animals/vulture.png": "74003d9928a8b04e60e35b4e2d834999",
"assets/assets/game_data/game_book/game_book.json": "700a0b4aee0db6adcbd17d51663cf7d9",
"assets/assets/game_data/quiz/classification_03.json": "a908cbbd3a171243c6f99211859c5421",
"assets/assets/game_data/quiz/multiple_choice_08.json": "d7fde5de89771084a480ecdf38317b4a",
"assets/assets/game_data/quiz/multiple_choice_04.json": "f2461def7f49a852f561032c90424345",
"assets/assets/game_data/quiz/multiple_choice_05.json": "1efdcd4a0727de0a4dca5df283236483",
"assets/assets/game_data/quiz/classification_02.json": "68cca219c1a430f218c77bac7ab28158",
"assets/assets/game_data/quiz/classification_09.json": "8e67a4a456ed7696a031d474524f02a8",
"assets/assets/game_data/quiz/multiple_choice_02.json": "d07d02b1d38639e6818a65c38779211c",
"assets/assets/game_data/quiz/classification_05.json": "30513f575cb9a645748ad9b7229112fb",
"assets/assets/game_data/quiz/classification_04.json": "ee3f4df8313cccc9e738d2971ba661b0",
"assets/assets/game_data/quiz/multiple_choice_03.json": "f244f610a179ed1144f01dc963599e21",
"assets/assets/game_data/quiz/classification_08.json": "bf30d1b10c62bba84f0875919ceafc6f",
"assets/assets/game_data/quiz/classification_11.json": "bd1f62138defee2e999f413ac9db7d7d",
"assets/assets/game_data/quiz/classification_07.json": "a6addfcae94b2bd3331c862b1126e1e9",
"assets/assets/game_data/quiz/classification_06.json": "796761b4fa2fd83ed533609fdd92e78f",
"assets/assets/game_data/quiz/classification_10.json": "9cb0d33156cc0edda2d559b52d7b520a",
"assets/assets/game_data/quiz/multiple_choice_01.json": "8e66246d46e284f3ae62b9414e6f21c9",
"assets/assets/game_data/quiz/classification_01.json": "98267ebcad6b24bb414b274aaeac953e",
"assets/assets/game_data/quiz/multiple_choice_06.json": "6d4944343fab464416d80791b0799160",
"assets/assets/game_data/quiz/multiple_choice_07.json": "23c3d55b65efe36cca4a3334f63f6332",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

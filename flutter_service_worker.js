'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b56ab596b942902aa6e5cdb9aa97683b",
"version.json": "b9804c5dac5337c573c11b2e9d3dc292",
"index.html": "a9153897128774c66dee697fe27cd440",
"/": "a9153897128774c66dee697fe27cd440",
"firebase-messaging-sw.js": "caa10a2da1efcbc7a5a046496e702133",
"main.dart.js": "402ef3427cf712d45420f4b3698077e0",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "24bd5f2567f290915463fccfd7c8334f",
"icons/Icon-192.png": "f074be9d124cd89ad33d9dc8d76c245c",
"icons/Icon-maskable-192.png": "f074be9d124cd89ad33d9dc8d76c245c",
"icons/Icon-maskable-512.png": "e573c1202f14fb0ce7b85e201e085e38",
"icons/Icon-512.png": "e573c1202f14fb0ce7b85e201e085e38",
"manifest.json": "6b926e7dd8917e0fd82c1b4ff7457e92",
"assets/AssetManifest.json": "787f183d8e21e9ad8001a7c634c15ede",
"assets/NOTICES": "59a8b5bbe345f62699caa9c508849164",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "b0b48559d58445aaaf741c08399e60ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "39b161cca4543f6f44e65cb2728fc87f",
"assets/fonts/MaterialIcons-Regular.otf": "acb1ab25df401653873a56c477cc25b7",
"assets/assets/images/result/2stars.png": "ca0e29961e99eb88affc2ddfc7dc17f3",
"assets/assets/images/result/3stars.png": "f4786532456338e31024fe4b003f3059",
"assets/assets/images/result/1stars.png": "3e51c625b5d26842dfb4cde80944319d",
"assets/assets/images/result/0stars.png": "9d37b165b16e3f954ac90b3a12c490bc",
"assets/assets/images/boss/communication_style_classifier1.png": "e409fe915784ad4d0eeedccbd6e3b368",
"assets/assets/images/boss/positive_spin2.png": "eb1f2f1607e09f89b1d248e649ff9f9f",
"assets/assets/images/boss/reflection_mirror1.png": "3f089608407cce43b76a3f217ce497d3",
"assets/assets/images/boss/drawing_the_line1.png": "250a568a8902b1c41fe1ae0def8442ae",
"assets/assets/images/boss/disengagement_basics1.png": "bb73a1be3db568bd8360a92cf71ef537",
"assets/assets/images/boss/positive_spin1.png": "fa3f33b9f3faf859eb2b93abaf66dcfc",
"assets/assets/images/boss/communication_fundamentals1.png": "46aad00eaa655d138c9b48e20b067a36",
"assets/assets/images/boss/boss_4.png": "b9cf6c5739a674e559d5d072da9e2d79",
"assets/assets/images/boss/continue_or_disengage1.png": "58ce9ae22d086199af57b2018217d0b4",
"assets/assets/images/boss/mind_reaction_basics1.png": "d9909c5fe2983548eef9a584f3ad5f78",
"assets/assets/images/boss/boundary_basics1.png": "6b1f74d2b537cf07b7ed3c41b9b0670f",
"assets/assets/images/boss/continue_or_disengage2.png": "c732959134bcc843b393cb6d82bf7549",
"assets/assets/images/boss/recognize_the_attack1.png": "bb16cfe896f6d7665719df82561633e8",
"assets/assets/images/boss/navigate_the_bully1.png": "877103d6c8283820a19c5d7f4533ee7b",
"assets/assets/images/boss/boss_2.png": "d5774101caec5f8ae3094b2ff3985937",
"assets/assets/images/boss/positive_spin.png": "c1752d91f4c775159d61facb01bbfd89",
"assets/assets/images/boss/boss_3.png": "0b9065d0095a3a76a33ae7ac227601d3",
"assets/assets/images/boss/boss_1.png": "2bb371794e4f119940fbc6e2913c64da",
"assets/assets/images/boss/active_listening_basics1.png": "db42959d68abb90cb6bb968254b3e981",
"assets/assets/images/boss/thought_detective4.png": "c1daf57cde28b3d657df303036cecbad",
"assets/assets/images/boss/communication_style_classifier.png": "e409fe915784ad4d0eeedccbd6e3b368",
"assets/assets/images/boss/thought_detective3.png": "b801f266cbd5c4d1ade2ad063ca84772",
"assets/assets/images/boss/emotional_observer2.png": "fa9683dfdab1e2570bf4f6d5b405d66c",
"assets/assets/images/boss/spot_the_real_issue1.png": "5b854d52dc0353f234f33d33cecde831",
"assets/assets/images/boss/thought_detective2.png": "9000120343b33d901f6567919ca0aa45",
"assets/assets/images/boss/emotional_observer1.png": "53c654f0485c7845d62b55ac4d189b84",
"assets/assets/images/boss/thought_detective1.png": "89b392dc70b2aa8a0e55285de84f1e04",
"assets/assets/images/boss/fact_checker2.png": "f57e82a28645754d27408b4f6e581fa2",
"assets/assets/images/boss/thinking_traps1.png": "45c5565aaa0343eaf1436f775bc0eab5",
"assets/assets/images/boss/fact_checker1.png": "fee794b3f3beb95ffa15d74b71fc81de",
"assets/assets/images/boss/thinking_traps2.png": "8b2faefc8b657d792c1cc0ab5336ac5f",
"assets/assets/images/boss/tension_tamer1.png": "a300752f8aa1f0791264d1083d84006e",
"assets/assets/images/logo/logo.svg": "76ef6bb5f53925fe5bb346f76b8e8aaa",
"assets/assets/images/onboarding/bully.png": "a1b799e80af48ffc2902cc07c4c79b93",
"assets/assets/images/onboarding/rooster.png": "1f5feff177fa50fc29f66496682c4679",
"assets/assets/images/onboarding/seal.png": "97f1fc7e85229d72c984f1cbbb7babdc",
"assets/assets/images/onboarding/snake.png": "9890ac974f5db8d283846bf2ef94fa8b",
"assets/assets/images/onboarding/welcome.png": "f93b88f48496ea3d5f35e781dd058205",
"assets/assets/game_data/set2/emotional_observer1.json": "df743fdb092487b83fbcc78c0fc26d30",
"assets/assets/game_data/set2/thinking_traps2.json": "d7c169ee38b1c74994431a6bc618ae59",
"assets/assets/game_data/set2/communication_fundamentals_1.json": "72a7208c22192a98cead2086e7da59ea",
"assets/assets/game_data/set5/boundary_basics1.json": "eedcf257ec6a26ddb84e055ecb7c90b5",
"assets/assets/game_data/set5/fact_checker1.json": "ebe056835062963507a9d483d8418fcc",
"assets/assets/game_data/set5/thought_detective1.json": "681cbbb3d9f8fe76ff2967677e43c792",
"assets/assets/game_data/set4/continue_or_disengage1.json": "d90364d7f75ac0ecb449538d051b82bc",
"assets/assets/game_data/set4/communication_style_classifier1.json": "786f4cd50eaa07fcc533f31ca98ee3c8",
"assets/assets/game_data/set4/positive_spin1.json": "c1700a2bc7780ba53fd01306c806b372",
"assets/assets/game_data/set3/reflection_mirror1.json": "81ca015aa6c02dd1a9cd709d762ac73c",
"assets/assets/game_data/set3/disengagement_basics1.json": "08d8a37825fd2b4866445672e869972d",
"assets/assets/game_data/set3/emotional_observer2.json": "5c41adc3a6b9afad89b2a186cb4b2ede",
"assets/assets/game_data/set6/positive_spin2.json": "88463661ff3cb835645e26229a700d2b",
"assets/assets/game_data/set6/recognize_the_attack1.json": "7eb92721abd8f74b33b36234a7bb9a54",
"assets/assets/game_data/set6/continue_or_disengage2.json": "4ef58f7ede79d97cbd29efdb629d6d66",
"assets/assets/game_data/set1/mind_reaction_basics1.json": "45c85d11072016e1ebbb413247c631a0",
"assets/assets/game_data/set1/active_listening_basics1.json": "8c70f502c4a6b0d1a9f64801ade82574",
"assets/assets/game_data/set1/thinking_traps1.json": "4f8230cc980352a7a91ec7c2aa610b75",
"assets/assets/game_data/set8/tension_tamer1.json": "269ae249c56a8c6b3ee411b8806d86b3",
"assets/assets/game_data/set8/drawing_the_line1.json": "45277cb2f01889cf9fa8d506250287b8",
"assets/assets/game_data/set8/fact_checker2.json": "1c23d5161163d4d4e1b6221d207484ea",
"assets/assets/game_data/set7/spot_the_real_issue1.json": "43db3583a09cafd805e19fcfd09776e8",
"assets/assets/game_data/set7/thought_detective2.json": "af4709f5d32d189b84d8989b73245101",
"assets/assets/game_data/set7/navigate_the_bully1.json": "a94de8c8c8052a91ab7aa2684cd25223",
"assets/assets/icons/google_logo.png": "0f118259ce403274f407f5e982e681c3",
"assets/assets/icons/star.svg": "553e35b6cfb085cda728f565b8dbc34d",
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

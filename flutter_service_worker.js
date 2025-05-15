'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3872566b66cb490c0a851009295d5f8d",
"version.json": "b9804c5dac5337c573c11b2e9d3dc292",
"index.html": "478678a3b9102db3dabd9c42eb56d7a4",
"/": "478678a3b9102db3dabd9c42eb56d7a4",
"main.dart.js": "213b1836ce779ed8223f06dafd4b370f",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "24bd5f2567f290915463fccfd7c8334f",
"icons/Icon-192.png": "f074be9d124cd89ad33d9dc8d76c245c",
"icons/Icon-maskable-192.png": "f074be9d124cd89ad33d9dc8d76c245c",
"icons/Icon-maskable-512.png": "e573c1202f14fb0ce7b85e201e085e38",
"icons/Icon-512.png": "e573c1202f14fb0ce7b85e201e085e38",
"manifest.json": "6b926e7dd8917e0fd82c1b4ff7457e92",
"assets/AssetManifest.json": "243abdbfb51847dc2fa4c078fc02d9b2",
"assets/NOTICES": "2c7bcf14b750475b471ea69160f17362",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "8b70a2177c3f7e1ae22f0c57368eb5a2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "21e39f18e5dc8b78bee487e193f2bd59",
"assets/fonts/MaterialIcons-Regular.otf": "84af5ed9b687f6f251b18d036ec44a94",
"assets/assets/images/result/3stars.png": "f4786532456338e31024fe4b003f3059",
"assets/assets/images/result/0stars.png": "7cd21bbb1363418e347105abdf394e9a",
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
"assets/assets/images/onboarding/welcome.png": "f93b88f48496ea3d5f35e781dd058205",
"assets/assets/game_data/set2/emotional_observer1.json": "14dfab9740e1eda24604a76152cb4a26",
"assets/assets/game_data/set2/thinking_traps2.json": "12dc2b02097f5550dbfa24c03e4c2924",
"assets/assets/game_data/set2/emotional_distancing.json": "b88de4be7f4cecc91b8afda41505fbfc",
"assets/assets/game_data/set2/communication_fundamentals_1.json": "1915207e457f8d732f372deedd78f8c0",
"assets/assets/game_data/set5/boundary_basics1.json": "c58797f19b01c21e02a97d4a4706e56e",
"assets/assets/game_data/set5/evidence_based_thinking.json": "bc1f6331c7cc7b1c8893e406dc4bf23e",
"assets/assets/game_data/set5/fact_checker1.json": "29969f59468daf221932c359eb6281e4",
"assets/assets/game_data/set5/thought_detective1.json": "018dc24873d4b88948b00703161a966b",
"assets/assets/game_data/set4/assertiveness.json": "7e4acbc466b550882d01ee7403086286",
"assets/assets/game_data/set4/positive_thinking.json": "5d9327e24cad893be5f6c5136bbc1d06",
"assets/assets/game_data/set4/continue_or_disengage1.json": "be312c1c0a9052a78afcc0841b9b2695",
"assets/assets/game_data/set4/strategic_disengagement.json": "1ec85b791c87f6320a1174e55248ce44",
"assets/assets/game_data/set4/communication_style_classifier1.json": "b03a0978c9ec721a4a18410d0466f721",
"assets/assets/game_data/set4/positive_spin1.json": "764d1d9d13497bfac563032002b44ef7",
"assets/assets/game_data/set3/reflection_mirror1.json": "3e5fa1c84a1163b93d3bf792ea772a17",
"assets/assets/game_data/set3/active_listening.json": "a73605c48ebce2f92f098ec01b139616",
"assets/assets/game_data/set3/disengagement_basics.json": "67aae35b8be44311fbea0e7e64d2d202",
"assets/assets/game_data/set3/disengagement_basics1.json": "ed389eeb6a11cb6f34877f55ee545687",
"assets/assets/game_data/set3/emotional_distancing_workplace.json": "4d6a20342e65339ae74f6fa3c8b7d31c",
"assets/assets/game_data/set3/emotional_observer2.json": "08125ede4028862b66a89ccd0798ba88",
"assets/assets/game_data/set6/boundary_violations.json": "3a07a28122525908dfe9b833bf50a97d",
"assets/assets/game_data/set6/workplace_scenarios.json": "bca41fc3b4fb111d0265c65dffc02824",
"assets/assets/game_data/set6/positive_spin2.json": "9be67e2795b19906ecdeba08fe0134aa",
"assets/assets/game_data/set6/recognize_the_attack1.json": "c91e9767773183334cacab90ee3ed3e6",
"assets/assets/game_data/set6/strategic_disengagement2.json": "baf41d961e98d8c3358a3e03450d27ed",
"assets/assets/game_data/set6/continue_or_disengage2.json": "3b78b3089a676fbcd3af752a113cc4dc",
"assets/assets/game_data/set1/mind_reaction_basics1.json": "45c85d11072016e1ebbb413247c631a0",
"assets/assets/game_data/set1/active_listening_basics1.json": "8c70f502c4a6b0d1a9f64801ade82574",
"assets/assets/game_data/set1/thinking_traps1.json": "609dca8876582cdd1853f3dd10841a8e",
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

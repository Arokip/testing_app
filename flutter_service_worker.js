'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a091a377229fba6e4fac70295ce1090d",
"version.json": "d945788f744d541e8cec6dfe338c4753",
"index.html": "280a075b7fbd798563e60dc60aeeeaca",
"/": "280a075b7fbd798563e60dc60aeeeaca",
"main.dart.js": "eaddba7fd33a5f39b4fbca86c11f2714",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "2e1068b63082385d68f8a7feeb9f20cc",
"icons/Icon-192.png": "4352dada3fbd62de618796a665038499",
"icons/Icon-maskable-192.png": "4352dada3fbd62de618796a665038499",
"icons/Icon-maskable-512.png": "68b8eefdbebf382b283f7fc52fa1c025",
"icons/Icon-512.png": "68b8eefdbebf382b283f7fc52fa1c025",
"manifest.json": "560da6296c4b93633d039512966e8908",
".git/config": "fadef67e195b6a3eb4911967c1f7e223",
".git/objects/61/b007d2fc309c901801b9682ffc2144a6ea0b62": "4f2036aab4cc94dcf8407a13452592b4",
".git/objects/0d/a0de71a10267be130101e16abe383caedbb820": "e8a83f5ffcbe184f74d8bd6ae7abc3e1",
".git/objects/59/7c5d4517c64347bb6eba8dbbf3b6c8279642c5": "2df42a1827aa176d561c8adfabafb5b4",
".git/objects/92/3b2ed9b33f6f51d228529a20250225600a34ae": "d9e92a57b459e23aa8cf3202ffec3b98",
".git/objects/57/4edbd0941c31c46a8d9198e58ebe0a530931fa": "abbafed076b64e83bffcaea79ad2af34",
".git/objects/03/ac723c911a6829d9cf9965b4c9a9c02e992eba": "b1eb4a6f9c27339dea0ffc5d78d7d421",
".git/objects/03/4902221f5352efbaf009b242e255fb12fc46a9": "ff0f38953fe192fe7556fbe55560afa1",
".git/objects/9b/853cccc3cc813a9017530789d080d7759bb4bf": "f0ce6e6d53ff7644ad969c979390e4b3",
".git/objects/0b/595aada5810649ae90629e6ba38c0d21a09265": "ff25f4d7cda34c8d7c6801f93d46f356",
".git/objects/0b/13757d5985511cb106befef425ccbe39343c56": "7169e0a5ee7c6fc23a4c2b209d67dbc1",
".git/objects/5f/9dfc2593a0c4b2d58e506ea5921c01446d862a": "efc5a2fd045afd1e93ff7c6a8f0ec82a",
".git/objects/05/036d9b517ad6fda64dff904183ab5fd62ede38": "e4d60f2f1623ed8920c952289fbec0bc",
".git/objects/df/fdc501ae9c3d2f88281ad438c2966025fd35c3": "5edb38cd0ef468d922e0a6be042146a7",
".git/objects/d6/db98475cff144d9f37b58aa554aec78e489abe": "6da609aebbc86ad20a8600b24191903f",
".git/objects/ab/d80ffe890b83f832f543af2d40224745b45a22": "46590b384c1a91f2e695e584ca4518fe",
".git/objects/eb/1e12a7acb52a9ba1cbf5cec3edff0d7cd37c84": "fabffe0e7713ceb895f71180ab7b4090",
".git/objects/e4/f5868f4d6e67a96be67ec9c56c0fbd8a699fd8": "22d67456d8823323ca69a685bfdee074",
".git/objects/ed/39575f3afb0e133e72275b375b2732b2d5e62d": "c2e08cc210488d36629f489e0dc11a77",
".git/objects/4b/7b44cf2c26ac66fcb0126e469ec3d74ab6d5d8": "6e68bd723e52838bbfdec4d4b946031a",
".git/objects/pack/pack-eaa8414797902cc9b82537027d7c561e2fa0b6b0.pack": "890211cdc24ffd41d491b28baf8a5b0b",
".git/objects/pack/pack-eaa8414797902cc9b82537027d7c561e2fa0b6b0.idx": "cca83c8d763ec8865a0ff2ec46335224",
".git/objects/16/03528642e13d1d4c0e8fa73509da1ab3dc721b": "45441d9292176c1f06e80cd950cc3566",
".git/objects/16/8767e46be207b0ef45892ef0eb13aa037d3191": "6781da24441a929acae1cf9c86236f21",
".git/objects/28/db6206fdb03e560a23da145e02617cde1ce013": "e6d78499697dee695aaab09b456274ea",
".git/objects/8f/f0ba6476338189ea8e1899889747ba2016da56": "e9e1c0eff14258d8affeec8b9770f0a6",
".git/objects/7e/29601499842f601c3a7550cebf75c4de594049": "dbc73f98bb91b4fdabf34944484c0062",
".git/objects/26/c6f1d573f29b16b4254fe45f9a80eabdba821a": "5a37bb17abd6eff28c9821a3f8a1e77c",
".git/objects/4d/9ff7cb4f092d07c9d940e94c0ac3863c228541": "1ebec6b9d77346dfd63b82897e5b9809",
".git/objects/86/a4d3fc54fb6e3a3af65775ada1f2ed800d7d61": "702118823f91ac9cbfaa71da7b18edb9",
".git/objects/72/1a3bf9d6be73b87c633953adcf315feae463b1": "9db821dd9683aa5b376c3efb78d66e53",
".git/objects/6b/7476e53deae9680641b3626cd5e09f58e3a037": "d94c39b11854bdcb5c37725b61cf7b74",
".git/objects/00/4b25da31e2437eea5fc243c4497beb9c4be7f9": "b2175da31db384688d962436d5cf5871",
".git/objects/3f/52a66ae9619e0bb383d220a449a327560d6135": "aa4cc163caf594614908eb3c4423042f",
".git/objects/5e/8ee5ac81e685197184c1a01c23ded2cbb6343a": "110783aff2a164fd07974c0d28088a99",
".git/objects/5e/77b09f993215b1eee1c311c33d7855b7508b19": "3d1217ef4b155fd3ff03d06e4ace8dfb",
".git/objects/39/097858c989576703e881afc07b5a64f6f3739b": "f7ce1c9d6029d21c5d63d4e6817f5e6c",
".git/objects/63/fb422814d85b0811ae0ced30a06912628376ef": "656beeaece33412d62eb261d64ad866a",
".git/objects/63/e44755c918e80459bdc3696a9803e9c580d428": "de7d286500d3eeb3c45ebff7ff39d601",
".git/objects/64/7557df91471c507aa33abddfad0e7ec8692426": "0ebb33dffbec3629646fcf2690511d38",
".git/objects/bf/2b3d983bf1d2d8cf02cc5c7178951c95a564b8": "6920379dd12a718f6b24f3bd5a8a464c",
".git/objects/d4/b6ff8ad31022ceb538e765df943d1c66265f01": "3225b24fa5ae3b8ae0530baa7ba01101",
".git/objects/b8/a65d578530a1c7136d97f317aa1857eef77faf": "f27b58cbb2e4f813ecf0e0bacd87863f",
".git/objects/dd/9b0433dc19189506f1630d51710146862c3734": "f51b31d026e6a55f2ab4e2b04e2b0e16",
".git/objects/dd/499a693d1e69b16bae6482934d099cc483b8db": "aa0c656b45e394315eaebeb0c64a2255",
".git/objects/d2/8ee050dd7fd916dc6bdceb0e0f88455a0d7c6f": "ee4a599efd29e85b9804c65420d44375",
".git/objects/de/fe21656300c18f2c587a2f2076527728c05974": "ac89d0860bba45c17cc8615b634a6179",
".git/objects/b0/5ff1d0c96e56650780cc2f470774479783302e": "b042290f92660bae5f4eac80dfce5eb9",
".git/objects/a6/c4aeac041efc1b9816e43ef97780ae17afb573": "4d77f2ecc4a791ba27ef37bc4c99f1d9",
".git/objects/b9/bcc63df96fe99ccd4e3533280fd588085da4b5": "a2ab31668d4fbdca136ca4a0229ff0ac",
".git/objects/a1/befa0a85c4b94d5c40f2d3d2d453eec91c1c18": "0f949dd24427e41cd6906aee813a278e",
".git/objects/ef/70d615a8023be3fec44181c5313a467e5bf4fb": "0be1eaf1d6b3423164c1686ef174dc20",
".git/objects/c4/52daf1cfd57e7a3d5aaa21e7cab524a18e07f7": "400ea654e500e5e21c3435f123f2ea1f",
".git/objects/f0/689419a2454f13f2c4f8c97b9347229594dd4a": "31b6f6bb1ae554ec2bd812080953cf9d",
".git/objects/f7/0a16cfd21d8dd85a1c0b12a2ed08087e7934e7": "19bbff4ef2ff79535d4d62efc557db8e",
".git/objects/f1/6fe2d0c6e7dd4486aee465d704df2e14910082": "df7b8e07f1279c93a377f89bfa62763a",
".git/objects/46/389335a85fb21feb3b0fcd02bb5b24c8667a85": "08dde5e56f4d5cfd2584278cfd705c6b",
".git/objects/1b/f948b547fd40b81e95ad05520e84303664a2c4": "11cada4399269fe72c89e0ad25132006",
".git/objects/48/10ef5ba177fff50559d7481377fc7826864750": "1418622d2a0640bf1eb464ac1b5eccfc",
".git/objects/24/ac13e668f0d0bf996f49c2202c16041a56283a": "fcc8a65433b3e4e98009cd18ba9676ab",
".git/objects/23/56a0e5f6a21dbc57764d738e795e8f8cf16949": "602524a13823ffeb963263a7736ca587",
".git/objects/8d/d29cf31d8321b87de926996377dbd93aebb70d": "1134e6f0a5d46e43623d6272eeb12d0c",
".git/objects/12/f8f07bbbea19c34fa9ad96bfe40afea123d1c3": "bb11c4a2d034a763d99bb942b6d1712c",
".git/objects/8c/1219991390c186731ce8e228296349ac874c01": "e5f56cd854614ad6efd031b61d1f2fa6",
".git/objects/85/ea73f9e36654da594818457b7de1821918abad": "fed424891d51a4859717c59de233b1fa",
".git/objects/1c/ce445f6f2a10de760383df411e07f7583bf323": "54b7007003e72ecc15797174515776b3",
".git/objects/82/8e333554ab351fa6cfcb58863cc46940524145": "c2efe9b9042dc49249eeb312aac86188",
".git/objects/40/770bd262253bf8a512d3ea793e9d4d6d38cac2": "36cd76e98af458a04e42682d5f5522e9",
".git/objects/8e/4e368b398c3d9f3904b1d9fd4ed239820dba8e": "0494c06b43a012e3e004ebb80405009a",
".git/objects/25/e4020fa4cee59c9d6b25789fa24cf74202cbb1": "f4a4af112184389d3a6d2e8d4c91e876",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0cce243c87b595ae3540887af9bc3343",
".git/logs/refs/heads/gh-pages": "0575564b5d40c37d01f5ce23f2ac9eb0",
".git/logs/refs/heads/main": "ab1b20676ae81d7cd88a4d4bdb11566d",
".git/logs/refs/remotes/origin/gh-pages": "c84ceb30a2313c5430c0ed04a9ba4a5f",
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
".git/refs/heads/gh-pages": "2970f27da2a93acce7caeb98f41a0db0",
".git/refs/heads/main": "5e2306c7300d13fbca87ab0f5155d85f",
".git/refs/remotes/origin/gh-pages": "2970f27da2a93acce7caeb98f41a0db0",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/index": "56ad8aa4795befdfa299543dabc932b5",
".git/packed-refs": "07e377fe834b3b5837ffac9632443671",
".git/COMMIT_EDITMSG": "69103e5af80118b578d06c61e33a05da",
"assets/AssetManifest.json": "6a31cbf8e11fb8d5720823487b11b624",
"assets/NOTICES": "7cfe80a970f9c805b312eb7f66f56647",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "36c2548ec3fee04072a1b6335a5fee0a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "71daa10377326b38dc1e31fde02e1b32",
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
"assets/assets/icons/google_logo.png": "0f118259ce403274f407f5e982e681c3",
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

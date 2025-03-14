'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e064240bbaa323145138fafd2b96e8e2",
"version.json": "d945788f744d541e8cec6dfe338c4753",
"index.html": "9e6a08980c9247e3afefc1556d8d518f",
"/": "9e6a08980c9247e3afefc1556d8d518f",
"main.dart.js": "00d9137cbbd327559a59429cbf5e49d4",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "2e1068b63082385d68f8a7feeb9f20cc",
"icons/Icon-192.png": "4352dada3fbd62de618796a665038499",
"icons/Icon-maskable-192.png": "4352dada3fbd62de618796a665038499",
"icons/Icon-maskable-512.png": "68b8eefdbebf382b283f7fc52fa1c025",
"icons/Icon-512.png": "68b8eefdbebf382b283f7fc52fa1c025",
"manifest.json": "560da6296c4b93633d039512966e8908",
".git/config": "fadef67e195b6a3eb4911967c1f7e223",
".git/objects/61/5114d2fac6deed69ab5b56f39f5208c2187209": "a3f745bc4812ea2da02583e2d97fa522",
".git/objects/0d/cc4800f91e87425c2a28acd578b7324d20f079": "45345d2749b1afce4be610f16286d20d",
".git/objects/95/7f7b6ce84f075920af517900eb79cf55425ed7": "36e819784347b888f176bdec8e0da656",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/d034174b5a514ad61c00ced55f9dd02f9112f7": "9c271ad55fb1d69b4120248d14a7bad2",
".git/objects/57/a2a945cebe0c13baa4bc35029079ef9db9e6a5": "0c001529357da306ceedbba0a917e3a9",
".git/objects/57/3a90462200377aa1455341702c63921c43de9c": "e828fb61d215549a1f9a07f0bab7f9ab",
".git/objects/9e/f7f63ae31b7771d0fc3269cdf5dae2f6b64d45": "149de12b70ebd1a94d075f0cb24a25ca",
".git/objects/9e/ec083b169f5381880d91a0539d089e3372a163": "c91597b08a83e657e889939d8ef5bb57",
".git/objects/04/89439d1e45345acb7ae67577e831663f744ac3": "0dc79e07a7b0cdfa52a0709d0acb83c9",
".git/objects/3c/9b075e47d107b458eb9015f65151c98cb00e37": "a0aa1266035b8c61d26edd05c6a4c59c",
".git/objects/3c/f7ffb189044029cc7ba01dfd54cb9cd352451e": "9fd42fd844363a855c541865f90babb3",
".git/objects/56/08ee43ea73da2d2b27335f37003bea7164f570": "5b2db7a9432b95f4a8110426836dd4eb",
".git/objects/34/a5ed238647960cee5e8111d4d5c79205528f7e": "4697cb9ea9936ac434aff143a574ab03",
".git/objects/34/eab34ff412027c9bd80aecf5c5a0d3d91ccc98": "cbb9b7c84f62558af2de9614fadb8356",
".git/objects/33/c4d979d8add5fd6f989e4f763ec5e52f045f9d": "6731751e0cb95107e7b706918eb3a5e0",
".git/objects/33/ca7fbde3b9a5ac612535a867373233143854f2": "2f098c677d01c151112804b05ca823a3",
".git/objects/05/8fa34d1f48dba2242f4144d9131b05a293dd50": "ab4a9d84b7c7e985667faab238e5c0cf",
".git/objects/b2/2879131f749106da896cade6f3272924048d79": "2ff9e1856a0e6c5e52353a685e85af4f",
".git/objects/d9/03df5e3c6f1d1060ed574781b3a47d09e2fee8": "67e1ab9e32fa51689c9a333aebfd1d4e",
".git/objects/d9/74253788898df904bbea3babfcc8b478059156": "a439685c3b3f27680af01a129b6ccf58",
".git/objects/df/a4c411e8ca8e6388479ac93a9621c648715148": "0d2e49fec6bc47b6653149acd6c3c579",
".git/objects/b4/9712712c27700854bf20d33dc2d70b160cb9d6": "0b1214ef174aab573c94b0449e6e53fc",
".git/objects/a5/3247b44b54748e9eb1bafac9b60d854b194ba8": "39adb9664f277c3dc80f7839c9682e65",
".git/objects/d1/0bfc8830cda5ca9769ba4417693864d9c767ef": "4eb41ecc654877b8168582cdd2c91fe2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f4/1c5ed988ed7b3236e0e1839f1530c7244ec750": "474634fa15c459acfb69457a470936bc",
".git/objects/f3/4c4cd9fd1f0a3ae82fb2a9e502db243d235507": "9871840b041b8c5f2f5ccae240b6e478",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/d92c22a4ad9271194b9e8d2d9dfcea693bd90f": "fd38bc6c24f4348cf0295b025bea6294",
".git/objects/ee/6cb98a1e9ebc457954b6d57221d25e52d96e21": "047ef2abdb6261c673aae08bc1f51b4e",
".git/objects/c9/112bf682593668d6fe6e1bf0b403524d9e7b38": "aa491216c76caa5d4d1ad574b0c091d0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/1e7a7687cf480bcba010ef108f8b5ba2d69e3c": "1e717e28bae4725c9d2db08c0fa01584",
".git/objects/e3/aa5ed14d7d3fb9ba3b4f9223e3750cfe5f50f0": "3e940d747663241bf69001db3f07d1a9",
".git/objects/ca/7f30190d2341685c3cd2567b2b7e17a896b8e2": "9885bd7884e608cb1df187dd5406e984",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/51b3451998e310837960aefe95cd427a9fd694": "75dad8e2e1cbfbb424adb5559e6827c9",
".git/objects/e4/d45ab294289241109b97d4700c4027cfa2db69": "c8575e135714cfbe2508755cc100f79b",
".git/objects/e4/233cd179a4f776a3748e08e5e7c96695aac97e": "1127a119d48fd8d3560d839af092844f",
".git/objects/c8/8598e16b5a35ae1b4fe1de4934cbc0e0d66899": "e96d35906a7a95550fabcb2b99489aca",
".git/objects/fb/ab4587536b0a3aa6587b1497d3b80d79c6ff3f": "f5cd9ca7686e248d05978057c21e9cc8",
".git/objects/ed/200a32d2246d35499764d990ae7de7a000288f": "4cb8060b27632b6d928c55d9e5ba3843",
".git/objects/c1/ed4331e1291a3464b6ad96c445d60a0b8ca088": "43c8e9ba72ffc0b528014e7ab0804c4b",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/4b/f928e8dedaf2ddf93e179c5d8c744c48864591": "6dd62fc8fe6643ea3d91fe8a11e288a6",
".git/objects/pack/pack-f2c4f14bbe3354d26fedf7f297fd797754a375e9.pack": "46be825b2161048d5b937492803dc4c3",
".git/objects/pack/pack-f2c4f14bbe3354d26fedf7f297fd797754a375e9.idx": "b1ea472738f4559929268b456eb92439",
".git/objects/7d/00034f1212c1341836e88db14cf572977307af": "9832020b1f80a65000c5c20145118ada",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/42/4b70d0e1a7f3c12f220df0cf46ee6af9fa6e12": "311c275117ec8172eb4810603ad5aebb",
".git/objects/73/bb4c5dc2561fe387e836936b4faa9b764de0a4": "6e6ac4171ef88ad95e0f690d0fd54e11",
".git/objects/73/d585277d36ac8ed58a54a08672c22748ce492e": "2ea01bd852fae63531d3ec5cb22336fd",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/7b/4f8235b3cf0d8b2e8b18cc71b16df5a4a4f43e": "4d2e1e3fe5765e6add84d176542fba20",
".git/objects/8f/1fb30394a3d38b2e981d1e29273edfd207263f": "1c959477acba4310187040077c573cbb",
".git/objects/8a/645466de365245e6a655938f8b719164b1d6c1": "63b8dfbaa46aee6c4925a191dbc4376e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/45dde9a10b639179252c86fa73159eb6a62d4a": "b72a51177bf848fa6a4e53f8570528a3",
".git/objects/19/d8391c1195e8aa09669d619b1b3e7a34893f4e": "d9fe32043c4c26ee1cfa766bf751fc72",
".git/objects/4c/8c3789fc49c6b659a2b45d95707282531d24e2": "550ca38ffb493881e991364296c24912",
".git/objects/81/3e1716e626a9d59dca4d78d0fdb91c41e5737b": "c3356a4b53944dca9819f355a3fecc81",
".git/objects/2a/b833f74aac4bc6965f8d96aab5a86366b537ed": "1eb97f7e7e14d9a2b7dc196e5e3d06dc",
".git/objects/43/59d1f882c53ab72536b328a47066f8132c9441": "71ee0bb8726274709dc66cbd5ebfbd41",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/18e01b7492e4d2d974687761f881f4a4305ca8": "12f4b521756b6eda3922699bed4190c0",
".git/objects/6b/3d48274e3ed322b8c780ccd74e86cc9744ce0b": "b62bd97c1e039847c9f4e5e9de520e64",
".git/objects/38/216517567aa3bc8d3279de68342ebdea56a693": "868658e6d8237067f0bbd798c62076a0",
".git/objects/00/304c3b43bf832cf3b9b4441d4b1a8af5478b09": "e7ef30de83329f4815339969228948c5",
".git/objects/6e/9a4e09f20733327fdae8c40652c9ba5ff8c5fe": "2ffcab9e5716734bc18ddb2ce2738b5e",
".git/objects/5c/1b3b8bb1ce0611f6790eef68374db7d0e23f9c": "eeb0d21fe5dde7836d6245b23299e2d0",
".git/objects/91/cfc55c7adb207b6abc486a17887dfe6c8e6a84": "064075361f4f1129f5de2c6a335396f5",
".git/objects/65/0395286a48667569b427a9227e5b6be174c022": "6a466d5a8ed603c796dd6b075f60f454",
".git/objects/3a/91fa7bb02c42d75e57be0d0659b79dd3814c37": "ea77529b9cf720e70e5d0c019c09f8f3",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3f/18ae1cdd27642e6adf1a29bae6514570e715d2": "fbef13c18a2aaeb75d0967268f392458",
".git/objects/5b/b1909d10a8ef5b49fad780b437e4b33030b45b": "ca2c7b38a224c669045498eb6df5be5a",
".git/objects/08/8387683e9f42f7cde993c2835cb2df715187df": "2dd102bd80648f036bf66e31f811428b",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/ccb697fafbbdd5e5215edff15f1719c459696c": "6e5aaca33178f5e504035ef8ae5495a3",
".git/objects/6c/1e91b6dc8feb196e833704d746cc478c20da0a": "61e67e98bbbee28568c14f9275eb1406",
".git/objects/52/500ba52dc0ef5b9807642f2babc95e056c1be8": "878c3f1404ae52d5d7256c9ff05060de",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/0a/07869eb73dfff5bc4211aa044bd8e398ff62d2": "85acb14c9f5806ff429b3423aa4a5a8f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/4d62cd59a9528d897bb37e9793a1dcbe7e5e16": "1da858b96581e1bd3cdd9742d52fd786",
".git/objects/ba/713051a21e7d851e1d2fb87a75decf5b546fe5": "3cb7d34786b878aa9ca6b5a0ad90fbbf",
".git/objects/a0/30ddca444c9ac3cf3746371c7d10f36026ed9f": "c28a28198907c5f669ded0272116ccbd",
".git/objects/a0/1ba49413fd62ec57e9eabd2fbdd9c24b66199a": "3e9fdf75f9cd0336a6a0a1b3f16383db",
".git/objects/b1/0c276d5ef751ef1808c9c4ded5a1eb41a79a7c": "04b2421ee339e15263a1cb3714702637",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/ae3449838e747f8bd6813b57704fa421ee8079": "847f0bf3d4769bd0520c0edec9e74547",
".git/objects/b6/416e2a8dc8de5ec05f1c90bd4a89ba3f0e26c4": "8a825935fa42fbfecee740a0e8376fe4",
".git/objects/a9/07bfa419a887f0d28f75bda2a4a6cb75555a15": "7ad7ea043a14cc747fdd814452819ad5",
".git/objects/a9/54fef88b38f09a6e3b6da487a062c22a10e414": "46877e0c7a979607ba22db163f7ec13f",
".git/objects/a9/1143ef79cca44f9f34c6a0b0c7acd5f08db8ea": "5122c535d7a15d0b5f5a5c810ffe0ca2",
".git/objects/d5/87d5b6fcc9d068e4a60d061e04be77e0c72e35": "3dbd5b7be5caf05a22745380320ed28f",
".git/objects/aa/2c95af452bb9d0ab8eace7a69f69b1514359d1": "1f1277befd934fcef979742a455a33ee",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/a4e7035ffe70c88e748841f4f20f5f72453f82": "ebb7c281f40eb11b9e8747ac2570d261",
".git/objects/b7/763d68f13cf3c8ff901dd99897b939913d2fb0": "8a58e9f007beccf5623148037752f1ec",
".git/objects/a8/a7f4c981028dcedb2fff3033d1ba5a372995f3": "1935284d7d02dcfefde561520f9a9a7f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/da86c1d2e9baacbf58d635f8af18ac1f46ab5a": "e6a955fb87282225585f6bb6ffb62ed9",
".git/objects/ef/f6831290a75b3cb31ebe3aa3dcb21e60ae21d3": "3b57bcf4bd03915499ba2b32fb40e3af",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c3/2669c180c4f2d36cab28daa9a4b7d784e448c0": "24bfde9861dea259826136c8c707dfe2",
".git/objects/e1/4a68f531d91f4b8d595067510039bc643f74fa": "a10c16212673b4cdab225cc167bcc837",
".git/objects/cd/176dcb2c980e86a355b1bdc33c4adb80b9f3f6": "43c1ecd643f7bbea18bbd3b7c1260f5c",
".git/objects/c5/b4ef463f949243870d1d24002ded839fc6f1a3": "0f31a9db1d03fff63012b441b5c7d85e",
".git/objects/c5/15ae44873a101597a87e6e3e52fb7b39355da5": "7d046417a55c24abe108dddd49944c0c",
".git/objects/cb/7e88e331c077c4962a003dd480eca58ff1a1c4": "69064e2e7f44d3cf882e47d7ab02e8cb",
".git/objects/f8/bfea8bc3251069ddb42ac0b35bf01c1d723cf4": "a4406b11798c1c809d134bf38021a7f1",
".git/objects/ce/d8522dd52474045b1bd883e4a2a29fb10966f2": "8c6e8d6dd0027c9683a67eab0e9ad8be",
".git/objects/2d/cbb900d22e9a7f1544499a096aac6ea221bb46": "63ad4ac94f3f27793a96726bdf844e65",
".git/objects/2d/c18e11e69b789953c14061dedd11df1a701c3f": "46ebba27673872bfdf76d7c0e16fff82",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/41/d7824ded835665905771a4aa5a3f7839570b2d": "286441ebd3fad6b021a7ff69b30c6b5c",
".git/objects/1b/7b90362a7963ed3192819d1e872d11a880a902": "6cba0ad4276873245583daab3cb1c5ad",
".git/objects/4a/1e8028a3f05e5bfe8aa510bd63079cc5c374c4": "3f91067fe408067bc475bf7b6777d460",
".git/objects/24/93f6d62dd575e9afba8c299138db98e53c137f": "1fedd02d6f2b47f160b9b171a31a0aed",
".git/objects/4f/03aa05dc2719eb0c89cf44a2a612efbd3d1cee": "0ed5fae97c133dfacc5caaa9ae1a7738",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/15/7e94e0071062fc10d9ced2bf2dcc8c7119bd22": "79475f3c19109ac0a5bc645b6d15ed90",
".git/objects/8c/42ae79a8b77e1189b602d3ab6555328d3bd9a8": "d490453a5d6523992af961a349734093",
".git/objects/8c/9daef8a281ba7f0f616756ae685be34671a90a": "f668d8e35e82ee9ba8cc5f040fb92e8b",
".git/objects/76/2c08d3261a9b204ba952fee417ea198a800a21": "825a8e59d2e03c7a474318515ea910fc",
".git/objects/76/a6bc53f5349f341c4fb4e5f498e5ab2a01ece2": "759093febe0a505e2cd753164f88f90f",
".git/objects/1c/30c6dcce87a383835121b9680c34b6cefc246a": "534d246eca456696d3d551694b3b8e04",
".git/objects/82/8000c45decdb83bf59939e85a0fbc20b7f6721": "d46fe15f46cfdce3043e865f429655d0",
".git/objects/40/b54ff7535e66838a5698d54ce2087282de5c7e": "16181fd3f58329fd87cc5a4377b70a60",
".git/objects/2e/253b1636610a6f91006803edb80de1e4546869": "733c00355c87ac2d710659c493ccf720",
".git/objects/2b/7c406d3fd71350ce533da28acdacc76be6ad3f": "2e7b1980a63fbcd779d4108c7a45ca10",
".git/objects/78/1072b7824cc18aa313f41ccb8d240ca2512a41": "68f184f6e323ac12a7ec4a3de59640c1",
".git/objects/78/b5f30dc15430ec625e2d4633ca9c15b43ac038": "17e733c4d4ee9b14b9e6445a92a348ca",
".git/objects/14/eb7f3e7bb002a1ccd97adf4ab0cf0b80d4ce43": "b88104a5940f3ca1d456a6dad328f0b8",
".git/objects/8e/6bfb775ac00c45ebb503833cbe909f2bf15805": "e86444061e235111fbb925aeb6734dec",
".git/objects/22/ee691ee96a3f9a3aaa1faa6f35e4a0a3621577": "d6be908efd0a8805f3758ed1fdb121e1",
".git/objects/25/db7adf70efab310ffdd65793955af7576fe227": "21f11e3fc978c76afcdc046c2dd9dbcc",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "558363db869942ac773456a34550524f",
".git/logs/refs/heads/gh-pages": "2dd3247677f8c941926b5c5ebc174ca4",
".git/logs/refs/heads/main": "c152b1757a0dd34789ca56d04ed7682a",
".git/logs/refs/remotes/origin/gh-pages": "7bdc96b4fe203c483977073fe313175a",
".git/logs/refs/remotes/origin/HEAD": "7b56db0c306fa1791398fa945a352e8c",
".git/logs/refs/remotes/origin/main": "aae1e0b758a256fd2cc57377ffe9b1e4",
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
".git/refs/heads/gh-pages": "0f1f8d607cc6abbbb81a4fa7e451a8be",
".git/refs/heads/main": "5e2306c7300d13fbca87ab0f5155d85f",
".git/refs/remotes/origin/gh-pages": "0f1f8d607cc6abbbb81a4fa7e451a8be",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "5e2306c7300d13fbca87ab0f5155d85f",
".git/index": "bfde58580fbaa4b9902c5ed604b9dfdf",
".git/packed-refs": "ebab17d0c5ee381f6be11863c1e12be0",
".git/COMMIT_EDITMSG": "69103e5af80118b578d06c61e33a05da",
"assets/AssetManifest.json": "fce052f203e311729dc999a4c27b626b",
"assets/NOTICES": "04613602d37ab1129ea70ed938f3eea4",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "1fe95c360f572cc9cf0b9473722c1fdf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "cfe56c2d5e1032d41482564dfb1764c5",
"assets/fonts/MaterialIcons-Regular.otf": "58b76e97d2b8af6a2d5857ec1bfd7fc0",
"assets/assets/images/tiger.png": "e5fb72ef709704ab45f93a0bd2096065",
"assets/assets/images/snake.png": "0753a52af312fef413f6f54c35b1d1ee",
"assets/assets/images/vulture.png": "74003d9928a8b04e60e35b4e2d834999",
"assets/assets/game_data/game_book/game_book.json": "2ef2a37ded13cc1f08bc9ffc7dbc23b6",
"assets/assets/game_data/quiz/true_false_game.json": "e4368aec79873f98001dfde12f83478f",
"assets/assets/game_data/quiz/classification_game.json": "6e3f796fa72b720e17114bcf8e568b90",
"assets/assets/game_data/quiz/multiple_choice_game.json": "57ce8e832abb982eeca6f1415735908f",
"assets/assets/game_data/quiz/multiple_choice_2_game.json": "0ce7a9c3442399c1a22e8122abc5d4f0",
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

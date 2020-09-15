'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let categories = await queryInterface.bulkInsert("Categories", [
      { id:0, description: "All Categories" },
      { id:1, description: "Fruits" },
      { id:2, description: "Vegetables" },
      { id:3, description: "Dairy" },
      { id:4, description: "Meats" },
      { id:5, description: "Clothes" },
      { id:6, description: "Drinks" },
      { id:7, description: "Electronics" },
      { id:8, description: "Toys" },
    ]);

    let units = await queryInterface.bulkInsert("Units", [
      { id:1, description: "Pc" },
      { id:2, description: "Kg" },
      { id:3, description: "Lt" },
      { id:4, description: "Gl" },
      { id:5, description: "In" }
    ]);

    let stores = await queryInterface.bulkInsert("Stores", [
      { id:1,description:"HEB" },
      { id:2,description:"Waltmart" },
      { id:3,description:"SAMs" },
      { id:4,description:"Costco" },
      { id:5,description:"Soriana" }
    ]);

    let products = await queryInterface.bulkInsert("Products", [
      { id:1,unitId:2,categoryId:2,description:"Tomato",picture:"https://pngimg.com/uploads/tomato/tomato_PNG12567.png"},
      { id:2,unitId:4,categoryId:3,description:"Milk",picture:"https://images.squarespace-cdn.com/content/v1/522a1e61e4b09616ca67a851/1589406651846-KQT3GKBNA9BKO9OCHIV3/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/Whole+Milk++64oz++%283+of+6%29.jpg"},
      { id:3,unitId:1,categoryId:5,description:"Belt",picture:"https://cdn.shopify.com/s/files/1/1357/3867/products/EXPNSMBRN_1000px_1024x1024.jpg"},
      { id:4,unitId:2,categoryId:1,description:"Pineapple",picture:"https://i.ndtvimg.com/mt/cooks/2014-11/pineapple-annanas.jpg"},
      { id:5,unitId:2,categoryId:4,description:"Steak",picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Entrec%C3%B4te_charolais_01_fcm.jpg/300px-Entrec%C3%B4te_charolais_01_fcm.jpg"},
      { id:6,unitId:3,categoryId:6,description:"Soda",picture:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F38%2F2014%2F02%2F12234109%2F550_101527363.jpg&q=85"},
      { id:7,unitId:5,categoryId:7,description:"TV",picture:"https://spy.com/wp-content/uploads/2019/12/curved-tv-samsung.jpg"},
      { id:8,unitId:1,categoryId:7,description:"Apple TV",picture:"https://images.macrumors.com/t/xsMRJjt7c9UcXKUqcJOp_iE-G2w=/1600x/https://images.macrumors.com/article-new/2013/12/appletv4k2.jpg"},
      { id:9,unitId:1,categoryId:6,description:"Six Pack",picture:"https://products0.imgix.drizly.com/ci-corona-extra-2501fe5ca490cb1d.jpeg"},
      { id:10,unitId:1,categoryId:6,description:"12 Pack",picture:"https://products0.imgix.drizly.com/ci-corona-extra-2501fe5ca490cb1d.jpeg"},
      { id:11,unitId:2,categoryId:1,description:"Orange",picture:"https://i0.wp.com/www.agriculturenigeria.com/wp-content/uploads/2020/01/orange-1.jpg"},
      { id:12,unitId:1,categoryId:5,description:"Pants",picture:"https://assets.adidas.com/images/w_600,f_auto,q_auto/98c3784fbc15490daf79a97600fd502f_9366/Firebird_Track_Pants_Black_ED6897_21_model.jpg"},
      { id:13,unitId:2,categoryId:3,description:"Cheese",picture:"https://www.ecosystemmarketplace.com/wp-content/uploads/2019/11/Swiss-Cheese.jpg"},
      { id:14,unitId:1,categoryId:2,description:"Lettuce",picture:"https://images-na.ssl-images-amazon.com/images/I/41gxkveZhEL._AC_.jpg"},
      { id:15,unitId:2,categoryId:4,description:"Ground Beef",picture:"https://justcook.butcherbox.com/wp-content/uploads/2019/06/ground-beef-800x500.jpg"},
      { id:16,unitId:2,categoryId:1,description:"Lemon",picture:"https://i.ndtvimg.com/mt/cooks/2014-11/lemon.jpg"},
      { id:17,unitId:1,categoryId:5,description:"Hat",picture:"https://images-na.ssl-images-amazon.com/images/I/416q4XmRWBL._AC_.jpg"},
      { id:18,unitId:1,categoryId:7,description:"Headsets",picture:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4505/4505300_sd.jpg"},
      { id:19,unitId:3,categoryId:6,description:"Soda",picture:"https://images-na.ssl-images-amazon.com/images/I/61XYeL05DSL._SL1500_.jpg"},
      { id:20,unitId:1,categoryId:8,description:"TakeBreak-Duck",picture:"https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/500x659/products/501/10539/blue-Rubber-Duck-ad-line-3__84014.1569599632.jpg"},
      { id:21,unitId:1,categoryId:8,description:"BabyJoda Funko",picture:"https://images-na.ssl-images-amazon.com/images/I/516oRhx3HoL._AC_SL1153_.jpg"}
    ]);

    let prices = await queryInterface.bulkInsert("Prices", [
      { id:1,storeId:1,productId:1,price:15.5},
      { id:2,storeId:1,productId:2,price:19},
      { id:3,storeId:1,productId:3,price:100},
      { id:4,storeId:1,productId:4,price:10.5},
      { id:5,storeId:1,productId:5,price:140.5},
      { id:6,storeId:1,productId:6,price:30},
      { id:7,storeId:1,productId:7,price:7500},
      { id:8,storeId:1,productId:8,price:1000},
      { id:9,storeId:1,productId:9,price:99},
      { id:10,storeId:1,productId:10,price:180},
      { id:11,storeId:1,productId:11,price:25.5},
      { id:12,storeId:1,productId:12,price:650},
      { id:13,storeId:1,productId:13,price:70},
      { id:14,storeId:1,productId:14,price:9},
      { id:15,storeId:1,productId:15,price:130},
      { id:16,storeId:1,productId:16,price:15},
      { id:17,storeId:1,productId:17,price:999},
      { id:18,storeId:1,productId:18,price:3000},
      { id:19,storeId:1,productId:19,price:35},
      { id:20,storeId:1,productId:20,price:300},
      { id:21,storeId:1,productId:21,price:299},
      { id:22,storeId:2,productId:1,price:17},
      { id:23,storeId:2,productId:2,price:17},
      { id:24,storeId:2,productId:3,price:100.5},
      { id:25,storeId:2,productId:4,price:12.5},
      { id:26,storeId:2,productId:5,price:142.5},
      { id:27,storeId:2,productId:6,price:30},
      { id:28,storeId:2,productId:7,price:7900},
      { id:29,storeId:2,productId:8,price:1100},
      { id:30,storeId:2,productId:9,price:80},
      { id:31,storeId:2,productId:10,price:170},
      { id:32,storeId:2,productId:11,price:27},
      { id:33,storeId:2,productId:12,price:610},
      { id:34,storeId:2,productId:13,price:80},
      { id:35,storeId:2,productId:14,price:8.5},
      { id:36,storeId:2,productId:15,price:140},
      { id:37,storeId:2,productId:16,price:17},
      { id:38,storeId:2,productId:17,price:970},
      { id:39,storeId:2,productId:18,price:3100},
      { id:40,storeId:2,productId:19,price:36},
      { id:41,storeId:2,productId:20,price:299},
      { id:42,storeId:2,productId:21,price:289},
      { id:43,storeId:3,productId:1,price:16},
      { id:44,storeId:3,productId:2,price:21},
      { id:45,storeId:3,productId:3,price:80},
      { id:46,storeId:3,productId:4,price:10},
      { id:47,storeId:3,productId:5,price:140},
      { id:48,storeId:3,productId:6,price:39},
      { id:49,storeId:3,productId:7,price:7550},
      { id:50,storeId:3,productId:8,price:1050},
      { id:51,storeId:3,productId:9,price:79},
      { id:52,storeId:3,productId:10,price:189},
      { id:53,storeId:3,productId:11,price:25},
      { id:54,storeId:3,productId:12,price:680},
      { id:55,storeId:3,productId:13,price:74},
      { id:56,storeId:3,productId:14,price:10},
      { id:57,storeId:3,productId:15,price:110},
      { id:58,storeId:3,productId:16,price:15},
      { id:59,storeId:3,productId:17,price:979},
      { id:60,storeId:3,productId:18,price:3800},
      { id:61,storeId:3,productId:19,price:38},
      { id:62,storeId:3,productId:20,price:380},
      { id:63,storeId:3,productId:21,price:289},
      { id:64,storeId:4,productId:1,price:18},
      { id:65,storeId:4,productId:2,price:18},
      { id:66,storeId:4,productId:3,price:108.5},
      { id:67,storeId:4,productId:4,price:18.5},
      { id:68,storeId:4,productId:5,price:148},
      { id:69,storeId:4,productId:6,price:24},
      { id:70,storeId:4,productId:7,price:8000},
      { id:71,storeId:4,productId:8,price:1800},
      { id:72,storeId:4,productId:9,price:88},
      { id:73,storeId:4,productId:10,price:180},
      { id:74,storeId:4,productId:11,price:28},
      { id:75,storeId:4,productId:12,price:618},
      { id:76,storeId:4,productId:13,price:80},
      { id:77,storeId:4,productId:14,price:8},
      { id:78,storeId:4,productId:15,price:180},
      { id:79,storeId:4,productId:16,price:19},
      { id:80,storeId:4,productId:17,price:950},
      { id:81,storeId:4,productId:18,price:3000},
      { id:82,storeId:4,productId:19,price:30},
      { id:83,storeId:4,productId:20,price:290},
      { id:84,storeId:4,productId:21,price:280},
      { id:85,storeId:5,productId:1,price:18},
      { id:86,storeId:5,productId:2,price:14},
      { id:87,storeId:5,productId:3,price:105},
      { id:88,storeId:5,productId:4,price:14},
      { id:89,storeId:5,productId:5,price:148},
      { id:90,storeId:5,productId:6,price:39},
      { id:91,storeId:5,productId:7,price:7590},
      { id:92,storeId:5,productId:8,price:1090},
      { id:93,storeId:5,productId:9,price:99},
      { id:94,storeId:5,productId:10,price:189},
      { id:95,storeId:5,productId:11,price:29},
      { id:96,storeId:5,productId:12,price:659},
      { id:97,storeId:5,productId:13,price:79},
      { id:98,storeId:5,productId:14,price:15},
      { id:99,storeId:5,productId:15,price:139},
      { id:100,storeId:5,productId:16,price:19},
      { id:101,storeId:5,productId:17,price:999},
      { id:102,storeId:5,productId:18,price:3900},
      { id:103,storeId:5,productId:19,price:39},
      { id:104,storeId:5,productId:20,price:309},
      { id:105,storeId:5,productId:21,price:350}
    ]);

    let users = await queryInterface.bulkInsert("Users", [
      { username:"Edgar", password:"Edgar", email:"e.mdlr@live.com"},
      { username:"Cesar", password:"Cesar", email:"cesar@live.com"},
      { username:"sei", password:"sei", email:"sei@ga.com"}

    ]);

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Prices', null, {});
    await queryInterface.bulkDelete('Products', null, {});
    await queryInterface.bulkDelete('Stores', null, {});
    await queryInterface.bulkDelete('Units', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
  }
};

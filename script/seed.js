"use strict";

const {
  db,
  models: { User, Product, Order, Order_Product },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({ username: "cody", password: "123" }),
    User.create({ username: "murphy", password: "123" }),
    User.create({ username: "nina", password: "Respira" }),
  ]);

  // Creating Products
  const products = await Promise.all([
    Product.create({
      name: "IronMan",
      description:
        "Tony Stark gears up in his red and gold Iron Man suit to join your Marvel Avengers: Endgame collection as a Mega Pop! figure. Complete your Marvel lineup with the towering, Funko Exclusive figure! Vinyl figure is approximately 18-inches tall.",
      imageUrl:
        "https://www.tradeinn.com/f/13820/138203491/funko-pop-marvel-avengers-endgame-iron-man-exclusive.jpg",
      price: 3000,
    }),
    Product.create({
      name: "SpiderMan",
      description:
        "Assemble the Avengers to keep Thanos from getting the Infinity Stones in your Marvel Infinity War collection with the help of Pop! Iron Spider. Collectible stands approximately 3.75-inches tall.",
      imageUrl: "https://m.media-amazon.com/images/I/41i86B2N36L.jpg",
      price: 12,
    }),
    Product.create({
      name: "BatMan",
      description:
        "Join The Caped Crusader™, Batman, in his early years of fighting crime in Gotham City. This Jumbo Pop! Batman™ is ready to enact vengeance. Celebrate one of DC Comics’ most recognizable superheroes by adding the towering Pop! Batman to your DC collection of The Batman. Vinyl figure is approximately 10.75-inches tall.",
      imageUrl: "https://m.media-amazon.com/images/I/61DjVipqI+L.jpg",
      price: 20,
    }),
    Product.create({
      name: "Doctor Strange",
      description:
        "Test the limits of reality and leap into the Marvel multiverse with Pop! Doctor Strange from Doctor Strange in the Multiverse of Madness! Theres even a 1 in 6 chance you may find the cosmic chase variant. Vinyl bobblehead is approximately 4.15-inches tall.",
      imageUrl: "https://m.media-amazon.com/images/I/416hCIguADL._AC_.jpg",
      price: 45,
    }),
    Product.create({
      name: "Groot",
      description:
        "Your Guardians of the Galaxy Vol. 2 collection is worried sick looking for Pop! Groot. Help them find their Flora Colossus toddler. Collectible stands approximately 3.75-inches tall.",
      imageUrl: "https://m.media-amazon.com/images/I/5118mkJR64L.jpg",
      price: 32,
    }),
    Product.create({
      name: "Nick Fury",
      description:
        "Shape-shifting Skrulls have been infiltrating the Earth for years. Who do you trust? One of the greatest super spies in the world, Nick Fury, as a Pop! is ready to uncover the truth in your collection. Add this 2022 New York Comic-Con exclusive Pop! Nick Fury from Marvel Studios’ Secret Invasion to your team to see what takes shape. Vinyl bobblehead is approximately 3.94-inches tall.",
      imageUrl: "https://m.media-amazon.com/images/I/512U4+zLdpL.jpg",
      price: 41,
    }),
    Product.create({
      name: "Winter Soldier",
      description:
        "Bucky Barnes joins The Falcon (also known as Sam Wilson) on a global adventure as the Winter Soldier. What will Pop! Winter Soldier encounter when he joins your Marvel The Falcon and the Winter Soldier collection? Vinyl figure is approximately 5-inches tall.",
      imageUrl:
        "https://media.gamestop.com/i/gamestop/11105212/Funko-POP-Marvel-The-Falcon-and-the-Winter-Soldier---Winter-Soldier-4.15-in-Bobblehead-Vinyl-Figure",
      price: 65,
    }),

    Product.create({
      name: "Star Lord",
      description:
        "Your Marvel collection is about to go on a galactic adventure with the arrival of Pop! Star-Lord. Theres even a 1 in 6 chance that you may find the chase of Pop! Star-Lord with his mask on. Vinyl bobblehead is approximately 4-inches tall.",
      imageUrl:
        "https://i5.walmartimages.com/asr/e099bc67-f75f-4824-989b-dc9cf093aea2.a872a158a6021212baf5611f6436a817.png",
      price: 12,
    }),
    Product.create({
      name: "Moon Knight",
      description:
        "Welcome to chaos. Embrace everything that has brought you to this moment with Marvels Moon Knight. The Funko exclusive Pop! Moon Knight is ready to take on the action as part of your Marvel collection. Summon him to complete the phases of your Moon Knight set. Vinyl bobblehead is approximately 4-inches tall.",
      imageUrl:
        "https://m.media-amazon.com/images/I/41-CCVDjJrL._AC_SY580_.jpg",
      price: 14,
    }),
    Product.create({
      name: "Captain America",
      description:
        "You wont need time travel to relive the gripping Endgame battle. Collect this Marvel Endgame Pop! of Captain America with his broken shield. Collectible stands 3.75-inches tall.",
      imageUrl: "https://m.media-amazon.com/images/I/61kuNI303UL.jpg",
      price: 15,
    }),
  ]);

  // Creating Orders
  const orders = await Promise.all([
    Order.create({ status: "unfulfilled", userId: 1 }),
    Order.create({ status: "fulfilled", userId: 2 }),
    Order.create({ status: "unfulfilled", userId: 3 }),
  ]);

  // Creating Order_Products
  const order_products = await Promise.all([
    Order_Product.create({
      orderId: 1,
      productId: 1,
      quantityInCart: 1,
      price: 4,
      subtotal: 0,
    }),
    Order_Product.create({
      orderId: 1,
      productId: 2,
      quantityInCart: 2,
      price: 4,
      subtotal: 0,
    }),
    Order_Product.create({
      orderId: 2,
      productId: 3,
      quantityInCart: 3,
      price: 5,
      subtotal: 0,
    }),
  ]);

  console.log(
    `seeded ${users.length} users, ${products.length} products, ${orders.length} orders, and ${order_products.length} order_products.`
  );
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
    products: {
      Ironman: products[0],
      SpiderMan: products[1],
      BatMan: products[2],
      DorctorStrange: products[3],
      Groot: products[4],
      NickFury: products[5],
      WinterSoldier: products[6],
      StarLord: products[7],
      MoonKnight: products[8],
      CaptainAmerica: products[9],
    },
    orders: {
      orderOne: orders[0],
      orderTwo: orders[1],
      orderThree: orders[2],
    },
    order_products: {
      order_products_One: order_products[0],
      order_products_Two: order_products[1],
      order_products_Three: order_products[2],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;

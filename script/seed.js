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
    User.create({
      name: "cody",
      username: "cody",
      password: "123",
      email: "cody@awesome.com",
    }),
    User.create({
      username: "murphy",
      password: "123",
      name: "murphy",
      email: "murphy@tshirts.com",
    }),
    User.create({
      username: "nina",
      password: "Respira",
      name: "nina",
      email: "nina@99.com",
    }),
    User.create({
      name: "john",
      username: "john",
      password: "123",
      email: "john@doe.com",
    }),
    User.create({
      name: "jane",
      username: "jane",
      password: "123",
      email: "jane@doe.com",
    }),
    User.create({
      name: "tony",
      username: "tony",
      password: "123",
      email: "tony@tall.com",
    }),
    User.create({
      name: "code",
      username: "code",
      password: "123",
      email: "code@wars.com",
    }),
    User.create({
      name: "smith",
      username: "smith",
      password: "123",
      email: "smith@steel.com",
    }),
    User.create({
      name: "david",
      username: "david",
      password: "123",
      email: "david@warner.com",
    }),
    User.create({
      name: "admin",
      username: "admin",
      password: "456",
      email: "admin@team3.com",
      isAdmin: true,
    }),
  ]);
  // await User.create({
  //   id: -1,
  //   username: "guest",
  //   password: "321",
  // });

  // Creating Products
  const products = await Promise.all([
    Product.create({
      name: "Groot",
      price: 85,
      imageUrl:
        "https://i5.walmartimages.com/asr/46f15960-c7bb-41db-80cc-bad0319c48d0.451c73330e35557edbbd174dcda9334d.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      description:
        "Welcome to chaos. Embrace everything that has brought you to this moment with Marvels Moon Knight. The Funko exclusive Pop! Moon Knight is ready to take on the action as part of your Marvel collection. Summon him to complete the phases of your Moon Knight set. Vinyl bobblehead is approximately 4-inches tall",
      category: "Marvel",
      quantity: 9,
    }),

    Product.create({
      name: "Thanos",
      price: 96,
      imageUrl:
        "https://i5.walmartimages.com/asr/8c8affbe-8a14-42ea-9946-7f622e86d05d.9bf14d85f71ca51d14fd0b24ba5ed4c3.png",
      description:
        "Join The Caped Crusader™, Batman, in his early years of fighting crime in Gotham City. This Jumbo Pop! Batman™ is ready to enact vengeance. Celebrate one of DC Comics’ most recognizable superheroes by adding the towering Pop! Batman to your DC collection of The Batman. Vinyl figure is approximately 10.75-inches tall.",
      category: "DC",
      quantity: 9,
    }),

    Product.create({
      name: "Doctor Strange",
      price: 133,
      imageUrl:
        "https://i5.walmartimages.com/asr/2bf25571-db7d-412c-a34a-caea2ce791f0.da58e1dfbd604b54a004378ba443c37a.png",
      description:
        "Your Guardians of the Galaxy Vol. 2 collection is worried sick looking for Pop! Groot. Help them find their Flora Colossus toddler. Collectible stands approximately 3.75-inches tall.",
      category: "Marvel",
      quantity: 3,
    }),

    Product.create({
      name: "Batman",
      price: 55,
      imageUrl:
        "https://i5.walmartimages.com/asr/a6bde2e2-7f2b-4604-b08e-73243bf454be_1.35710300994c6dd89526ff9d0eae2d46.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      description:
        "Assemble the Avengers to keep Thanos from getting the Infinity Stones in your Marvel Infinity War collection with the help of Pop! Iron Spider. Collectible stands approximately 3.75-inches tall.",
      category: "Marvel",
      quantity: 1,
    }),

    Product.create({
      name: "StarLord",
      price: 80,
      imageUrl:
        "https://i5.walmartimages.com/asr/a6bde2e2-7f2b-4604-b08e-73243bf454be_1.35710300994c6dd89526ff9d0eae2d46.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      description:
        "Test the limits of reality and leap into the Marvel multiverse with Pop! Doctor Strange from Doctor Strange in the Multiverse of Madness! Theres even a 1 in 6 chance you may find the cosmic chase variant. Vinyl bobblehead is approximately 4.15-inches tall.",
      category: "Marvel",
      quantity: 5,
    }),

    Product.create({
      name: "Vision",
      price: 100,
      imageUrl:
        "https://i5.walmartimages.com/asr/b0c12871-03d7-4d83-b387-1e9f9ee22659.c7c89b7e286a7ffde35d62eba956a0cf.png",
      description:
        "Shape-shifting Skrulls have been infiltrating the Earth for years. Who do you trust? One of the greatest super spies in the world, Nick Fury, as a Pop! is ready to uncover the truth in your collection. Add this 2022 New York Comic-Con exclusive Pop! Nick Fury from Marvel Studios’ Secret Invasion to your team to see what takes shape. Vinyl bobblehead is approximately 3.94-inches tall.",
      category: "DC",
      quantity: 1,
    }),

    Product.create({
      name: "Thanos",
      price: 121,
      imageUrl:
        "https://i5.walmartimages.com/asr/b0c12871-03d7-4d83-b387-1e9f9ee22659.c7c89b7e286a7ffde35d62eba956a0cf.png",
      description:
        "Your Guardians of the Galaxy Vol. 2 collection is worried sick looking for Pop! Groot. Help them find their Flora Colossus toddler. Collectible stands approximately 3.75-inches tall.",
      category: "DC",
      quantity: 4,
    }),

    Product.create({
      name: "Thanos",
      price: 20,
      imageUrl:
        "https://i5.walmartimages.com/asr/b0c12871-03d7-4d83-b387-1e9f9ee22659.c7c89b7e286a7ffde35d62eba956a0cf.png",
      description:
        "Test the limits of reality and leap into the Marvel multiverse with Pop! Doctor Strange from Doctor Strange in the Multiverse of Madness! Theres even a 1 in 6 chance you may find the cosmic chase variant. Vinyl bobblehead is approximately 4.15-inches tall.",
      category: "Marvel",
      quantity: 7,
    }),

    Product.create({
      name: "Doctor Strange",
      price: 133,
      imageUrl:
        "https://i5.walmartimages.com/asr/9221a56a-77cb-4f4c-99ab-abb08486aa9a.ffb975e1eebbdd335e51a5589092799f.png",
      description:
        "Tony Stark gears up in his red and gold Iron Man suit to join your Marvel Avengers: Endgame collection as a Mega Pop! figure. Complete your Marvel lineup with the towering, Funko Exclusive figure! Vinyl figure is approximately 18-inches tall.",
      category: "Marvel",
      quantity: 8,
    }),

    Product.create({
      name: "Thanos",
      price: 24,
      imageUrl:
        "https://i5.walmartimages.com/asr/46f15960-c7bb-41db-80cc-bad0319c48d0.451c73330e35557edbbd174dcda9334d.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      description:
        "Your Guardians of the Galaxy Vol. 2 collection is worried sick looking for Pop! Groot. Help them find their Flora Colossus toddler. Collectible stands approximately 3.75-inches tall.",
      category: "DC",
      quantity: 5,
    }),

    Product.create({
      name: "Winter Soldier",
      price: 133,
      imageUrl:
        "https://i5.walmartimages.com/asr/8c8affbe-8a14-42ea-9946-7f622e86d05d.9bf14d85f71ca51d14fd0b24ba5ed4c3.png",
      description:
        "Shape-shifting Skrulls have been infiltrating the Earth for years. Who do you trust? One of the greatest super spies in the world, Nick Fury, as a Pop! is ready to uncover the truth in your collection. Add this 2022 New York Comic-Con exclusive Pop! Nick Fury from Marvel Studios’ Secret Invasion to your team to see what takes shape. Vinyl bobblehead is approximately 3.94-inches tall.",
      category: "DC",
      quantity: 7,
    }),

    Product.create({
      name: "Nick Fury",
      price: 13,
      imageUrl:
        "https://i5.walmartimages.com/asr/8c8affbe-8a14-42ea-9946-7f622e86d05d.9bf14d85f71ca51d14fd0b24ba5ed4c3.png",
      description:
        "Welcome to chaos. Embrace everything that has brought you to this moment with Marvels Moon Knight. The Funko exclusive Pop! Moon Knight is ready to take on the action as part of your Marvel collection. Summon him to complete the phases of your Moon Knight set. Vinyl bobblehead is approximately 4-inches tall",
      category: "DC",
      quantity: 9,
    }),

    Product.create({
      name: "Doctor Strange",
      price: 52,
      imageUrl:
        "https://i5.walmartimages.com/asr/dc47e701-06d8-414a-bbbd-724ca6bfe7a2.ed75ec07bddb9c915ddf8667aab67588.png",
      description:
        "Join The Caped Crusader™, Batman, in his early years of fighting crime in Gotham City. This Jumbo Pop! Batman™ is ready to enact vengeance. Celebrate one of DC Comics’ most recognizable superheroes by adding the towering Pop! Batman to your DC collection of The Batman. Vinyl figure is approximately 10.75-inches tall.",
      category: "DC",
      quantity: 3,
    }),

    Product.create({
      name: "StarLord",
      price: 48,
      imageUrl:
        "https://i5.walmartimages.com/asr/2bf25571-db7d-412c-a34a-caea2ce791f0.da58e1dfbd604b54a004378ba443c37a.png",
      description:
        "Test the limits of reality and leap into the Marvel multiverse with Pop! Doctor Strange from Doctor Strange in the Multiverse of Madness! Theres even a 1 in 6 chance you may find the cosmic chase variant. Vinyl bobblehead is approximately 4.15-inches tall.",
      category: "DC",
      quantity: 0,
    }),

    Product.create({
      name: "Superman",
      price: 108,
      imageUrl:
        "https://i5.walmartimages.com/asr/8c8affbe-8a14-42ea-9946-7f622e86d05d.9bf14d85f71ca51d14fd0b24ba5ed4c3.png",
      description:
        "Welcome to chaos. Embrace everything that has brought you to this moment with Marvels Moon Knight. The Funko exclusive Pop! Moon Knight is ready to take on the action as part of your Marvel collection. Summon him to complete the phases of your Moon Knight set. Vinyl bobblehead is approximately 4-inches tall",
      category: "Marvel",
      quantity: 3,
    }),

    Product.create({
      name: "Doctor Strange",
      price: 73,
      imageUrl:
        "https://i5.walmartimages.com/asr/9221a56a-77cb-4f4c-99ab-abb08486aa9a.ffb975e1eebbdd335e51a5589092799f.png",
      description:
        "Your Marvel collection is about to go on a galactic adventure with the arrival of Pop! Star-Lord. Theres even a 1 in 6 chance that you may find the chase of Pop! Star-Lord with his mask on. Vinyl bobblehead is approximately 4-inches tall.",
      category: "Marvel",
      quantity: 9,
    }),

    Product.create({
      name: "Superman",
      price: 58,
      imageUrl:
        "https://i5.walmartimages.com/asr/8c8affbe-8a14-42ea-9946-7f622e86d05d.9bf14d85f71ca51d14fd0b24ba5ed4c3.png",
      description:
        "Assemble the Avengers to keep Thanos from getting the Infinity Stones in your Marvel Infinity War collection with the help of Pop! Iron Spider. Collectible stands approximately 3.75-inches tall.",
      category: "Marvel",
      quantity: 7,
    }),

    Product.create({
      name: "Vision",
      price: 51,
      imageUrl:
        "https://i5.walmartimages.com/asr/b0c12871-03d7-4d83-b387-1e9f9ee22659.c7c89b7e286a7ffde35d62eba956a0cf.png",
      description:
        "Shape-shifting Skrulls have been infiltrating the Earth for years. Who do you trust? One of the greatest super spies in the world, Nick Fury, as a Pop! is ready to uncover the truth in your collection. Add this 2022 New York Comic-Con exclusive Pop! Nick Fury from Marvel Studios’ Secret Invasion to your team to see what takes shape. Vinyl bobblehead is approximately 3.94-inches tall.",
      category: "Marvel",
      quantity: 0,
    }),

    Product.create({
      name: "Doctor Strange",
      price: 44,
      imageUrl:
        "https://i5.walmartimages.com/asr/46f15960-c7bb-41db-80cc-bad0319c48d0.451c73330e35557edbbd174dcda9334d.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      description:
        "Tony Stark gears up in his red and gold Iron Man suit to join your Marvel Avengers: Endgame collection as a Mega Pop! figure. Complete your Marvel lineup with the towering, Funko Exclusive figure! Vinyl figure is approximately 18-inches tall.",
      category: "DC",
      quantity: 2,
    }),

    Product.create({
      name: "Nick Fury",
      price: 69,
      imageUrl:
        "https://i5.walmartimages.com/asr/9221a56a-77cb-4f4c-99ab-abb08486aa9a.ffb975e1eebbdd335e51a5589092799f.png",
      description:
        "Bucky Barnes joins The Falcon (also known as Sam Wilson) on a global adventure as the Winter Soldier. What will Pop! Winter Soldier encounter when he joins your Marvel The Falcon and the Winter Soldier collection? Vinyl figure is approximately 5-inches tall.",
      category: "Marvel",
      quantity: 1,
    }),

    Product.create({
      name: "Superman",
      price: 70,
      imageUrl:
        "https://i5.walmartimages.com/asr/2bf25571-db7d-412c-a34a-caea2ce791f0.da58e1dfbd604b54a004378ba443c37a.png",
      description:
        "Test the limits of reality and leap into the Marvel multiverse with Pop! Doctor Strange from Doctor Strange in the Multiverse of Madness! Theres even a 1 in 6 chance you may find the cosmic chase variant. Vinyl bobblehead is approximately 4.15-inches tall.",
      category: "Marvel",
      quantity: 9,
    }),

    Product.create({
      name: "Batman",
      price: 100,
      imageUrl:
        "https://i5.walmartimages.com/asr/b0c12871-03d7-4d83-b387-1e9f9ee22659.c7c89b7e286a7ffde35d62eba956a0cf.png",
      description:
        "Bucky Barnes joins The Falcon (also known as Sam Wilson) on a global adventure as the Winter Soldier. What will Pop! Winter Soldier encounter when he joins your Marvel The Falcon and the Winter Soldier collection? Vinyl figure is approximately 5-inches tall.",
      category: "Marvel",
      quantity: 6,
    }),

    Product.create({
      name: "Wanda",
      price: 68,
      imageUrl:
        "https://i5.walmartimages.com/asr/46f15960-c7bb-41db-80cc-bad0319c48d0.451c73330e35557edbbd174dcda9334d.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      description:
        "Welcome to chaos. Embrace everything that has brought you to this moment with Marvels Moon Knight. The Funko exclusive Pop! Moon Knight is ready to take on the action as part of your Marvel collection. Summon him to complete the phases of your Moon Knight set. Vinyl bobblehead is approximately 4-inches tall",
      category: "DC",
      quantity: 8,
    }),

    Product.create({
      name: "Thanos",
      price: 1,
      imageUrl:
        "https://i5.walmartimages.com/asr/8c8affbe-8a14-42ea-9946-7f622e86d05d.9bf14d85f71ca51d14fd0b24ba5ed4c3.png",
      description:
        "Your Marvel collection is about to go on a galactic adventure with the arrival of Pop! Star-Lord. Theres even a 1 in 6 chance that you may find the chase of Pop! Star-Lord with his mask on. Vinyl bobblehead is approximately 4-inches tall.",
      category: "Marvel",
      quantity: 5,
    }),

    Product.create({
      name: "Batman",
      price: 132,
      imageUrl:
        "https://i5.walmartimages.com/asr/dc47e701-06d8-414a-bbbd-724ca6bfe7a2.ed75ec07bddb9c915ddf8667aab67588.png",
      description:
        "Assemble the Avengers to keep Thanos from getting the Infinity Stones in your Marvel Infinity War collection with the help of Pop! Iron Spider. Collectible stands approximately 3.75-inches tall.",
      category: "DC",
      quantity: 3,
    }),

    Product.create({
      name: "Winter Soldier",
      price: 63,
      imageUrl:
        "https://i5.walmartimages.com/asr/b0c12871-03d7-4d83-b387-1e9f9ee22659.c7c89b7e286a7ffde35d62eba956a0cf.png",
      description:
        "Welcome to chaos. Embrace everything that has brought you to this moment with Marvels Moon Knight. The Funko exclusive Pop! Moon Knight is ready to take on the action as part of your Marvel collection. Summon him to complete the phases of your Moon Knight set. Vinyl bobblehead is approximately 4-inches tall",
      category: "DC",
      quantity: 9,
    }),

    Product.create({
      name: "Superman",
      price: 6,
      imageUrl:
        "https://i5.walmartimages.com/asr/1e6c2b33-2497-43b6-a170-5dd49a18c995.f1011bbaa7034cccbefc7401d09ed475.png",
      description:
        "Join The Caped Crusader™, Batman, in his early years of fighting crime in Gotham City. This Jumbo Pop! Batman™ is ready to enact vengeance. Celebrate one of DC Comics’ most recognizable superheroes by adding the towering Pop! Batman to your DC collection of The Batman. Vinyl figure is approximately 10.75-inches tall.",
      category: "DC",
      quantity: 2,
    }),

    Product.create({
      name: "Superman",
      price: 115,
      imageUrl:
        "https://i5.walmartimages.com/asr/b0c12871-03d7-4d83-b387-1e9f9ee22659.c7c89b7e286a7ffde35d62eba956a0cf.png",
      description:
        "Tony Stark gears up in his red and gold Iron Man suit to join your Marvel Avengers: Endgame collection as a Mega Pop! figure. Complete your Marvel lineup with the towering, Funko Exclusive figure! Vinyl figure is approximately 18-inches tall.",
      category: "Marvel",
      quantity: 6,
    }),

    Product.create({
      name: "Groot",
      price: 11,
      imageUrl:
        "https://i5.walmartimages.com/asr/dc47e701-06d8-414a-bbbd-724ca6bfe7a2.ed75ec07bddb9c915ddf8667aab67588.png",
      description:
        "Shape-shifting Skrulls have been infiltrating the Earth for years. Who do you trust? One of the greatest super spies in the world, Nick Fury, as a Pop! is ready to uncover the truth in your collection. Add this 2022 New York Comic-Con exclusive Pop! Nick Fury from Marvel Studios’ Secret Invasion to your team to see what takes shape. Vinyl bobblehead is approximately 3.94-inches tall.",
      category: "DC",
      quantity: 0,
    }),

    Product.create({
      name: "Moon Knight",
      price: 107,
      imageUrl:
        "https://i5.walmartimages.com/asr/1e6c2b33-2497-43b6-a170-5dd49a18c995.f1011bbaa7034cccbefc7401d09ed475.png",
      description:
        "Test the limits of reality and leap into the Marvel multiverse with Pop! Doctor Strange from Doctor Strange in the Multiverse of Madness! Theres even a 1 in 6 chance you may find the cosmic chase variant. Vinyl bobblehead is approximately 4.15-inches tall.",
      category: "Marvel",
      quantity: 9,
    }),

    Product.create({
      name: "Thanos",
      price: 10,
      imageUrl:
        "https://i5.walmartimages.com/asr/2bf25571-db7d-412c-a34a-caea2ce791f0.da58e1dfbd604b54a004378ba443c37a.png",
      description:
        "Join The Caped Crusader™, Batman, in his early years of fighting crime in Gotham City. This Jumbo Pop! Batman™ is ready to enact vengeance. Celebrate one of DC Comics’ most recognizable superheroes by adding the towering Pop! Batman to your DC collection of The Batman. Vinyl figure is approximately 10.75-inches tall.",
      category: "DC",
      quantity: 7,
    }),

    Product.create({
      name: "Batman",
      price: 117,
      imageUrl:
        "https://i5.walmartimages.com/asr/b0c12871-03d7-4d83-b387-1e9f9ee22659.c7c89b7e286a7ffde35d62eba956a0cf.png",
      description:
        "Your Guardians of the Galaxy Vol. 2 collection is worried sick looking for Pop! Groot. Help them find their Flora Colossus toddler. Collectible stands approximately 3.75-inches tall.",
      category: "Marvel",
      quantity: 0,
    }),

    Product.create({
      name: "Spiderman",
      price: 5,
      imageUrl:
        "https://i5.walmartimages.com/asr/8c8affbe-8a14-42ea-9946-7f622e86d05d.9bf14d85f71ca51d14fd0b24ba5ed4c3.png",
      description:
        "Tony Stark gears up in his red and gold Iron Man suit to join your Marvel Avengers: Endgame collection as a Mega Pop! figure. Complete your Marvel lineup with the towering, Funko Exclusive figure! Vinyl figure is approximately 18-inches tall.",
      category: "Marvel",
      quantity: 3,
    }),

    Product.create({
      name: "Wanda",
      price: 106,
      imageUrl:
        "https://i5.walmartimages.com/asr/012d5101-92e5-4ac2-97e7-f2a4f08d242c.09479720fcb4693eb449c22a56c238ab.png",
      description:
        "Your Marvel collection is about to go on a galactic adventure with the arrival of Pop! Star-Lord. Theres even a 1 in 6 chance that you may find the chase of Pop! Star-Lord with his mask on. Vinyl bobblehead is approximately 4-inches tall.",
      category: "Marvel",
      quantity: 8,
    }),

    Product.create({
      name: "StarLord",
      price: 54,
      imageUrl:
        "https://i5.walmartimages.com/asr/9221a56a-77cb-4f4c-99ab-abb08486aa9a.ffb975e1eebbdd335e51a5589092799f.png",
      description:
        "Join The Caped Crusader™, Batman, in his early years of fighting crime in Gotham City. This Jumbo Pop! Batman™ is ready to enact vengeance. Celebrate one of DC Comics’ most recognizable superheroes by adding the towering Pop! Batman to your DC collection of The Batman. Vinyl figure is approximately 10.75-inches tall.",
      category: "DC",
      quantity: 0,
    }),

    Product.create({
      name: "Thanos",
      price: 112,
      imageUrl:
        "https://i5.walmartimages.com/asr/dc47e701-06d8-414a-bbbd-724ca6bfe7a2.ed75ec07bddb9c915ddf8667aab67588.png",
      description:
        "Join The Caped Crusader™, Batman, in his early years of fighting crime in Gotham City. This Jumbo Pop! Batman™ is ready to enact vengeance. Celebrate one of DC Comics’ most recognizable superheroes by adding the towering Pop! Batman to your DC collection of The Batman. Vinyl figure is approximately 10.75-inches tall.",
      category: "Marvel",
      quantity: 1,
    }),

    Product.create({
      name: "Vision",
      price: 4,
      imageUrl:
        "https://i5.walmartimages.com/asr/012d5101-92e5-4ac2-97e7-f2a4f08d242c.09479720fcb4693eb449c22a56c238ab.png",
      description:
        "Shape-shifting Skrulls have been infiltrating the Earth for years. Who do you trust? One of the greatest super spies in the world, Nick Fury, as a Pop! is ready to uncover the truth in your collection. Add this 2022 New York Comic-Con exclusive Pop! Nick Fury from Marvel Studios’ Secret Invasion to your team to see what takes shape. Vinyl bobblehead is approximately 3.94-inches tall.",
      category: "DC",
      quantity: 5,
    }),

    Product.create({
      name: "Winter Soldier",
      price: 14,
      imageUrl:
        "https://i5.walmartimages.com/asr/2bf25571-db7d-412c-a34a-caea2ce791f0.da58e1dfbd604b54a004378ba443c37a.png",
      description:
        "Tony Stark gears up in his red and gold Iron Man suit to join your Marvel Avengers: Endgame collection as a Mega Pop! figure. Complete your Marvel lineup with the towering, Funko Exclusive figure! Vinyl figure is approximately 18-inches tall.",
      category: "Marvel",
      quantity: 5,
    }),

    Product.create({
      name: "Spiderman",
      price: 83,
      imageUrl:
        "https://i5.walmartimages.com/asr/46f15960-c7bb-41db-80cc-bad0319c48d0.451c73330e35557edbbd174dcda9334d.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      description:
        "Your Marvel collection is about to go on a galactic adventure with the arrival of Pop! Star-Lord. Theres even a 1 in 6 chance that you may find the chase of Pop! Star-Lord with his mask on. Vinyl bobblehead is approximately 4-inches tall.",
      category: "Marvel",
      quantity: 1,
    }),

    Product.create({
      name: "Vision",
      price: 58,
      imageUrl:
        "https://i5.walmartimages.com/asr/b0c12871-03d7-4d83-b387-1e9f9ee22659.c7c89b7e286a7ffde35d62eba956a0cf.png",
      description:
        "Bucky Barnes joins The Falcon (also known as Sam Wilson) on a global adventure as the Winter Soldier. What will Pop! Winter Soldier encounter when he joins your Marvel The Falcon and the Winter Soldier collection? Vinyl figure is approximately 5-inches tall.",
      category: "DC",
      quantity: 3,
    }),

    Product.create({
      name: "Nick Fury",
      price: 52,
      imageUrl:
        "https://i5.walmartimages.com/asr/8c8affbe-8a14-42ea-9946-7f622e86d05d.9bf14d85f71ca51d14fd0b24ba5ed4c3.png",
      description:
        "Test the limits of reality and leap into the Marvel multiverse with Pop! Doctor Strange from Doctor Strange in the Multiverse of Madness! Theres even a 1 in 6 chance you may find the cosmic chase variant. Vinyl bobblehead is approximately 4.15-inches tall.",
      category: "Marvel",
      quantity: 9,
    }),

    Product.create({
      name: "Batman",
      price: 143,
      imageUrl:
        "https://i5.walmartimages.com/asr/2bf25571-db7d-412c-a34a-caea2ce791f0.da58e1dfbd604b54a004378ba443c37a.png",
      description:
        "Welcome to chaos. Embrace everything that has brought you to this moment with Marvels Moon Knight. The Funko exclusive Pop! Moon Knight is ready to take on the action as part of your Marvel collection. Summon him to complete the phases of your Moon Knight set. Vinyl bobblehead is approximately 4-inches tall",
      category: "DC",
      quantity: 4,
    }),

    Product.create({
      name: "StarLord",
      price: 141,
      imageUrl:
        "https://i5.walmartimages.com/asr/dc47e701-06d8-414a-bbbd-724ca6bfe7a2.ed75ec07bddb9c915ddf8667aab67588.png",
      description:
        "Join The Caped Crusader™, Batman, in his early years of fighting crime in Gotham City. This Jumbo Pop! Batman™ is ready to enact vengeance. Celebrate one of DC Comics’ most recognizable superheroes by adding the towering Pop! Batman to your DC collection of The Batman. Vinyl figure is approximately 10.75-inches tall.",
      category: "DC",
      quantity: 4,
    }),

    Product.create({
      name: "Vision",
      price: 1,
      imageUrl:
        "https://i5.walmartimages.com/asr/8c8affbe-8a14-42ea-9946-7f622e86d05d.9bf14d85f71ca51d14fd0b24ba5ed4c3.png",
      description:
        "Tony Stark gears up in his red and gold Iron Man suit to join your Marvel Avengers: Endgame collection as a Mega Pop! figure. Complete your Marvel lineup with the towering, Funko Exclusive figure! Vinyl figure is approximately 18-inches tall.",
      category: "Marvel",
      quantity: 3,
    }),

    Product.create({
      name: "Moon Knight",
      price: 111,
      imageUrl:
        "https://i5.walmartimages.com/asr/dc47e701-06d8-414a-bbbd-724ca6bfe7a2.ed75ec07bddb9c915ddf8667aab67588.png",
      description:
        "Bucky Barnes joins The Falcon (also known as Sam Wilson) on a global adventure as the Winter Soldier. What will Pop! Winter Soldier encounter when he joins your Marvel The Falcon and the Winter Soldier collection? Vinyl figure is approximately 5-inches tall.",
      category: "Marvel",
      quantity: 6,
    }),

    Product.create({
      name: "Vision",
      price: 96,
      imageUrl:
        "https://i5.walmartimages.com/asr/2bf25571-db7d-412c-a34a-caea2ce791f0.da58e1dfbd604b54a004378ba443c37a.png",
      description:
        "Tony Stark gears up in his red and gold Iron Man suit to join your Marvel Avengers: Endgame collection as a Mega Pop! figure. Complete your Marvel lineup with the towering, Funko Exclusive figure! Vinyl figure is approximately 18-inches tall.",
      category: "Marvel",
      quantity: 1,
    }),

    Product.create({
      name: "Wanda",
      price: 27,
      imageUrl:
        "https://i5.walmartimages.com/asr/1e6c2b33-2497-43b6-a170-5dd49a18c995.f1011bbaa7034cccbefc7401d09ed475.png",
      description:
        "Your Marvel collection is about to go on a galactic adventure with the arrival of Pop! Star-Lord. Theres even a 1 in 6 chance that you may find the chase of Pop! Star-Lord with his mask on. Vinyl bobblehead is approximately 4-inches tall.",
      category: "DC",
      quantity: 6,
    }),

    Product.create({
      name: "Moon Knight",
      price: 80,
      imageUrl:
        "https://i5.walmartimages.com/asr/012d5101-92e5-4ac2-97e7-f2a4f08d242c.09479720fcb4693eb449c22a56c238ab.png",
      description:
        "Assemble the Avengers to keep Thanos from getting the Infinity Stones in your Marvel Infinity War collection with the help of Pop! Iron Spider. Collectible stands approximately 3.75-inches tall.",
      category: "Marvel",
      quantity: 5,
    }),

    Product.create({
      name: "Groot",
      price: 67,
      imageUrl:
        "https://i5.walmartimages.com/asr/2bf25571-db7d-412c-a34a-caea2ce791f0.da58e1dfbd604b54a004378ba443c37a.png",
      description:
        "Join The Caped Crusader™, Batman, in his early years of fighting crime in Gotham City. This Jumbo Pop! Batman™ is ready to enact vengeance. Celebrate one of DC Comics’ most recognizable superheroes by adding the towering Pop! Batman to your DC collection of The Batman. Vinyl figure is approximately 10.75-inches tall.",
      category: "DC",
      quantity: 3,
    }),

    Product.create({
      name: "Batman",
      price: 134,
      imageUrl:
        "https://i5.walmartimages.com/asr/dc47e701-06d8-414a-bbbd-724ca6bfe7a2.ed75ec07bddb9c915ddf8667aab67588.png",
      description:
        "Test the limits of reality and leap into the Marvel multiverse with Pop! Doctor Strange from Doctor Strange in the Multiverse of Madness! Theres even a 1 in 6 chance you may find the cosmic chase variant. Vinyl bobblehead is approximately 4.15-inches tall.",
      category: "DC",
      quantity: 6,
    }),

    Product.create({
      name: "Thanos",
      price: 89,
      imageUrl:
        "https://i5.walmartimages.com/asr/a6bde2e2-7f2b-4604-b08e-73243bf454be_1.35710300994c6dd89526ff9d0eae2d46.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      description:
        "Your Marvel collection is about to go on a galactic adventure with the arrival of Pop! Star-Lord. Theres even a 1 in 6 chance that you may find the chase of Pop! Star-Lord with his mask on. Vinyl bobblehead is approximately 4-inches tall.",
      category: "DC",
      quantity: 8,
    }),

    Product.create({
      name: "Doctor Strange",
      price: 27,
      imageUrl:
        "https://i5.walmartimages.com/asr/2bf25571-db7d-412c-a34a-caea2ce791f0.da58e1dfbd604b54a004378ba443c37a.png",
      description:
        "Shape-shifting Skrulls have been infiltrating the Earth for years. Who do you trust? One of the greatest super spies in the world, Nick Fury, as a Pop! is ready to uncover the truth in your collection. Add this 2022 New York Comic-Con exclusive Pop! Nick Fury from Marvel Studios’ Secret Invasion to your team to see what takes shape. Vinyl bobblehead is approximately 3.94-inches tall.",
      category: "Marvel",
      quantity: 1,
    }),

    Product.create({
      name: "Winter Soldier",
      price: 126,
      imageUrl:
        "https://i5.walmartimages.com/asr/a6bde2e2-7f2b-4604-b08e-73243bf454be_1.35710300994c6dd89526ff9d0eae2d46.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      description:
        "Shape-shifting Skrulls have been infiltrating the Earth for years. Who do you trust? One of the greatest super spies in the world, Nick Fury, as a Pop! is ready to uncover the truth in your collection. Add this 2022 New York Comic-Con exclusive Pop! Nick Fury from Marvel Studios’ Secret Invasion to your team to see what takes shape. Vinyl bobblehead is approximately 3.94-inches tall.",
      category: "DC",
      quantity: 5,
    }),

    Product.create({
      name: "Thanos",
      price: 85,
      imageUrl:
        "https://i5.walmartimages.com/asr/9221a56a-77cb-4f4c-99ab-abb08486aa9a.ffb975e1eebbdd335e51a5589092799f.png",
      description:
        "Bucky Barnes joins The Falcon (also known as Sam Wilson) on a global adventure as the Winter Soldier. What will Pop! Winter Soldier encounter when he joins your Marvel The Falcon and the Winter Soldier collection? Vinyl figure is approximately 5-inches tall.",
      category: "Marvel",
      quantity: 8,
    }),

    Product.create({
      name: "Superman",
      price: 140,
      imageUrl:
        "https://i5.walmartimages.com/asr/8c8affbe-8a14-42ea-9946-7f622e86d05d.9bf14d85f71ca51d14fd0b24ba5ed4c3.png",
      description:
        "Join The Caped Crusader™, Batman, in his early years of fighting crime in Gotham City. This Jumbo Pop! Batman™ is ready to enact vengeance. Celebrate one of DC Comics’ most recognizable superheroes by adding the towering Pop! Batman to your DC collection of The Batman. Vinyl figure is approximately 10.75-inches tall.",
      category: "Marvel",
      quantity: 5,
    }),

    Product.create({
      name: "Vision",
      price: 65,
      imageUrl:
        "https://i5.walmartimages.com/asr/012d5101-92e5-4ac2-97e7-f2a4f08d242c.09479720fcb4693eb449c22a56c238ab.png",
      description:
        "Welcome to chaos. Embrace everything that has brought you to this moment with Marvels Moon Knight. The Funko exclusive Pop! Moon Knight is ready to take on the action as part of your Marvel collection. Summon him to complete the phases of your Moon Knight set. Vinyl bobblehead is approximately 4-inches tall",
      category: "Marvel",
      quantity: 0,
    }),

    Product.create({
      name: "Winter Soldier",
      price: 134,
      imageUrl:
        "https://i5.walmartimages.com/asr/8c8affbe-8a14-42ea-9946-7f622e86d05d.9bf14d85f71ca51d14fd0b24ba5ed4c3.png",
      description:
        "Tony Stark gears up in his red and gold Iron Man suit to join your Marvel Avengers: Endgame collection as a Mega Pop! figure. Complete your Marvel lineup with the towering, Funko Exclusive figure! Vinyl figure is approximately 18-inches tall.",
      category: "Marvel",
      quantity: 0,
    }),

    Product.create({
      name: "Wanda",
      price: 64,
      imageUrl:
        "https://i5.walmartimages.com/asr/46f15960-c7bb-41db-80cc-bad0319c48d0.451c73330e35557edbbd174dcda9334d.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      description:
        "Bucky Barnes joins The Falcon (also known as Sam Wilson) on a global adventure as the Winter Soldier. What will Pop! Winter Soldier encounter when he joins your Marvel The Falcon and the Winter Soldier collection? Vinyl figure is approximately 5-inches tall.",
      category: "Marvel",
      quantity: 6,
    }),

    Product.create({
      name: "Batman",
      price: 64,
      imageUrl:
        "https://i5.walmartimages.com/asr/2bf25571-db7d-412c-a34a-caea2ce791f0.da58e1dfbd604b54a004378ba443c37a.png",
      description:
        "Your Marvel collection is about to go on a galactic adventure with the arrival of Pop! Star-Lord. Theres even a 1 in 6 chance that you may find the chase of Pop! Star-Lord with his mask on. Vinyl bobblehead is approximately 4-inches tall.",
      category: "Marvel",
      quantity: 0,
    }),

    Product.create({
      name: "Doctor Strange",
      price: 4,
      imageUrl:
        "https://i5.walmartimages.com/asr/012d5101-92e5-4ac2-97e7-f2a4f08d242c.09479720fcb4693eb449c22a56c238ab.png",
      description:
        "Assemble the Avengers to keep Thanos from getting the Infinity Stones in your Marvel Infinity War collection with the help of Pop! Iron Spider. Collectible stands approximately 3.75-inches tall.",
      category: "DC",
      quantity: 1,
    }),

    Product.create({
      name: "Vision",
      price: 143,
      imageUrl:
        "https://i5.walmartimages.com/asr/012d5101-92e5-4ac2-97e7-f2a4f08d242c.09479720fcb4693eb449c22a56c238ab.png",
      description:
        "Your Marvel collection is about to go on a galactic adventure with the arrival of Pop! Star-Lord. Theres even a 1 in 6 chance that you may find the chase of Pop! Star-Lord with his mask on. Vinyl bobblehead is approximately 4-inches tall.",
      category: "Marvel",
      quantity: 2,
    }),

    Product.create({
      name: "Batman",
      price: 44,
      imageUrl:
        "https://i5.walmartimages.com/asr/dc47e701-06d8-414a-bbbd-724ca6bfe7a2.ed75ec07bddb9c915ddf8667aab67588.png",
      description:
        "Your Marvel collection is about to go on a galactic adventure with the arrival of Pop! Star-Lord. Theres even a 1 in 6 chance that you may find the chase of Pop! Star-Lord with his mask on. Vinyl bobblehead is approximately 4-inches tall.",
      category: "Marvel",
      quantity: 5,
    }),

    Product.create({
      name: "Nick Fury",
      price: 62,
      imageUrl:
        "https://i5.walmartimages.com/asr/1e6c2b33-2497-43b6-a170-5dd49a18c995.f1011bbaa7034cccbefc7401d09ed475.png",
      description:
        "Tony Stark gears up in his red and gold Iron Man suit to join your Marvel Avengers: Endgame collection as a Mega Pop! figure. Complete your Marvel lineup with the towering, Funko Exclusive figure! Vinyl figure is approximately 18-inches tall.",
      category: "DC",
      quantity: 1,
    }),

    Product.create({
      name: "Superman",
      price: 130,
      imageUrl:
        "https://i5.walmartimages.com/asr/9221a56a-77cb-4f4c-99ab-abb08486aa9a.ffb975e1eebbdd335e51a5589092799f.png",
      description:
        "Assemble the Avengers to keep Thanos from getting the Infinity Stones in your Marvel Infinity War collection with the help of Pop! Iron Spider. Collectible stands approximately 3.75-inches tall.",
      category: "DC",
      quantity: 7,
    }),

    Product.create({
      name: "Nick Fury",
      price: 24,
      imageUrl:
        "https://i5.walmartimages.com/asr/2bf25571-db7d-412c-a34a-caea2ce791f0.da58e1dfbd604b54a004378ba443c37a.png",
      description:
        "Your Guardians of the Galaxy Vol. 2 collection is worried sick looking for Pop! Groot. Help them find their Flora Colossus toddler. Collectible stands approximately 3.75-inches tall.",
      category: "Marvel",
      quantity: 9,
    }),

    Product.create({
      name: "Thanos",
      price: 45,
      imageUrl:
        "https://i5.walmartimages.com/asr/2bf25571-db7d-412c-a34a-caea2ce791f0.da58e1dfbd604b54a004378ba443c37a.png",
      description:
        "Shape-shifting Skrulls have been infiltrating the Earth for years. Who do you trust? One of the greatest super spies in the world, Nick Fury, as a Pop! is ready to uncover the truth in your collection. Add this 2022 New York Comic-Con exclusive Pop! Nick Fury from Marvel Studios’ Secret Invasion to your team to see what takes shape. Vinyl bobblehead is approximately 3.94-inches tall.",
      category: "Marvel",
      quantity: 8,
    }),

    Product.create({
      name: "Batman",
      price: 110,
      imageUrl:
        "https://i5.walmartimages.com/asr/9221a56a-77cb-4f4c-99ab-abb08486aa9a.ffb975e1eebbdd335e51a5589092799f.png",
      description:
        "Join The Caped Crusader™, Batman, in his early years of fighting crime in Gotham City. This Jumbo Pop! Batman™ is ready to enact vengeance. Celebrate one of DC Comics’ most recognizable superheroes by adding the towering Pop! Batman to your DC collection of The Batman. Vinyl figure is approximately 10.75-inches tall.",
      category: "Marvel",
      quantity: 9,
    }),

    Product.create({
      name: "Nick Fury",
      price: 101,
      imageUrl:
        "https://i5.walmartimages.com/asr/2bf25571-db7d-412c-a34a-caea2ce791f0.da58e1dfbd604b54a004378ba443c37a.png",
      description:
        "Tony Stark gears up in his red and gold Iron Man suit to join your Marvel Avengers: Endgame collection as a Mega Pop! figure. Complete your Marvel lineup with the towering, Funko Exclusive figure! Vinyl figure is approximately 18-inches tall.",
      category: "DC",
      quantity: 9,
    }),

    Product.create({
      name: "Winter Soldier",
      price: 0,
      imageUrl:
        "https://i5.walmartimages.com/asr/1e6c2b33-2497-43b6-a170-5dd49a18c995.f1011bbaa7034cccbefc7401d09ed475.png",
      description:
        "Join The Caped Crusader™, Batman, in his early years of fighting crime in Gotham City. This Jumbo Pop! Batman™ is ready to enact vengeance. Celebrate one of DC Comics’ most recognizable superheroes by adding the towering Pop! Batman to your DC collection of The Batman. Vinyl figure is approximately 10.75-inches tall.",
      category: "DC",
      quantity: 4,
    }),

    Product.create({
      name: "Spiderman",
      price: 46,
      imageUrl:
        "https://i5.walmartimages.com/asr/8c8affbe-8a14-42ea-9946-7f622e86d05d.9bf14d85f71ca51d14fd0b24ba5ed4c3.png",
      description:
        "Bucky Barnes joins The Falcon (also known as Sam Wilson) on a global adventure as the Winter Soldier. What will Pop! Winter Soldier encounter when he joins your Marvel The Falcon and the Winter Soldier collection? Vinyl figure is approximately 5-inches tall.",
      category: "DC",
      quantity: 6,
    }),

    Product.create({
      name: "Groot",
      price: 140,
      imageUrl:
        "https://i5.walmartimages.com/asr/b0c12871-03d7-4d83-b387-1e9f9ee22659.c7c89b7e286a7ffde35d62eba956a0cf.png",
      description:
        "Your Guardians of the Galaxy Vol. 2 collection is worried sick looking for Pop! Groot. Help them find their Flora Colossus toddler. Collectible stands approximately 3.75-inches tall.",
      category: "DC",
      quantity: 7,
    }),

    Product.create({
      name: "Thanos",
      price: 122,
      imageUrl:
        "https://i5.walmartimages.com/asr/b0c12871-03d7-4d83-b387-1e9f9ee22659.c7c89b7e286a7ffde35d62eba956a0cf.png",
      description:
        "Shape-shifting Skrulls have been infiltrating the Earth for years. Who do you trust? One of the greatest super spies in the world, Nick Fury, as a Pop! is ready to uncover the truth in your collection. Add this 2022 New York Comic-Con exclusive Pop! Nick Fury from Marvel Studios’ Secret Invasion to your team to see what takes shape. Vinyl bobblehead is approximately 3.94-inches tall.",
      category: "DC",
      quantity: 0,
    }),

    Product.create({
      name: "Groot",
      price: 120,
      imageUrl:
        "https://i5.walmartimages.com/asr/8c8affbe-8a14-42ea-9946-7f622e86d05d.9bf14d85f71ca51d14fd0b24ba5ed4c3.png",
      description:
        "Your Guardians of the Galaxy Vol. 2 collection is worried sick looking for Pop! Groot. Help them find their Flora Colossus toddler. Collectible stands approximately 3.75-inches tall.",
      category: "DC",
      quantity: 6,
    }),

    Product.create({
      name: "Superman",
      price: 98,
      imageUrl:
        "https://i5.walmartimages.com/asr/9221a56a-77cb-4f4c-99ab-abb08486aa9a.ffb975e1eebbdd335e51a5589092799f.png",
      description:
        "Shape-shifting Skrulls have been infiltrating the Earth for years. Who do you trust? One of the greatest super spies in the world, Nick Fury, as a Pop! is ready to uncover the truth in your collection. Add this 2022 New York Comic-Con exclusive Pop! Nick Fury from Marvel Studios’ Secret Invasion to your team to see what takes shape. Vinyl bobblehead is approximately 3.94-inches tall.",
      category: "DC",
      quantity: 1,
    }),

    Product.create({
      name: "Doctor Strange",
      price: 145,
      imageUrl:
        "https://i5.walmartimages.com/asr/012d5101-92e5-4ac2-97e7-f2a4f08d242c.09479720fcb4693eb449c22a56c238ab.png",
      description:
        "Shape-shifting Skrulls have been infiltrating the Earth for years. Who do you trust? One of the greatest super spies in the world, Nick Fury, as a Pop! is ready to uncover the truth in your collection. Add this 2022 New York Comic-Con exclusive Pop! Nick Fury from Marvel Studios’ Secret Invasion to your team to see what takes shape. Vinyl bobblehead is approximately 3.94-inches tall.",
      category: "DC",
      quantity: 2,
    }),

    Product.create({
      name: "Batman",
      price: 41,
      imageUrl:
        "https://i5.walmartimages.com/asr/dc47e701-06d8-414a-bbbd-724ca6bfe7a2.ed75ec07bddb9c915ddf8667aab67588.png",
      description:
        "Assemble the Avengers to keep Thanos from getting the Infinity Stones in your Marvel Infinity War collection with the help of Pop! Iron Spider. Collectible stands approximately 3.75-inches tall.",
      category: "Marvel",
      quantity: 6,
    }),

    Product.create({
      name: "Winter Soldier",
      price: 121,
      imageUrl:
        "https://i5.walmartimages.com/asr/8c8affbe-8a14-42ea-9946-7f622e86d05d.9bf14d85f71ca51d14fd0b24ba5ed4c3.png",
      description:
        "Assemble the Avengers to keep Thanos from getting the Infinity Stones in your Marvel Infinity War collection with the help of Pop! Iron Spider. Collectible stands approximately 3.75-inches tall.",
      category: "Marvel",
      quantity: 3,
    }),

    Product.create({
      name: "Winter Soldier",
      price: 39,
      imageUrl:
        "https://i5.walmartimages.com/asr/a6bde2e2-7f2b-4604-b08e-73243bf454be_1.35710300994c6dd89526ff9d0eae2d46.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      description:
        "Assemble the Avengers to keep Thanos from getting the Infinity Stones in your Marvel Infinity War collection with the help of Pop! Iron Spider. Collectible stands approximately 3.75-inches tall.",
      category: "DC",
      quantity: 0,
    }),

    Product.create({
      name: "Moon Knight",
      price: 134,
      imageUrl:
        "https://i5.walmartimages.com/asr/b0c12871-03d7-4d83-b387-1e9f9ee22659.c7c89b7e286a7ffde35d62eba956a0cf.png",
      description:
        "Assemble the Avengers to keep Thanos from getting the Infinity Stones in your Marvel Infinity War collection with the help of Pop! Iron Spider. Collectible stands approximately 3.75-inches tall.",
      category: "DC",
      quantity: 2,
    }),

    Product.create({
      name: "Superman",
      price: 80,
      imageUrl:
        "https://i5.walmartimages.com/asr/1e6c2b33-2497-43b6-a170-5dd49a18c995.f1011bbaa7034cccbefc7401d09ed475.png",
      description:
        "Your Marvel collection is about to go on a galactic adventure with the arrival of Pop! Star-Lord. Theres even a 1 in 6 chance that you may find the chase of Pop! Star-Lord with his mask on. Vinyl bobblehead is approximately 4-inches tall.",
      category: "DC",
      quantity: 6,
    }),

    Product.create({
      name: "Doctor Strange",
      price: 31,
      imageUrl:
        "https://i5.walmartimages.com/asr/9221a56a-77cb-4f4c-99ab-abb08486aa9a.ffb975e1eebbdd335e51a5589092799f.png",
      description:
        "Assemble the Avengers to keep Thanos from getting the Infinity Stones in your Marvel Infinity War collection with the help of Pop! Iron Spider. Collectible stands approximately 3.75-inches tall.",
      category: "DC",
      quantity: 4,
    }),

    Product.create({
      name: "Doctor Strange",
      price: 21,
      imageUrl:
        "https://i5.walmartimages.com/asr/9221a56a-77cb-4f4c-99ab-abb08486aa9a.ffb975e1eebbdd335e51a5589092799f.png",
      description:
        "Welcome to chaos. Embrace everything that has brought you to this moment with Marvels Moon Knight. The Funko exclusive Pop! Moon Knight is ready to take on the action as part of your Marvel collection. Summon him to complete the phases of your Moon Knight set. Vinyl bobblehead is approximately 4-inches tall",
      category: "Marvel",
      quantity: 0,
    }),

    Product.create({
      name: "Winter Soldier",
      price: 24,
      imageUrl:
        "https://i5.walmartimages.com/asr/dc47e701-06d8-414a-bbbd-724ca6bfe7a2.ed75ec07bddb9c915ddf8667aab67588.png",
      description:
        "Shape-shifting Skrulls have been infiltrating the Earth for years. Who do you trust? One of the greatest super spies in the world, Nick Fury, as a Pop! is ready to uncover the truth in your collection. Add this 2022 New York Comic-Con exclusive Pop! Nick Fury from Marvel Studios’ Secret Invasion to your team to see what takes shape. Vinyl bobblehead is approximately 3.94-inches tall.",
      category: "Marvel",
      quantity: 8,
    }),

    Product.create({
      name: "Superman",
      price: 17,
      imageUrl:
        "https://i5.walmartimages.com/asr/9221a56a-77cb-4f4c-99ab-abb08486aa9a.ffb975e1eebbdd335e51a5589092799f.png",
      description:
        "Bucky Barnes joins The Falcon (also known as Sam Wilson) on a global adventure as the Winter Soldier. What will Pop! Winter Soldier encounter when he joins your Marvel The Falcon and the Winter Soldier collection? Vinyl figure is approximately 5-inches tall.",
      category: "DC",
      quantity: 5,
    }),

    Product.create({
      name: "Nick Fury",
      price: 49,
      imageUrl:
        "https://i5.walmartimages.com/asr/1e6c2b33-2497-43b6-a170-5dd49a18c995.f1011bbaa7034cccbefc7401d09ed475.png",
      description:
        "Bucky Barnes joins The Falcon (also known as Sam Wilson) on a global adventure as the Winter Soldier. What will Pop! Winter Soldier encounter when he joins your Marvel The Falcon and the Winter Soldier collection? Vinyl figure is approximately 5-inches tall.",
      category: "DC",
      quantity: 8,
    }),

    Product.create({
      name: "Moon Knight",
      price: 1,
      imageUrl:
        "https://i5.walmartimages.com/asr/46f15960-c7bb-41db-80cc-bad0319c48d0.451c73330e35557edbbd174dcda9334d.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      description:
        "Tony Stark gears up in his red and gold Iron Man suit to join your Marvel Avengers: Endgame collection as a Mega Pop! figure. Complete your Marvel lineup with the towering, Funko Exclusive figure! Vinyl figure is approximately 18-inches tall.",
      category: "DC",
      quantity: 4,
    }),

    Product.create({
      name: "Superman",
      price: 113,
      imageUrl:
        "https://i5.walmartimages.com/asr/012d5101-92e5-4ac2-97e7-f2a4f08d242c.09479720fcb4693eb449c22a56c238ab.png",
      description:
        "Welcome to chaos. Embrace everything that has brought you to this moment with Marvels Moon Knight. The Funko exclusive Pop! Moon Knight is ready to take on the action as part of your Marvel collection. Summon him to complete the phases of your Moon Knight set. Vinyl bobblehead is approximately 4-inches tall",
      category: "Marvel",
      quantity: 3,
    }),

    Product.create({
      name: "Doctor Strange",
      price: 68,
      imageUrl:
        "https://i5.walmartimages.com/asr/1e6c2b33-2497-43b6-a170-5dd49a18c995.f1011bbaa7034cccbefc7401d09ed475.png",
      description:
        "Your Guardians of the Galaxy Vol. 2 collection is worried sick looking for Pop! Groot. Help them find their Flora Colossus toddler. Collectible stands approximately 3.75-inches tall.",
      category: "Marvel",
      quantity: 8,
    }),

    Product.create({
      name: "Thanos",
      price: 110,
      imageUrl:
        "https://i5.walmartimages.com/asr/1e6c2b33-2497-43b6-a170-5dd49a18c995.f1011bbaa7034cccbefc7401d09ed475.png",
      description:
        "Bucky Barnes joins The Falcon (also known as Sam Wilson) on a global adventure as the Winter Soldier. What will Pop! Winter Soldier encounter when he joins your Marvel The Falcon and the Winter Soldier collection? Vinyl figure is approximately 5-inches tall.",
      category: "DC",
      quantity: 1,
    }),

    Product.create({
      name: "Vision",
      price: 77,
      imageUrl:
        "https://i5.walmartimages.com/asr/dc47e701-06d8-414a-bbbd-724ca6bfe7a2.ed75ec07bddb9c915ddf8667aab67588.png",
      description:
        "Your Guardians of the Galaxy Vol. 2 collection is worried sick looking for Pop! Groot. Help them find their Flora Colossus toddler. Collectible stands approximately 3.75-inches tall.",
      category: "DC",
      quantity: 0,
    }),

    Product.create({
      name: "StarLord",
      price: 7,
      imageUrl:
        "https://i5.walmartimages.com/asr/9221a56a-77cb-4f4c-99ab-abb08486aa9a.ffb975e1eebbdd335e51a5589092799f.png",
      description:
        "Tony Stark gears up in his red and gold Iron Man suit to join your Marvel Avengers: Endgame collection as a Mega Pop! figure. Complete your Marvel lineup with the towering, Funko Exclusive figure! Vinyl figure is approximately 18-inches tall.",
      category: "DC",
      quantity: 0,
    }),

    Product.create({
      name: "Winter Soldier",
      price: 97,
      imageUrl:
        "https://i5.walmartimages.com/asr/dc47e701-06d8-414a-bbbd-724ca6bfe7a2.ed75ec07bddb9c915ddf8667aab67588.png",
      description:
        "Assemble the Avengers to keep Thanos from getting the Infinity Stones in your Marvel Infinity War collection with the help of Pop! Iron Spider. Collectible stands approximately 3.75-inches tall.",
      category: "DC",
      quantity: 1,
    }),

    Product.create({
      name: "Groot",
      price: 43,
      imageUrl:
        "https://i5.walmartimages.com/asr/b0c12871-03d7-4d83-b387-1e9f9ee22659.c7c89b7e286a7ffde35d62eba956a0cf.png",
      description:
        "Your Guardians of the Galaxy Vol. 2 collection is worried sick looking for Pop! Groot. Help them find their Flora Colossus toddler. Collectible stands approximately 3.75-inches tall.",
      category: "Marvel",
      quantity: 9,
    }),

    Product.create({
      name: "Moon Knight",
      price: 82,
      imageUrl:
        "https://i5.walmartimages.com/asr/1e6c2b33-2497-43b6-a170-5dd49a18c995.f1011bbaa7034cccbefc7401d09ed475.png",
      description:
        "Tony Stark gears up in his red and gold Iron Man suit to join your Marvel Avengers: Endgame collection as a Mega Pop! figure. Complete your Marvel lineup with the towering, Funko Exclusive figure! Vinyl figure is approximately 18-inches tall.",
      category: "Marvel",
      quantity: 5,
    }),

    Product.create({
      name: "Wanda",
      price: 37,
      imageUrl:
        "https://i5.walmartimages.com/asr/a6bde2e2-7f2b-4604-b08e-73243bf454be_1.35710300994c6dd89526ff9d0eae2d46.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      description:
        "Your Guardians of the Galaxy Vol. 2 collection is worried sick looking for Pop! Groot. Help them find their Flora Colossus toddler. Collectible stands approximately 3.75-inches tall.",
      category: "DC",
      quantity: 2,
    }),

    Product.create({
      name: "Nick Fury",
      price: 65,
      imageUrl:
        "https://i5.walmartimages.com/asr/b0c12871-03d7-4d83-b387-1e9f9ee22659.c7c89b7e286a7ffde35d62eba956a0cf.png",
      description:
        "Your Marvel collection is about to go on a galactic adventure with the arrival of Pop! Star-Lord. Theres even a 1 in 6 chance that you may find the chase of Pop! Star-Lord with his mask on. Vinyl bobblehead is approximately 4-inches tall.",
      category: "Marvel",
      quantity: 2,
    }),

    Product.create({
      name: "Winter Soldier",
      price: 12,
      imageUrl:
        "https://i5.walmartimages.com/asr/2bf25571-db7d-412c-a34a-caea2ce791f0.da58e1dfbd604b54a004378ba443c37a.png",
      description:
        "Shape-shifting Skrulls have been infiltrating the Earth for years. Who do you trust? One of the greatest super spies in the world, Nick Fury, as a Pop! is ready to uncover the truth in your collection. Add this 2022 New York Comic-Con exclusive Pop! Nick Fury from Marvel Studios’ Secret Invasion to your team to see what takes shape. Vinyl bobblehead is approximately 3.94-inches tall.",
      category: "Marvel",
      quantity: 9,
    }),

    Product.create({
      name: "Batman",
      price: 71,
      imageUrl:
        "https://i5.walmartimages.com/asr/dc47e701-06d8-414a-bbbd-724ca6bfe7a2.ed75ec07bddb9c915ddf8667aab67588.png",
      description:
        "Assemble the Avengers to keep Thanos from getting the Infinity Stones in your Marvel Infinity War collection with the help of Pop! Iron Spider. Collectible stands approximately 3.75-inches tall.",
      category: "DC",
      quantity: 0,
    }),

    Product.create({
      name: "Groot",
      price: 66,
      imageUrl:
        "https://i5.walmartimages.com/asr/dc47e701-06d8-414a-bbbd-724ca6bfe7a2.ed75ec07bddb9c915ddf8667aab67588.png",
      description:
        "Join The Caped Crusader™, Batman, in his early years of fighting crime in Gotham City. This Jumbo Pop! Batman™ is ready to enact vengeance. Celebrate one of DC Comics’ most recognizable superheroes by adding the towering Pop! Batman to your DC collection of The Batman. Vinyl figure is approximately 10.75-inches tall.",
      category: "Marvel",
      quantity: 8,
    }),

    Product.create({
      name: "Spiderman",
      price: 90,
      imageUrl:
        "https://i5.walmartimages.com/asr/a6bde2e2-7f2b-4604-b08e-73243bf454be_1.35710300994c6dd89526ff9d0eae2d46.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      description:
        "Shape-shifting Skrulls have been infiltrating the Earth for years. Who do you trust? One of the greatest super spies in the world, Nick Fury, as a Pop! is ready to uncover the truth in your collection. Add this 2022 New York Comic-Con exclusive Pop! Nick Fury from Marvel Studios’ Secret Invasion to your team to see what takes shape. Vinyl bobblehead is approximately 3.94-inches tall.",
      category: "Marvel",
      quantity: 6,
    }),
  ]);

  // Creating Orders
  const orders = await Promise.all([
    Order.create({ status: "unfulfilled", userId: 1 }),
    Order.create({ status: "fulfilled", userId: 2 }),
    Order.create({ status: "unfulfilled", userId: 3 }),
    Order.create({ status: "fulfilled", userId: 2 }),
    Order.create({ status: "fulfilled", userId: 4 }),
  ]);

  // Creating Order_Products
  const order_products = await Promise.all([
    Order_Product.create({
      orderId: 1,
      productId: 1,
      quantityInCart: 1,
      subtotal: 0,
    }),
    Order_Product.create({
      orderId: 1,
      productId: 2,
      quantityInCart: 2,
      subtotal: 0,
    }),
    Order_Product.create({
      orderId: 2,
      productId: 3,
      quantityInCart: 3,
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

const router = require("express").Router();
const {
  models: { User, Order, Order_Product },
} = require("../db");
const { getToken, isAdmin } = require("./adminCheckMiddleware");

module.exports = router;

// ------ Admin only
router.get("/", getToken, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "username", "name", "email"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// ------ Admin only
router.get("/:userId", getToken, isAdmin, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      attributes: ["id", "username", "name", "email"],
      include: Order,
    });
    if (user) res.json(user);
    else res.json({ error: "User not found" });
  } catch (err) {
    next(err);
  }
});



const router = require("express").Router();
const {
  models: { User, Order, Order_Product },
} = require("../db");
const { getToken } = require("./adminCheckMiddleware");

module.exports = router;

// ------ Admin only
router.get("/", getToken, async (req, res, next) => {
  try {
    // o: you can place this in a middleware for brevity but good work (more in CR)
    if (req.user.isAdmin) {
      const users = await User.findAll({
        // explicitly select only the id and username fields - even though
        // users' passwords are encrypted, it won't help if we just
        // send everything to anyone who asks!
        attributes: ["id", "username", "name", "email"],
      });
      res.json(users);
    } else {
      res.status(403).json({ error: "Unauthorized" });
    }
  } catch (err) {
    next(err);
  }
});

router.get("/:userId", getToken, async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const user = await User.findByPk(req.params.userId, {
        attributes: ["id", "username", "name", "email"],
        include: Order,
      });
      res.json(user);
    } else {
      res.status(403).json({ error: "Unauthorized" });
    }
  } catch (err) {
    next(err);
  }
});

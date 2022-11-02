const router = require("express").Router();
const {
  models: { User },
} = require("../db");
const { getToken } = require("../api/adminCheckMiddleware");
module.exports = router;

router.post("/login", async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const { name, email, username, password } = req.body;
    const user = await User.create({ name, email, username, password });
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

router.get("/me", async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});

// -------- LoggedIn User only
// PUT auth
router.put("/profile", getToken, async (req, res, next) => {
  const userId = req.user.id;
  //const user = await User.findByToken(req.headers.authorization)
  try {
    for (let key in req.body) {
      if (req.body[key] === "") {
        delete req.body[key];
      }
    }

    const user = await User.findByPk(userId);
    const editUser = await user.update(req.body);

    res.json(editUser);
  } catch (err) {
    next(err);
  }
});

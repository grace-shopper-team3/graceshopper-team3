const {
  models: { User },
} = require("../db");

const getToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getToken,
};

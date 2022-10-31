// o: there is no admin check in this file

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

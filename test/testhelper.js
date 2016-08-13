// if (process.env.NODE_ENV !== "travis") {
  require("dotenv").config();  
// }

const app = require("../app");

module.exports = {
  app: app
};

const routes = require("express").Router();

routes.get("/about", (req, res) => {
  res.locals.script = null
  res.render("about");
});

module.exports = routes;
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use("/assets/mte", express.static(path.join(__dirname, "../dist")));
app.use("/assets", express.static("public"));

const ejs = require("ejs-mate");
app.engine("html", ejs);
app.set("views", path.join(__dirname, "../public/views"));
app.set("view engine", "html");

function getContentType(fileName) {
  const extension = fileName.split('.').pop();

  const contentTypeMap = {
    'js': 'application/javascript',
    'css': 'text/css',
  };

  return contentTypeMap[extension] || 'text/plain';
}

app.get('mte/:type/:file', (req, res) => {
  const { type, file } = req.params;

  try {
    const fileContent = path.join(__dirname, `./dist/${type}/${file}`);
    const contentType = getContentType(file);
    res.setHeader('Content-Type', contentType);
    res.sendFile(fileContent);
  } catch (error) {
    console.error(`Failed to fetch asset: ${fileName}`);
    res.status(500).send('Internal Server Error');
  }
});

app.use((req, res, next) => {
  const data = {
    baseUrl: `${req.protocol}://${req.get('host')}`,
    script: "index.js"
  }
  res.locals = data;
  next();
});

app.get("/", (req, res) => {
  res.render("index");
});

try {
  const routes = require("./routes");
  app.use(routes);
} catch (error) {
  console.log("Failed to load routes");
}

module.exports = app;

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use("/assets/mte", express.static(path.join(__dirname, "../dist")));
app.use("/assets", express.static("public"));

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


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

try {
  // const routes = require("./routes");
  // app.use(routes);
} catch (error) {
  console.log("Failed to load routes");
}

module.exports = app;

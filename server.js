const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "dist")));
app.use("/assets", express.static("src"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

function getContentType(fileName) {
  const extension = fileName.split('.').pop();

  const contentTypeMap = {
    'js': 'application/javascript',
    'css': 'text/css',
  };

  return contentTypeMap[extension] || 'text/plain';
}

app.get('/:type/:file', (req, res) => {
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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
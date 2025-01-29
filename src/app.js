const fs = require("fs");
const path = require("path");
const configPath = path.join(__dirname, "../config.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));



const express = require("express");
const app = express();
const PORT = process.env.PORT || config.port;

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

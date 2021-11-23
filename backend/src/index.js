const express = require("express");
const router = require("./router");
const path = require("path");
const PORT = 1338;
const app = express();
const cors = require("cors");

app.use(cors());
app.use("/", router);

app.use(express.static(path.join(__dirname, "../client/build")));

app.listen(PORT, () => {
  console.log(`Express is running on port ${PORT}`);
});

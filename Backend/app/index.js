const express = require("express");
const cors = require("cors");
const path = require("path");
const router = require("./routes");

const app = express();
app.use("/", express.static(path.join(__dirname, "images")));
app.use(cors());
const port = 3000;

app.use(router);

app.listen(port, () => console.log(`Magic happens on port ${port}`));

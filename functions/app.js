const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const serverless = require("serverless-http");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/resources", express.static("public"));

app.set("view engine", "ejs");

// Routes
app.use(require("../src/routes/index.router"));
app.use(require("../src/routes/form.router"));

// Export handler for serverless
module.exports.handler = serverless(app);

/*const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));*/

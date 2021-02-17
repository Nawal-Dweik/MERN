require("dotenv").config();

//const myFirstSecret = process.env.FIRST_SECRET_KEY;
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

require("./config/mongoose.config");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// This must come after the lines above:
require("./routes/auth.route")(app);

app.listen(port, () =>
  console.log(`The server is all fired up and listening on port ${port}`)
);

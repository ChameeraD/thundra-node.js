const express = require("express");

const app = express();

app.use(express.json()); // parsing application/json
app.use(express.urlencoded({ extended: true })); // parsing application/x-www-form-urlencoded

require("./articleService/routes.js")(app);
require("./userService/routes.js")(app);

const PORT = process.env.PORT || 8080; // Port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
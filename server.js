const express = require("express");
const thundra = require("@thundra/core");

const app = express();


thundra.init({
    apiKey:"a77b6f7c-0b87-42c7-9b65-5a83ff64330c"
})
app.use(thundra.expressMW());
app.use(express.json()); // parsing application/json
app.use(express.urlencoded({ extended: true })); // parsing application/x-www-form-urlencoded

require("./articleService/routes.js")(app);
require("./userService/routes.js")(app);

const PORT = process.env.PORT || 8080; // Port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
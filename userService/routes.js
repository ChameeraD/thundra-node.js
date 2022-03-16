module.exports = app => {
    const users = require("./controller.js");
  
    var router = require("express").Router();
  
    router.get("/", users.getAll);
  
    app.use('/api/users', router);
  };
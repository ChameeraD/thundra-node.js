module.exports = app => {
    const articles = require("./controller.js");
  
    var router = require("express").Router();
  
    router.get("/", articles.getAll);
  
    app.use('/api/articles', router);
  };
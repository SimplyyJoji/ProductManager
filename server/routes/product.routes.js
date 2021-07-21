const productController = require("../controllers/product.controllers");

/*
Leading slash required in routes 
Export a function to be called in server.js where the app will be passed in  */

module.exports = (app) => {
  //When one of these URLS is visited, executed the corresponding method
  app.post("/api/products", productController.create);
  app.get("/api/products", productController.getAll);
  app.get("/api/products/:id", productController.getOne);
  app.delete("/api/products/:id", productController.delete);
  app.put("/api/products/:id", productController.update);
};
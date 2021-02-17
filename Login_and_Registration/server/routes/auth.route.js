const AuthController = require("../controllers/auth.controller");

module.exports = (app) => {
  //app.post('/api/create', AuthController.create);
  app.post("/api/createNewUser", AuthController.createUser);
};

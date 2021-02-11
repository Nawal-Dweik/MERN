const jokesController = require('../controllers/jokes.controller');

module.exports = app => {
    app.post('/api/addNewJoke', jokesController.createJoke);
    app.post('/api/getAllJokes', jokesController.getAllJokes);
}
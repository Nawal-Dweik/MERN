//import Joke from '../models/jokes.model'
const Joke = require('../models/jokes.model');


module.exports.createJoke = (request, response) => {
    Joke.create(request.body)
        .then(joke => response.json(joke))
        .catch(err => response.json(err));
}

module.exports.getAllJokes = (req, response) => {
    response.json(Joke.find())
}
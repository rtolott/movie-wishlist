const express = require('express');

const moviesRouter = express.Router();

const moviesController = require('../controllers/moviesController');
const fieldsValidator = require('../middlewares/fieldsValidator');

moviesRouter.get('/api/movies', moviesController.getAllMovies);

moviesRouter.get('/api/movies/:id', moviesController.getMovieById);

moviesRouter.post('/api/movies', 
    fieldsValidator.validateMovieFields,
    moviesController.createMovie
);

moviesRouter.put('/api/movies/:id', 
    moviesController.updateMovie
);

moviesRouter.delete('/api/movies/:id', moviesController.removeMovie);

moviesRouter.get('/api/search/movies', moviesController.searchMovie);

module.exports = moviesRouter;
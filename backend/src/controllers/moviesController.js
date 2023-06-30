const moviesModel = require('../models/moviesModel');

const getAllMovies = async (_request, response) => {

    const movies = await moviesModel.getAllMovies();

    return response.status(200).json(movies);
};

const getMovieById = async (request, response) => {
    const { id } = request.params;
    
    const movie = await moviesModel.getMovieById(id);
    
    return response.status(200).json(movie);
};

const createMovie = async (request, response) => {
    const createdMovie = await moviesModel.createMovie(request.body);

    return response.status(201).json(createdMovie);
};

const updateMovie = async (request, response) => {
    const { id } = request.params;

    await moviesModel.updateMovie(id, request.body);

    return response.status(200).json('Cadastro atualizado');
};

const removeMovie = async (request, response) => {
    const { id } = request.params;

    await moviesModel.removeMovie(id);

    return response.status(200).json('Cadastro removido');
};

const searchMovie = async (request, response) => {
    const { q } = request.query;
    
    searchedMovie = await moviesModel.searchMovie(q);

    return response.status(200).json(searchedMovie);
};

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    removeMovie,
    searchMovie
};
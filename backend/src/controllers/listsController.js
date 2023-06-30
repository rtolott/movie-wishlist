const listsModel = require('../models/listsModel');

const getAllLists = async (request, response) => {

    const lists = await listsModel.getAllLists(request.ID);

    return response.status(200).json(lists);
};

const getListById = async (request, response) => {
    const { id } = request.params;
    
    const list = await listsModel.getListById(id, request.ID);

    return response.status(200).json({Title: list.listtitle, Movies: list.movies});
};

const createList = async (request, response) => {
    const createdList = await listsModel.createList(request.body, request.ID);
    
    return response.status(201).json(createdList);
};

const updateList = async (request, response) => {
    const { id } = request.params;

    await listsModel.updateList(id, request.body, request.ID);

    return response.status(204).json();
};

const removeList = async (request, response) => {
    const { id } = request.params;

    await listsModel.removeList(id, request.ID);

    return response.status(204).json();
}

const insertMovieIntoList = async (request, response) => {
    const { movieID , listID } = request.params;

    await listsModel.insertMovieIntoList(movieID, listID, request.ID);

    return response.status(200).json('Filme inserido');
};

const removeMovieFromList = async (request, response) => {
    const { movieID , listID } = request.params;

    await listsModel.removeMovieFromList(movieID, listID, request.ID);

    return response.status(200).json('Filme removido');
};

module.exports = {
    getAllLists,
    createList,
    getListById,
    updateList,
    removeList,
    insertMovieIntoList,
    removeMovieFromList
};
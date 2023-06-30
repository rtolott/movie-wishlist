const validateLoginFields = (request, response, next) => {
    const { body } = request;

    if(body.email === undefined){
        return response.status(400).json({ message: 'O campo "email" é obrigatório'});
    }

    if(body.email === ''){
        return response.status(400).json({ message: 'O campo "email" não pode ser vazio'});
    }

    if(body.password === undefined){
        return response.status(400).json({ message: 'O campo "password" é obrigatório'});
    }

    if(body.password === ''){
        return response.status(400).json({ message: 'O campo "password" não pode ser vazio'});
    }

    next();
};

const validateListsFields = (request, response, next) => {
    const { body } = request;

    if(body.title === undefined){
        return response.status(400).json({ message: 'O campo "title" é obrigatório'});
    }

    if(body.title === ''){
        return response.status(400).json({ message: 'O campo "title" não pode ser vazio'});
    }

    next();
};

const validateUserFields = (request, response, next) => {
    const { body } = request;

    if(body.name === undefined){
        return response.status(400).json({ message: 'O campo "name" é obrigatório'});
    }

    if(body.name === ''){
        return response.status(400).json({ message: 'O campo "name" não pode ser vazio'});
    }

    if(body.email === undefined){
        return response.status(400).json({ message: 'O campo "email" é obrigatório'});
    }

    if(body.email === ''){
        return response.status(400).json({ message: 'O campo "email" não pode ser vazio'});
    }

    if(body.password === undefined){
        return response.status(400).json({ message: 'O campo "password" é obrigatório'});
    }

    if(body.password === ''){
        return response.status(400).json({ message: 'O campo "password" não pode ser vazio'});
    }

    next();
};

const validateMovieFields = (request, response, next) => {
    const { body } = request;

    if(body.title === undefined){
        return response.status(400).json({ message: 'O campo "title" é obrigatório'});
    }

    if(body.title === ''){
        return response.status(400).json({ message: 'O campo "title" não pode ser vazio'});
    }

    if(body.synopsis === undefined){
        return response.status(400).json({ message: 'O campo "synopsis" é obrigatório'});
    }

    if(body.synopsis === ''){
        return response.status(400).json({ message: 'O campo "synopsis" não pode ser vazio'});
    }

    if(body.releaseYear === undefined){
        return response.status(400).json({ message: 'O campo "releaseYear" é obrigatório'});
    }

    if(body.releaseYear === ''){
        return response.status(400).json({ message: 'O campo "releaseYear" não pode ser vazio'});
    }

    if(body.runtime === undefined){
        return response.status(400).json({ message: 'O campo "runtime" é obrigatório'});
    }

    if(body.runtime === ''){
        return response.status(400).json({ message: 'O campo "runtime" não pode ser vazio'});
    }

    if(body.genres === undefined){
        return response.status(400).json({ message: 'O campo "genres" é obrigatório'});
    }

    if(body.genres === ''){
        return response.status(400).json({ message: 'O campo "genres" não pode ser vazio'});
    }

    next();
};

module.exports = {
    validateLoginFields,
    validateListsFields,
    validateUserFields,
    validateMovieFields
};
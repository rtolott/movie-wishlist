const usersModel = require('../models/usersModel');
const jwt = require('jsonwebtoken');
const authConfig = require('../auth');

const getAllUsers = async (request, response) => {

    const users = await usersModel.getAllUsers();

    return response.status(200).json({users, ID: request.ID});
};

const getUserById = async (request, response) => {
    const { id } = request.params;
    
    const user = await usersModel.getUserById(id);
    
    return response.status(200).json(user);
};

const createUser = async (request, response) => {
    if(await findUserF(request.body))
        return response.status(409).json("Usuário já existe");
        
    const createdUser = await usersModel.createUser(request.body);
    return response.status(201).json(createdUser);
};

const updateUser = async (request, response) => {
    const { id } = request.params;

    await usersModel.updateUser(id, request.body);

    return response.status(200).json('Cadastro atualizado');
};

const removeUser = async (request, response) => {
    const { id } = request.params;

    await usersModel.removeUser(id);

    return response.status(200).json('Cadastro removido');
};

async function findUserF (user) {
    const [result] = await usersModel.findUser(user);
    
    if (!result)
        return 0;

    return result;
};

const findUser = async (request,response) => {
    const user = await findUserF(request.body);
    
    if(!user)
        return response.status(404).json("Usuário não encontrado");
        
    return response.status(200).json(user.ID);
};

const authUser = async (request, response) => {
    if (!await findUserF(request.body))
        return response.status(404).json('Usuário não existe');
    
    const [authUser] = await usersModel.authUser(request.body);

    if(!authUser)
        return response.status(401).json('Login ou senha inválidos');
    
    authUser.password = undefined;
        
    return response.status(200).json({authUser, token: generateToken({ id: authUser.ID })});
};

function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret, {expiresIn: authConfig.expireTime});
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    removeUser,
    findUser,
    authUser
};
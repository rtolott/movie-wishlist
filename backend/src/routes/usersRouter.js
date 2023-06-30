const express = require('express');

const usersRouter = express.Router();

const usersController = require('../controllers/usersController');
const fieldsValidator = require('../middlewares/fieldsValidator');

usersRouter.get('/api/users', usersController.getAllUsers);

usersRouter.get('/api/users/:id', usersController.getUserById);

usersRouter.post('/api/users/find', 
    usersController.findUser
);

usersRouter.post('/api/users/login', 
    fieldsValidator.validateLoginFields, 
    usersController.authUser
);

usersRouter.post('/api/users', 
    fieldsValidator.validateUserFields,
    usersController.createUser
);

usersRouter.put('/api/users/:id', 
    usersController.updateUser
);

usersRouter.delete('/api/users/:id', usersController.removeUser);

module.exports = usersRouter;
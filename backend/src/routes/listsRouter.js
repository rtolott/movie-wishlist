const express = require('express');

const listsRouter = express.Router();

const listsController = require('../controllers/listsController');
const authMiddleware = require('../middlewares/auth');
const fieldsValidator = require('../middlewares/fieldsValidator');

listsRouter.get('/api/lists', authMiddleware.validateToken, listsController.getAllLists);

listsRouter.get('/api/lists/:id', authMiddleware.validateToken, listsController.getListById);

listsRouter.post('/api/lists',
    authMiddleware.validateToken, 
    fieldsValidator.validateListsFields, 
    listsController.createList
);

listsRouter.put('/api/lists/:id', 
    authMiddleware.validateToken,
    fieldsValidator.validateListsFields,
    listsController.updateList
);

listsRouter.delete('/api/lists/:id', authMiddleware.validateToken, listsController.removeList);

listsRouter.post('/api/lists/:listID/movie/:movieID', authMiddleware.validateToken, listsController.insertMovieIntoList);

listsRouter.delete('/api/lists/:listID/movie/:movieID', authMiddleware.validateToken, listsController.removeMovieFromList);

module.exports = listsRouter;
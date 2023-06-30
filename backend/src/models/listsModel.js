const connection = require ('./connection');

const getAllLists = async (userID) => {
    const [lists] = await connection.execute('SELECT * FROM lists WHERE userID = ?', [userID]);
    return lists;
};

const getListById = async (listID, userID) => {
    
    const query_title = "SELECT id,title FROM lists WHERE ID = ? AND userID = ?";
    
    const [listtitle] = await connection.execute(query_title, [listID, userID]);
    
    query_movielist = "SELECT m.* FROM movie_lists ml INNER JOIN lists l ON ml.listID = l.ID INNER JOIN movies m ON ml.movieID = m.ID WHERE l.ID = ? AND l.userID = ?";
    
    const [movies] = await connection.execute(query_movielist, [listID, userID]);

    return {listtitle, movies};
}

const createList = async (list, userID) => {
    const { title } = list;

    const query = 'INSERT INTO lists (title, userID) VALUES ( ? , ? )';
    
    const [createdList] = await connection.execute(query, [title, userID]);
    
    return {insertId: createdList.insertId};
};

const updateList = async (id, list, userID) => {
    const { title } = list;

    const query = 'UPDATE lists SET title = ? WHERE id = ? AND userID = ?';

    const [updatedList] = await connection.execute(query, [title, id, userID]);

    return updatedList;
};

const removeList = async (id, userID) => {

    const query = 'DELETE FROM lists WHERE id = ? AND userID = ?';
    
    const [removedList] = await connection.execute(query, [id, userID]);
    
    return removedList;
};

const insertMovieIntoList = async (movieID, listID) => {
    
    const query = 'INSERT INTO movie_lists (movieID, listID) VALUES ( ? , ? )';
    
    const [insertedMovieIntoList] = await connection.execute(query, [movieID, listID]);
    
    return insertedMovieIntoList;
};

const removeMovieFromList = async (movieID, listID) => {
    
    const query = 'DELETE FROM movie_lists WHERE movieID = ? AND listID = ?';
    
    const [removedMovieFromList] = await connection.execute(query, [movieID, listID]);
    
    return removedMovieFromList;
};

module.exports = {
    getAllLists,
    getListById,
    createList,
    updateList,
    removeList,
    insertMovieIntoList,
    removeMovieFromList
};
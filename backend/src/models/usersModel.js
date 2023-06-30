const connection = require ('./connection');

const getAllUsers = async () => {
    const [users] = await connection.execute('SELECT * FROM users');
    return users;
};

const getUserById = async (id) => {
    
    const query = 'SELECT * FROM users WHERE id = ?';
    
    const [user] = await connection.execute(query, [id]);
    
    return user;
};

const createUser = async (user) => {
    const { name } = user;
    const { email } = user;
    const { password } = user;

    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    
    const [createdUser] = await connection.execute(query, [name, email, password]);
    
    return {insertId: createdUser.insertId};
};

const updateUser = async (id, user) => {
    if (user.name) {
        const query = 'UPDATE users SET name = ? WHERE id = ?';
        await connection.execute(query, [user.name, id]);
    }

    if (user.email) {
        const query = 'UPDATE users SET email = ? WHERE id = ?';
        await connection.execute(query, [user.email, id]);
    }

    if (user.password) {
        const query = 'UPDATE users SET password = ? WHERE id = ?';
        await connection.execute(query, [user.password, id]);
    }

    return;
};

const removeUser = async (id) => {

    const query = 'DELETE FROM users WHERE id = ?';

    const [removedUser] = await connection.execute(query, [id]);

    return removedUser;
};

const findUser = async (user) => {
    const { email } = user;
    
    const query = 'SELECT * FROM users WHERE email LIKE ?';
    
    const [searchedUser] = await connection.execute(query, [email]);
    
    return searchedUser;
};

const authUser = async (user) => {
    const { email } = user;
    const { password } = user;
    
    const query = 'SELECT * FROM users WHERE email LIKE ? AND password LIKE ?';
    
    const [auth] = await connection.execute(query, [email, password]);

    return auth;
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    removeUser,
    findUser,
    authUser
};
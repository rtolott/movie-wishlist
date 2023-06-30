const connection = require ('./connection');

const getAllMovies = async () => {
    const [movies] = await connection.execute('SELECT * FROM movies');
    return movies;
};

const getMovieById = async (id) => {
    
    const query = "SELECT * FROM movies WHERE id = ?";

    const [movie] = await connection.execute(query, [id]);

    return movie;
}

const createMovie = async (movie) => {
    const { title } = movie;
    const { synopsis } = movie;
    const { director } = movie;
    const { releaseYear } = movie;
    const { runtime } = movie;
    const { genres } = movie;

    const query = 'INSERT INTO movies (title, synopsis, director, releaseYear, runtime, genres) VALUES (?, ?, ?, ?, ?, ?)';
    
    const [createdMovie] = await connection.execute(query, [title, synopsis, director, releaseYear, runtime, genres]);
    
    return {insertId: createdMovie.insertId};
};

const updateMovie = async (id, movie) => {
    const { title } = movie;
    const { synopsis } = movie;
    const { director } = movie;
    const { releaseYear } = movie;
    const { runtime } = movie;
    const { genres } = movie;

    const query = 'UPDATE movies SET title = ?, synopsis = ?, director = ?, releaseYear = ?, runtime = ?, genres = ? WHERE id = ?';
    
    const [updatedMovie] = await connection.execute(query, [title, synopsis, director, releaseYear, runtime, genres, id]);
    return updatedMovie;
};

const removeMovie = async (id) => {

    const query = 'DELETE FROM movies WHERE id = ?';

    const [removedMovie] = await connection.execute(query, [id]);

    return removedMovie;
};

const searchMovie = async (research) => {
    const query = "SELECT * FROM movies WHERE title LIKE '%"+ research +"%'";

    const [searchedMovie] = await connection.execute(query);

    return searchedMovie;
};

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    removeMovie,
    searchMovie
};
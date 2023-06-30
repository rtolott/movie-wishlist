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
    const { releaseYear } = movie;
    const { runtime } = movie;
    const { genres } = movie;

    const query = 'INSERT INTO movies (title, synopsis, releaseYear, runtime, genres) VALUES (?, ?, ?, ?, ?)';
    
    const [createdMovie] = await connection.execute(query, [title, synopsis, releaseYear, runtime, genres]);
    
    return {insertId: createdMovie.insertId};
};

const updateMovie = async (id, movie) => {
    if (movie.title) {
        const query = 'UPDATE movies SET title = ? WHERE id = ?';
        await connection.execute(query, [movie.title, id]);
    }

    if (movie.synopsis) {
        const query = 'UPDATE movies SET synopsis = ? WHERE id = ?';
        await connection.execute(query, [movie.synopsis, id]);
    }

    if (movie.releaseYear) {
        const query = 'UPDATE movies SET releaseYear = ? WHERE id = ?';
        await connection.execute(query, [movie.releaseYear, id]);
    }

    if (movie.runtime) {
        const query = 'UPDATE movies SET runtime = ? WHERE id = ?';
        await connection.execute(query, [movie.runtime, id]);
    }

    if (movie.genres) {
        const query = 'UPDATE movies SET genres = ? WHERE id = ?';
        await connection.execute(query, [movie.genres, id]);
    }

    return;
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
console.log(__dirname);
const connectDB = require('./database/db');
const createUser = require('./functions/users/createUser');
const findSong = require('./functions/song/findSong');
const addSongToPlaylist = require('./functions/playlist/addSongToPlaylist');
const getPlaylistSongs = require('./functions/playlist/getPlaylistSongs');

(async () => {
    await connectDB();

    // Créer un utilisateur
    await createUser('John Doe', 'john.doe@example.com', 'hashed_password');

    // Ajouter et récupérer une chanson
    const song = await findSong('Imagine');
    console.log('Song found:', song);

    // Ajouter une chanson à une playlist
    await addSongToPlaylist('playlist123', 'song123');

    // Récupérer les chansons d'une playlist
    const songs = await getPlaylistSongs('playlist123');
    console.log('Playlist songs:', songs);
})();

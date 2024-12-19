const Playlist = require('../database/models/playlist-model');

async function createPlaylist(data) {
    try {
        const playlist = new Playlist(data);
        await playlist.save();
        console.log('Playlist créer avec succès', playlist);
        return playlist;
    } catch (error) {
        console.error('Erreur lors de la création de la playlist', error);
        throw error;
    }
}

module.exports = { createPlaylist };

const Song = require('../database/models/song-model');

async function createSong(data) {
    try {
        const song = new Song(data);
        await song.save();
        console.log('Création du morceaux réussi', song);
        return song;
    } catch (error) {
        console.error('Échec de la création du morceaux', error);
        throw error;
    }
}

module.exports = { createSong };

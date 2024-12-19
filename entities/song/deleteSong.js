const Song = require('../database/models/song-model');

async function deleteSong(songId) {
    try {
        const result = await Song.findByIdAndDelete(songId);
        if (result) {
            console.log('Suppression du morceaux réussi', result);
            return result;
        } else {
            console.log(`Le morceaux n'existe pas ou n'a pas été retrouvé`);
            return null;
        }
    } catch (error) {
        console.error('Erreur de suppresion', error);
        throw error;
    }
}

module.exports = { deleteSong };

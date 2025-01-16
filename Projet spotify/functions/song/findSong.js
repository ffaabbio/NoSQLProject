const Song = require('../../database/models/song-model');

async function findSong(title) {
    const song = await Song.findOne({ title }).populate('artist');
    return song;
}


module.exports = findSong;
const Playlist = require('../../database/models/playlist-model');

async function getPlaylistSongs(playlistId) {
    const playlist = await Playlist.findById(playlistId).populate('songs');
    return playlist.songs;
}


module.exports = getPlaylistSongs;
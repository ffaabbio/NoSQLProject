const Playlist = require('../../database/models/playlist-model');

async function removeSongFromPlaylist(playlistId, songId) {
    const playlist = await Playlist.findById(playlistId);
    playlist.songs.pull(songId);
    await playlist.save();
    console.log('Song removed from playlist:', playlist);
}

module.exports = removeSongFromPlaylist;
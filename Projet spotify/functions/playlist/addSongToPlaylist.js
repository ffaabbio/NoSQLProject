const Playlist = require('../../database/models/playlist-model');

async function addSongToPlaylist(playlistId, songId) {
    const playlist = await Playlist.findById(playlistId);
    playlist.songs.push(songId);
    await playlist.save();
    console.log('Song added to playlist:', playlist);
}

module.exports = addSongToPlaylist;
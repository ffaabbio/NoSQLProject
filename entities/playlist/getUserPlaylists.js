const Playlist = require('../database/models/playlist-model');

async function getUserPlaylists(userId) {
    try {
        const playlists = await Playlist.find({ user: userId }).populate('songs').populate('user');
        console.log('Playlists retrieved successfully:', playlists);
        return playlists;
    } catch (error) {
        console.error('Error retrieving playlists:', error);
        throw error;
    }
}

module.exports = { getUserPlaylists };

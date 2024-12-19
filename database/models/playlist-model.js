const mongoose = require('mongoose');

const PlaylistSchema = new mongoose.Schema({

    id__: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
    },

    
    name: { 
        type: String, 
        required: true 
    },
    
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },

    songs: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Song' 
    }]
});

module.exports = mongoose.model('Playlist', PlaylistSchema);

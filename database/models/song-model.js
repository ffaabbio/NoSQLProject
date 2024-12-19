const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({

    id__: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
    },
    
    title: { 
        type: String, 
        required: true 
    },

    artist: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Artist' 
    },

    album: {
        type: String 
    },
        
    duration: {
        type: Number 
    },

    genre: { 
        type: String
    }
});

module.exports = mongoose.model('Song', SongSchema);

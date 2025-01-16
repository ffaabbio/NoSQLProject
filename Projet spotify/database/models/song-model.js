const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({

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

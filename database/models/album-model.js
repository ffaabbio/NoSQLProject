const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({
    
    id__: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
    },

    name: {
        type: String,
        required: true,
    },

    picture: {
        type: String,
        required: false,
    },

    section: {
        type: String,
        enum: ['single', 'album'],
        required: true
    },

    releaseDate: {
        type: Date,
        required: false,
    },

    distribution: {
        name: String,
        required: false
    },

    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',
        required: true,
    }
    
});

module.exports = mongoose.model('Album', AlbumSchema);
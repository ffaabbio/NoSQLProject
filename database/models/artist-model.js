const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({

    id__: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
    },


    name: { 
        type: String, 
        required: true 
    },

    songs: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Song' 
    }
});

module.exports = mongoose.model('Artist', ArtistSchema);
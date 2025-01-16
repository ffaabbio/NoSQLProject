const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

/*     __id: {
        type: String,
        required: true,
    }, */

    name: { 
        type: String, 
        required: true 
    },

    email: { 
        type: String, 
        required: true, 
        unique: true 
    },

    password: { 
        type: String, 
        required: true 
    },

    playlists: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Playlist' 
    }]
});

module.exports = mongoose.model('User', UserSchema);

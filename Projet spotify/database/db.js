const mongoose = require('mongoose');
const { ListFormat } = require('typescript');


async function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/spotify_clone', {
            enableUtf8Validation: false
        });
        console.log('Connecté à MongoDB');
    } catch (error) {
        console.error('Erreur de connexion à MongoDB:', error);
    }
}

module.exports = connectDB;

const User = require('../database/models/user-model');

async function updateUserPassword(userId, newPassword) {
    try {
        const hashedPassword = newPassword; // Remplace par une fonction de hash comme bcrypt.hash()
        const user = await User.findByIdAndUpdate(
            userId,
            { password: hashedPassword },
            { new: true }
        );
        console.log('Modification du mot de passe réussi', user);
        return user;
    } catch (error) {
        console.error('Erreur, veuillez réessayer plus tard', error);
        throw error;
    }
}

module.exports = { updateUserPassword };

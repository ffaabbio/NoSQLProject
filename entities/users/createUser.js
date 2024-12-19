console.log(__dirname);

const User = require('../../database/models/user-model');

async function createUser(name, email, password) {
    const user = new User({ name, email, password });
    await user.save();
    console.log('User created:', user);
}

module.exports = createUser;
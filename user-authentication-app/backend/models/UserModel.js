const db = require('../config/db');
const bcrypt = require('bcrypt');

const User = {
    create: async (username, email, password) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', 
            [username, email, hashedPassword], (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    },

    findByEmail: (email) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
                if (err) reject(err);
                resolve(result[0]);
            });
        });
    }
};

module.exports = User;

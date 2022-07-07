module.exports = {
    secretKey: process.env.SECRET_KEY || 'my_secret_key',
    saltRounds: parseInt(process.env.SALT_ROUNDS_BCRYPT || 10),
}
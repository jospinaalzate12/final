const { getHashedPassword } = require("../helpers/handleEncrypt");
const { userModel } = require("../models");

const handleLogin = (req, res) => {

    const { email, password } = req.body;

    if (!email || !password)
        return res.json({
            error: "email and passwords are required"
        })

    if (email != 'test@test.com')
        return res.json({
            error: "user not registered"
        })

    if (password != 'test')
        return res.json({
            error: "password incorrect"
        })

    return res.json({
        message: "user logged in succesfully",
        body: {
            token: "tu token"
        }
    })

}


const handleRegister = async (req, res) => {

    try {

        const { name, email, password, avatar, image } = req.body;

        if (!name || !email || !password || !avatar || !image)
            return res.json({
                error: "name, email, password, avatar and image are required"
            });

        const data = req.body;

        const plainPassword = data.password;

        data.password = await getHashedPassword(plainPassword);
        await userModel.customCreate(data);

        return res.json({
            message: "user registered successfully",
            body: {
                name,
                email,
                avatar,
                image
            }
        });


    } catch (error) {
        console.log(error);
        res.status(500);
        res.json({ "error": error });
    }
}

module.exports = {
    handleRegister,
    handleLogin
}
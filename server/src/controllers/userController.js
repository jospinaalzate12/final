const {userModel} = require("../models");

const { getHashedPassword } = require("../helpers/handleEncrypt");

const getAllUsers = (request, response, next) => {

};

const postUser = async (request, response, next) => {

    try {

        const data = request.body;

        const plainPassword = data.password;

        data.password = await getHashedPassword(plainPassword);
        data.avatar = "/users/default.png";

        const user = await userModel.create(data);

        response.json({ "user_added": user });


    } catch (error) {
        response.status(500);
        response.json({ "server_error": error });
    }
}

const postAvatar = async (request, response, next) => {

    try {

        const avatarPath = request.avatarFile;
        const user = request.user;

        
        await userModel.updateFirst({ email: user.email }, { avatar: avatarPath });

        return response.redirect("/dashboard");
    }
    catch (error) {
        response.status(500);
        response.json({ "server_error": error });
    }

}


module.exports = {
    getAllUsers,
    postUser,
    postAvatar
}

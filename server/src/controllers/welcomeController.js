const path = require("path");
const {userModel} = require("../models");

const handleWelcomeWeb = (request,response,next)=>{
    return response.sendFile(path.resolve(__dirname+"/../views/welcome.html"));
}

const handleLoginWeb = (request,response,next)=>{
    return response.sendFile(path.resolve(__dirname+"/../views/login.html"));
}

const handleRegisterWeb = (request,response,next)=>{
    return response.sendFile(path.resolve(__dirname+"/../views/register.html"));
}

const handleDashboardWeb = async (request,response,next)=>{
    
    const userData = request.user;
    
    const emailUser = userData.email;

    const user = await userModel.findFirst({email:emailUser});

    const nameUser = user.name;
    const avatarUser = user.avatar;
    
    return response.render('dashboard',{
        name: nameUser,
        email: emailUser,
        avatar: avatarUser,
    });
} 


module.exports = {
    handleWelcomeWeb,
    handleLoginWeb,
    handleRegisterWeb,
    handleDashboardWeb
}

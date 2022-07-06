const {userModel} = require("../models");

const {isTheSameHash} = require("../helpers/handleEncrypt");
const {getJSONWebToken} = require("../helpers/handleJWT");
const {setCookie} = require("../helpers/handleCookie");

const handleAuthLogin = async (req,res,next) =>{

    try{

        const {email, password} = req.body;
    
        const user = await userModel.findFirst({ email: email });

        if(!user){
            res.status(400);
            return res.json({error:"User not registered"});
        }

        
        const isAuthorized = await isTheSameHash(password,user.password);
            


        if(!isAuthorized){
            res.status(401);
            return res.json({error:"User not authorized"});
        }

        const token = getJSONWebToken(user);

        setCookie(req,token);

        return res.redirect("/dashboard");
    
    }catch(error){
        
        console.log(error);
        res.status(500);
        return res.json({"server_error":error});
    }
}


module.exports.handleAuthLogin = handleAuthLogin;
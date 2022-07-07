const { getHashedPassword,isTheSameHash } = require("../helpers/handleEncrypt");
const { userModel } = require("../models");
const {setCookie} = require("../helpers/handleCookie");
const {getJSONWebToken} = require("../helpers/handleJWT");


const handleLogin = async (req, res) => {
 try{
    const { email, password } = req.body;
   
    const user= await userModel.find({email:email})
    
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


    
    /*if (!email || !password)
        return res.json({
            error: "email and passwords are required"
        })

    if (email != 'test@test.com')
       console.log(error)
    return res.json({
            error: "user not registered",
           
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
    })*/



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
      
        res.status(500);
        res.json({ "error": error });
    }
}

module.exports = {
    handleRegister,
    handleLogin
}
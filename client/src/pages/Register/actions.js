
export const CHANGE_NAME= "cambiar el nombre";
export const CHANGE_EMAIL= "cambiar el correo";
export const CHANGE_PASSWORD= "cambiar la contraseña";
export const CHANGE_AVATAR= "cambiar el avatar";
export const CHANGE_IMAGE= "cambiar la imagen";
export const CHANGE_AVATAR_AND_IMAGE= "cambiar el avatar y la imagen";

export const changeName=(name)=>{
    return{
        type:CHANGE_NAME,
        payload: name
    }
}
export const changeEmail=(email)=>{
    return{
        type:CHANGE_EMAIL,
        payload: email
    }
}
export const changePassword=(password)=>{
    return{
        type:CHANGE_PASSWORD,
        payload: password
    }
}
export const changeAvatar=(avatar)=>{
    return{
        type:CHANGE_AVATAR,
        payload: avatar
    }
}
export const changeImage=(image)=>{
    return{
        type:CHANGE_IMAGE,
        payload: image
    }
}
export const changeAvatarAndImage=(avatar,image)=>{
    return{
        type:CHANGE_AVATAR_AND_IMAGE,
        payload:{
            image,
        avatar
        } 
    }
}

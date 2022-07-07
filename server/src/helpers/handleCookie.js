


const setCookie = (request,token)=>{
    request.session.token = token;
    return true;
}

module.exports = {
    setCookie
}
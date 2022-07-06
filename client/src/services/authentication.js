import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL || '/api/v1';

const AUTH_URL = API_URL + "/auth";

export const handleLogin = async (email, password) => {
 
    const data = { email, password };
    // Las peticiones por post, put, patch se le especifica por primer parametro
    // la URL a donde envia la informacion y segundo parametro la informacion a enviar
    const response = await axios.post(AUTH_URL + '/login', data);
    const jsonResponse = response.data;  // El atributo .data contendra toda la informacion que se extrajo de la peticion

    if (jsonResponse.error)
        throw jsonResponse.error;//throw se usa cuando hay un error

    const body = jsonResponse.body;
    const { token } = body;

    if (!token)
        throw "Token is required in the login";

    saveToken(token);

    return {
        success: jsonResponse.message
    }
}

export const handleRegister = async (userData) => {

    console.log(userData);
    const response = await axios.post(AUTH_URL + "/register", userData);
    const jsonResponse = response.data;

    if (jsonResponse.error)
        throw jsonResponse.error;

    return {
        success: jsonResponse.message,
        userData
    }
    
}


export const saveToken = (token) => {
    localStorage.setItem('token', token);
}

export const getToken = () => {
    localStorage.getItem('token');
}
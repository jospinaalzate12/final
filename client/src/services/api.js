import axios from 'axios';
const API_URL = process.env.REACT_APP_RICK_API_URL || "https://rickandmortyapi.com/api";

export const getAllCharacters = async () => {

    try {
        
        const response = await axios.get(API_URL + "/character"); // Esto tramita una peticion get
        const jsonData = response.data; // El atributo .data contendra toda la informacion que se extrajo de la peticion

        const results = jsonData.results;

        if (!results)
            return [];

        return results.map((element)=>{
            return {
                name: element.name,
                image: element.image
            }
        })

    } catch (error) {

        console.log(error);
        return [];
    }
}
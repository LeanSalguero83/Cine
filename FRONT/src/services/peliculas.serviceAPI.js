import axios from 'axios'

const API_BASE_URL = 'http://localhost:3001'

async function getPeliculasAPI(filtro){
    try{
        let url = `${API_BASE_URL}/api/peliculas`;
        if (filtro) {
            url += `?titulo=${filtro}`;
        }
        const response = await axios.get(url);
        console.log("la respuesta es: "+ JSON.stringify(response));
        return response.data;
    }
    catch(error){
        console.error("error en la petición a la api de get peliculas", error);
        throw error;
    }
}


async function addPeliculaAPI(pelicula){
    try{
        const response = await axios.post(`${API_BASE_URL}/api/peliculas`,pelicula)
        return response.data
    }
    catch(error){
        console.error("error en la petición a la api de post pelicula", error)
        throw error
    }
}

export {getPeliculasAPI, addPeliculaAPI}
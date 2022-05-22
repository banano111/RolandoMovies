import axios from "axios";

export const getSeries = async () => {
    try {
        const response = await axios.get("http://localhost:8000/series")

        if(response.data){
            console.log("Respuesta Service OK")
            return response.data
        }

    } catch (error) {
        console.log("Respuesta Service ERROR")
        
        seriesResponse = {
            errorResponse: error,
            error: true,
        }

        return seriesResponse
    }
}
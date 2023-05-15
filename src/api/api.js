import axios from "axios" //libreria con la cual puedo hacer peticiones a http
export const api = axios.create({
    baseURL:"http://localhost:5000"
})

//funcion asincrona. recibe la url q nos interesa, concatena a la base url de la const anterior, se va a conectar al local host, y una vez que tenga la respuesta, espera y guardas la respuesta en const respuestay los datos los va a meter en la llave data. 
export const buscar =async (url, setData)=>{
    const respuesta = await api.get(url)
    setData(respuesta.data)

}
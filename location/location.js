const axios = require('axios')


const getLocationLatLng = async (location) => {
    const encodedUrl = encodeURI(location)
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {'X-RapidAPI-Key': '88f9f69fa0msh7a955e4c3b47771p10b13fjsn97aa931652d7'}
      })
    
    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${location}`)
    }

    const data      = resp.data.Results[0]
    const direccion = data.name
    const lat       = data.lat
    const lng       = data.lon

    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLocationLatLng
}


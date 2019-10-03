const axios = require('axios')


const getWeather = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=bb586586a3dd7afea045aeddc26dd824&units=metric`)

    return resp.data.main.temp
}


module.exports = {
    getWeather
}
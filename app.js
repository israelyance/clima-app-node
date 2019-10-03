const location = require('./location/location')
const weather  = require('./weather/weather')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Dirección de la ciudad para obtener el clima'
    }
}).argv


const getInfo = async (city) => {
    try {
        const coords = await location.getLocationLatLng(city)
        const temp = await weather.getWeather(coords.lat, coords.lng)
        return `El clima de ${city} es de ${temp}`
    } catch (error) {
        return `No se pudo determinar el clima de ${city}`
    }
}


getInfo(argv.direccion)
        .then(console.log)
        .catch(console.log)


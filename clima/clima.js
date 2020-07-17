const axios = require('axios');

const getClima = async ( lat, lng ) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f6ca994aa206bdf3972156fcee6318ce&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}
const axios = require('axios');

const getLugarLatLng = async ( dir ) => {

    const ecodedUlr = encodeURI( dir );
    
    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${ ecodedUlr }`,
        headers: {'x-rapidapi-key': 'f15a918444msh54cac786bf50a3cp19353djsn393baa1c9799'}
      });
    
    const resp = await instance.get();

    if ( resp.data.coord.length === 0){
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.coord;
    const direccion = resp.data.name;
    const lat = data.lat;
    const lng = data.lon;

            

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}

const axios = require('axios');
const { response } = require('express');

function findCapitalWeather(countryName) {
    axios.get('https://restcountries.eu/rest/v2/name/' + countryName)
        .then(response => {
            const country = response.data[0];
            const capital = country.capital;
            const population = country.population;
            const enlem = country.latlng[0];
            const boylam = country.latlng[1];
            console.log(`Nüfus: ${population} Enlem: ${enlem} Boylam: ${boylam} ve Başkent: ${capital}`);

            axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + capital + '&appid=5ed44540179cb2edfe474066645eac57&lang=tr&units=metric')
                .then(res => {
                    //console.log(res.data);
                    console.log(`Başkent ${res.data.name} bugün hava ${res.data.weather[0].description} sıcaklık ${res.data.main.temp} `);
                })

        });
}
module.exports = findCapitalWeather;




//HTTPS ile GET ISTEGI
/*https.get('https://restcountries.eu/rest/v2/name/turkey', (response) => {
    let data = '';
    response.on('data', chunk => {
        data = data + chunk;
    });
    response.on('end', () => {
        const jsonData = JSON.parse(data);
        if (jsonData[0] != null)
            console.log(jsonData[0].timezones[0]);
            else console.log("Veri Getirilemedi.");
    });

}).on('error', (err) => {
    console.log(err.message);
});*/
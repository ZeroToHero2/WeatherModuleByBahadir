const axios = require('axios');
const { response } = require('express');

function findCapitalWeather(countryName) {
    axios.get('https://restcountries.eu/rest/v2/name/' + countryName)
        .then(response => {
            const country = response.data[0];
            const capital = country.capital;
            const population = country.population;
            const latitude = country.latlng[0];
            const longitude = country.latlng[1];
            console.log(`Nüfus: ${population} Enlem: ${latitude} Boylam: ${longitude} ve Başkent: ${capital}`);

            axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + capital + '&appid=5ed44540179cb2edfe474066645eac57&lang=tr&units=metric')
                .then(res => {
                    //console.log(res.data);
                    console.log(`Başkent ${res.data.name} bugün hava ${res.data.weather[0].description} sıcaklık ${res.data.main.temp} `);
                })

        });
}
module.exports = findCapitalWeather;


//With HTTPS
/*https.get('https://restcountries.eu/rest/v2/name/turkey', (response) => {
    let data = '';
    response.on('data', chunk => {
        data = data + chunk;
    });
    response.on('end', () => {
        const jsonData = JSON.parse(data);
        if (jsonData[0] != null)
            console.log(jsonData[0].timezones[0]);
            else console.log("Data could not fetched.");
    });

}).on('error', (err) => {
    console.log(err.message);
});*/

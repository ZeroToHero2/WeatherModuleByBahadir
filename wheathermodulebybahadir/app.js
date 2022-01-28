//const https = require('https');
const yargs = require('yargs');
const capitalWeather = require('./capital-weather');

function Run() {
    yargs.command({
        command: 'wheather',
        describe: 'Please Enter the Country Name of the Capital City that You want to see the its weather informations.',
        builder: {
            country: {
                describe: 'Enter the Country',
                demandOption: true,
                type: 'string'
            },
        },
        handler(argv) {
            capitalWeather(argv.country);
        }
    });
    yargs.parse();
}
module.exports = Run;

const { IP2Location } = require("ip2location-nodejs");

const ip2location = new IP2Location();

ip2location.open("./IP2LOCATION-LITE-DB1.BIN");

const ip = "8.8.8.8"

const data = ip2location.getAll(ip);
const country_short = data.countryShort;

console.log(country_short)




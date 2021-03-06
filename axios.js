require("dotenv").config();
const axios = require("axios");

module.exports = {
  gasStation: axios.create({
    baseURL: process.env.GAS_STATION_BASE_URL || "https://ethgasstation.info/json/ethgasAPI.json",
    params: { "api-key": process.env.GAS_STATION_API },
  }),
};

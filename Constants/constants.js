require("dotenv").config();
const {
  USERNAME,
  PASSWORD,
} = process.env;

const BASE_URL = 'https://www.pecodesoftware.com/'

module.exports = Object.freeze({
    USERNAME,
    PASSWORD,
    BASE_URL: BASE_URL,
})
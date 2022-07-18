const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

const getAddresses = (req, res) => {}

const getAddressesById = (req, res) => {}

const getClientsByZip = (req, res) => {}

module.exports = {
    getAddresses,
    getAddressesById,
    getClientsByZip
}
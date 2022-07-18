const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

const getClients = (req, res) => {}

const getClientsById = (req, res) => {}

const getClientsByLastName = (req, res) => {}

module.exports = {
    getClients,
    getClientsById,
    getClientsByLastName
}
const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require('../sql/error')

const getContacts = (req, res) => {}

const getContactsById = (req, res) => {}

const getClientsByPhone = (req, res) => {}

module.exports = {
    getContacts,
    getContactsById,
    getClientsByPhone
}
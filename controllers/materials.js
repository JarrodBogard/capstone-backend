const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

const getMaterials = (req, res) => {}

const getMaterialsById = (req, res) => {}

const getMaterialsByType = (req, res) => {}

module.exports = {
    getMaterials,
    getMaterialsById,
    getMaterialsByType
}
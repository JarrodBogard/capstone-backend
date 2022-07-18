const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require('../sql/error')

const getProjects = (req, res) => {}

const getProjectsById = (req, res) => {}

const getClientsByProjectDate = (req, res) => {}

module.exports = {
    getProjects,
    getProjectsById,
    getClientsByProjectDate
}
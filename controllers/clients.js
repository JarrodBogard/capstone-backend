const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

const getClients = (req, res) => {
    let sql = "SELECT * FROM ??"
    const replacements = ["Clients"]
    sql = mysql.format(sql, replacements)
    pool.query(sql, (err, rows) => {
        if(err) {
            console.log({message: "Error occurred: " + err})
            return res.status(500).send("An unexpected error occurred")
        }
        res.json(rows)
    })
}

const getClientsById = (req, res) => {
    const { id } = req.params

    let sql = "SELECT * FROM ?? WHERE ?? = ?"
    const replacements = ["Clients", "client_id", id]
    sql = mysql.format(sql, replacements)

    pool.query(sql, (err, row) => {
        if(err) {
            console.log({message: "Error occurred: " + err})
            return res.status(500).send("An unexpected error occurred")
        }
        res.json(row)
    })
}

const getClientsByLastName = (req, res) => {
    const { last_name } = req.params

    let sql = "SELECT * FROM ?? WHERE ?? = ?"
    const replacements = ["Clients", "last_name", last_name]
    sql = mysql.format(sql, replacements)

    pool.query(sql, (err, row) => {
        if(err) {
            console.log({message: "Error occurred: " + err})
            return res.status(500).send("An unexpected error occurred")
        }
        res.json(row)
    })
}

module.exports = {
    getClients,
    getClientsById,
    getClientsByLastName
}
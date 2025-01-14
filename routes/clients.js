const express = require("express")
const router = express.Router()

const {
    getClients,
    getClientsById,
    getClientsByLastName
} = require("../controllers/clients")

router.get("/", getClients)
router.get("/:id", getClientsById)
router.get("/name/:last_name", getClientsByLastName)

module.exports = router
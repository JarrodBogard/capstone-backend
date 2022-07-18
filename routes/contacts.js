const express = require("express")
const router = express.Router()

const {
    getContacts,
    getContactsById,
    getClientsByPhone 
} = require("../controllers/contacts")

router.get("/", getContacts)
router.get("/:id", getContactsById)
router.get("/phone/:phone", getClientsByPhone)

module.exports = router
const express = require("express")
const router = express.Router()

const {
    getAddresses,
    getAddressesById,
    getClientsByZip
} = require("../controllers/addresses")

router.get("/", getAddresses)
router.get("/:id", getAddressesById)
router.get("/zip/:zip", getClientsByZip)

module.exports = router
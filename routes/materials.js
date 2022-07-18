const express = require("express")
const router = express.Router()

const {
    getMaterials,
    getMaterialsById,
    getMaterialsByType
} = require("../controllers/materials")

router.get("/", getMaterials)
router.get("/:id", getMaterialsById)
router.get("/material/:material_type", getMaterialsByType)

module.exports = router
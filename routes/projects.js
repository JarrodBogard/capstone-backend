const express = require("express")
const router = express.Router()

const {
    getProjects,
    getProjectsById,
    getClientsByProjectDate
} = require("../controllers/projects")

router.get("/", getProjects)
router.get("/:id", getProjectsById)
router.get("/project/:project_date", getClientsByProjectDate)

module.exports = router
const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

router.get("/", jobController.getJobs);
router.get("/featured", jobController.getFeaturedJobs);
router.get("/latest", jobController.getLatestJobs);
router.get("/:id", jobController.getSingleJob);

router.post("/", protect, adminOnly, jobController.createJob);
router.delete("/:id", protect, adminOnly, jobController.deleteJob);
router.put("/:id", protect, adminOnly, jobController.updateJob);

module.exports = router;
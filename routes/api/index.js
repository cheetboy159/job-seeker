
const router = require("express").Router();
const jobRoutes = require("./jobs");
const interviewRoutes = require("./interviews");

// User routes /api/user*
router.use("/jobs", jobRoutes);
router.use("/interviews", interviewRoutes);

module.exports = router;

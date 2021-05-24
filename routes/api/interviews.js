
const router = require("express").Router();
const { Interview } = require("../../models");


router.post('/', async (req, res) => {
    const saveInterview = await Interview.create(req.body);
    return res.json({
        message: "Interview saved",
        status: 201,
        data: saveInterview
    });

})

router.get('/', async (req, res) => {
    const getSavedInterview = await Interview.find({});
    return res.json({
        message: "Here is a list of all the saved interviews!",
        status: 200,
        data: getSavedInterview
    });
});

module.exports = router;
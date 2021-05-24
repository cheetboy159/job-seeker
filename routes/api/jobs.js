
const router = require("express").Router();
const fetch = require("node-fetch");
const { Job } = require("../../models");

router.post('/', async (req, res)=>{
    const saveJob = await Job.create(req.body);
    return res.json({
        message: "A new job has been saved!",
        status: 201, 
        data: saveJob
    });

})

router.get('/', async (req, res) => {
    const url = "https://jobs.github.com/positions.json?description=ruby&page=1";
    const request = await fetch(url, {
        headers: {
            'Contenty-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then(data => data.json())
    .catch(err => console.error(err));

    return res.json(request);
});

router.get('/saved', async (req, res) => {
    const getSavedJobs = await Job.find({});
    return res.json({
        message: "Here is a list of all the saved jobs!",
        status: 200,
        data: getSavedJobs
    });
});
module.exports = router;
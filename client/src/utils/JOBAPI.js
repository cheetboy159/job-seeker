import axios from "axios";
const url = "http://localhost:3001/api/jobs";

const jobs = {
    search: function () {
        return axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        })
    }, 
    saveJob: function(job){
        return axios.post(url, job).then((data)=>data);
    },
    getSavedJobs: function () {
        return axios.get(`${url}/saved`)
    }
};
export default jobs;
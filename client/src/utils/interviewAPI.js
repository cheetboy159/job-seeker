import axios from "axios";
const url = "/api/interviews";

const interview = {
    saveInterview: function (interview) {
        return axios.post(url, interview).then((data) => data);
    },
    getSavedInterview: function () {
        return axios.get(url)
    }
};
export default interview;
import React from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function createMarkup(content) {
    return { __html: content };
}

export default function SavedJobList({ savedJobs, startDate, setStartDate, handleSavedInterview}) {
    console.log(savedJobs);
    return (
        <div>
            <ul className="list-unstyled">
                {savedJobs.map((job) => (
                    <li key={job._id}>
                        <div className="card mb-4" style={{ width: '420px' }}>
                            <div className="card-body ">
                                {/* <img className="card-img-top" src={job.company_logo} alt={job.title} /> */}
                                <h5 className="card-title">{job.title}</h5>
                                <p>{job.company}</p>
                                <p>{job.location}</p>
                               
                                <strong>How to apply:</strong>
                                <div dangerouslySetInnerHTML={createMarkup(job.how_to_apply)} />
                               {/* add interview dat calander
                                    save as interview button
                               */}
                                <div className="d-flex flex-column flex-md-row justify-content-between pr-3">
                                    <div><DatePicker selected={startDate} onChange={date => setStartDate(date)} /></div>
                                    <div><a className="btn btn-info mx-2" href={job.url} rel="noopener noreferrer" target="_blank" role="button">Apply</a></div>
                                    <div><button type="button" className="btn btn-success" onClick={() => handleSavedInterview({
                                        title: job.title,
                                        company: job.company,
                                        date: startDate,
                                        url: job.url,
                                    })}>Set Interview</button></div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
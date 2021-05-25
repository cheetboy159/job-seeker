import React from "react"

export default function InterviewList({ savedInterviews }) {
    // console.log(savedInterviews);
    return (
        <div>
            <ul className="list-unstyled">
                {savedInterviews.map((interview) => (
                    <li key={interview._id}>
                        <div className="card mb-4" style={{ width: '420px' }}>
                            <div className="card-body ">
                                {/* <img className="card-img-top" src={job.company_logo} alt={job.title} /> */}
                                <h5><a href={interview.url} target="_blank" rel="noopener noreferrer">{interview.title}</a></h5>
                                <p>{interview.company}</p>
                                <p>{interview.location}</p>
                                <p>Interview Date: {interview.date}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
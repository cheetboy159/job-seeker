import React from "react"
function createMarkup(content) {
    return { __html: content };
}

export default function JobList({ jobs, handleSaveJob }) {
    return (
        <div>
            <ul className="list-unstyled">
                {jobs.map((job) => (
                    <li key={job.id}>
                        <div className="card mb-4" style={{ width: '400px' }}>
                            <div className="card-body">
                                <img className="card-img-top" src={job.company_logo} alt={job.title} />
                                    <h5 className="card-title">{job.title}</h5>
                                    <p>{job.company}</p>
                                    <p>{job.location}</p>
                                    {/* <div dangerouslySetInnerHTML={createMarkup(job.description)} /> */}
                                    <strong>How to apply:</strong>
                                    <div dangerouslySetInnerHTML={createMarkup(job.how_to_apply)} />
                                <button className="btn btn-info" onClick={()=>handleSaveJob(job)}>Save Job</button>
		                    </div>
                            </div>
                    </li>
))}
        </ul>
        </div>
    )
}
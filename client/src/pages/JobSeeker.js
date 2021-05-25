import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import JOBAPI from '../utils/JOBAPI';
import InterviewApi from '../utils/interviewAPI';
import JobList from '../components/JobList';
import SavedInterviewList from '../components/SavedInterviewList';
import SavedJobList from '../components/SavedJobList';
import Search from '../components/Search';

function JobSeeker() {
  // Setting our component's initial state
  const [jobs, setJobs] = useState([]);
  const [location, setLocation] = useState("");
  const [jobsByLocation, setJobsByLocation] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [savedInterviews, setSavedInterviews] = useState([]);
  const [startDate, setStartDate] = useState(new Date());


  // Load all books and store them with setBooks
  useEffect(() => {
    loadJobs();
    loadSavedJobs();
    loadInterviews();
  }, [])

  function loadJobs() {
    JOBAPI.search()
      .then(res =>
        {setJobs(res.data)
        setJobsByLocation(res.data)}
      )
      .catch(err => console.log(err));
  };
  function filterByLocation(){
    const jobsFiltered = jobs.filter((job) => {
      const jobLocation = job.location.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, '');
      const locationTerm = location.toLowerCase().trim();
      // console.log("job Location: ", jobLocation);
      // console.log("location term: ", locationTerm);
      // console.log(jobLocation.indexOf(locationTerm));
      if (jobLocation.indexOf(locationTerm) >= 0) {
        return true;
      }
      return false;
    });
    setJobsByLocation(jobsFiltered);
  }
  function loadInterviews() {
    InterviewApi.getSavedInterview()
      .then(res =>
        setSavedInterviews(res.data.data)
        // console.log(res.data.data)
      )
      .catch(err => console.log(err));
  };

  function loadSavedJobs() {
    JOBAPI.getSavedJobs()
      .then(res =>
        setSavedJobs(res.data.data)
      )
      .catch(err => console.log(err));
  };

  function handleSavedInterview(interview){
    console.log(interview);
    const { url, company, location, title, date} = interview;
    InterviewApi.saveInterview({
      url,
      company,
      location,
      title,
      date
    })
      .then((data) => { console.log(data) })
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleJobSave(job) {
    const { url, company, location, title, description, how_to_apply, company_logo } = job;  
    JOBAPI.saveJob({ 
      url, 
      company, 
      location, 
      title, 
      description, 
      how_to_apply, 
      company_logo 
    })
    .then((data)=>{console.log(data)})
  };
  console.log({
    jobs,
    jobsByLocation
  });
    return (
      <Container >
        <Row>
          
          <Col size=" sm-12">
            <Jumbotron>
              <h1>Job Seeker</h1>
              <Search filterByLocation={filterByLocation} location={location} setLocation={setLocation} />
            </Jumbotron>
          
          </Col>
          <Col size="sm-12">
            
          </Col>
          <Col size="sm-12 md-6">
            <JobList jobs={jobsByLocation} handleSaveJob={handleJobSave}/>
          </Col>
          <Col size="sm-12 md-6">
            <h2>Saved Jobs</h2>
            <SavedJobList savedJobs={savedJobs} startDate={startDate} setStartDate={setStartDate} handleSavedInterview={handleSavedInterview}/>
            <h2>Interview List</h2>
            <SavedInterviewList savedInterviews={savedInterviews} />
          </Col>
        </Row>
      </Container>
    );
  }


export default JobSeeker;

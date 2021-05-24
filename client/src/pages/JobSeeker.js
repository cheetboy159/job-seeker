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
      if (job.location.indexOf(location) > 0) {
        return false;
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

    return (
      <Container >
        <Row>
          
          <Col size=" sm-12">
            <Jumbotron>
              <h1>Job Seeker</h1>
            </Jumbotron>
          {/* 
          1. make a component that would hold all the job listings from the api

          2. make a save job Button and function that would store the jobe in the db
          3. make a component that will display the saved jobs
          4. make a button that will link the job site
          5. creat a txt input and function that will allow me to creat a date for the application- maybe use a react date component
          6. creat a function that will save the job title, link, and date to the interview list
          7. creat a component that will list our interviews.

          */}
          </Col>
          <Col size="sm-12">
            <Search filterByLocation={filterByLocation} location={location} setLocation={setLocation} />
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

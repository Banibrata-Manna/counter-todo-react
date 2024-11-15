import React, { useEffect, useState } from 'react';
import './ListJobs.css';
import { retrieveAllJobs } from './api/JobApiService';
import JobComponent from './JobComponent';

export function ListJobsComponent() {

    const [jobs, setJobs] = useState([]);

    const [selectedJob, setSelectedJob] = useState(null); // New state for selected job

    useEffect(
        () => {
            refreshJobs()
        }, []
    )

    async function refreshJobs() {
        await retrieveAllJobs()
            .then(
                (response) => 
                    {
                        // console.log(response.data);
                        setJobs(response.data);
                    }
                )
            .catch(error => console.log(error));
    }

    function handleViewJob(job) {
        console.log(job.jobId);
        setSelectedJob(job);
    }

    return (
        <div className='ListJobComponent'>
            <div className="list-container">
                {jobs.map((job) => (
                    <JobCard key={job.jobId} job={job} onClick={() => handleViewJob(job)} />
                ))}
            </div>
            <div className="job-component-container">
                {selectedJob && <JobComponent job={selectedJob} />}
            </div>
        </div>
    );
}

const JobCard = ({job, onClick}) => {
  return (
    <div className="JobCard" onClick={onClick}>
      <div className="job-title">{job.jobRole}</div>
      <div className="company">{job.companyName}</div>
      <div className="location">{job.location}</div>
    </div>
  );
};
export default ListJobsComponent;
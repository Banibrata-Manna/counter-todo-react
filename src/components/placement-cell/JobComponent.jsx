import React from 'react';
import './JobComponent.css';

const JobComponent = ({job}) => {
  const { jobId, jobRole, companyName, location, packageOffered, skillsRequired, dateOfPost, otherDetails } = job;

  function handleApply(jobId) {
    
  }

  return (
    <div className="job-card">
      <div className="job-title mb-3">{jobRole}</div>
      <div className="company mb-2 fw-bolder">{companyName}</div>
      <div className="location mb-2">{location}</div>
      <div className="package d-flex mb-2">
        <span className='me-2 fw-bold'>Package:</span>
        <p className="fw-normal">{packageOffered}</p>
      </div>
      <div className="skills d-flex mb-2">
        <span className='me-2 fw-bold'>Required Skills:</span>
        <p className="fw-normal">{skillsRequired}</p>
      </div>
      <div className="date mb-2">
        <span className='me-2 fw-bold'>Posted On:</span>
        <p className='fw-normal'>{dateOfPost}</p>
      </div>
      <div className="other-details mb-2 fw-bold">
      Other Details:
        <ul>
          {Object.entries(otherDetails).map(([key, value]) => (
            <p className="fw-normal mb-1" key={key}>{key}: {value}</p>
          ))}
        </ul>
      </div>
      {/* Add a section to display applicants if needed */}
      {/* <div className="applicants">
        Applicants:
        <ul>
          {applicants.map(applicant => (
            <li key={applicant.id}>{applicant.name}</li>
          ))}
        </ul>
      </div> */}
      <button type="button" class="btn btn-primary mx-2" onClick={() => handleApply(jobId)}>Apply</button>
    </div>
  );
};

export default JobComponent;
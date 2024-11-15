import React from 'react';
import './JobComponent.css'; // Import the CSS file

// const job = {
//     jobId: '123',
//     jobRole: 'Software Engineer',
//     companyName: 'Google',
//     location: 'Mountain View, CA',
//     packageOffered: '$120,000',
//     skillsRequired: 'Java, Python, React',
//     dateOfPost: new Date('2023-11-12'),
//     otherDetails: {
//       experience: '2+ years',
//       education: 'Bachelor degree in Computer Science',
//       Responsibilities: `
// 1. Requirement Analysis:
//    - Collaborate with stakeholders, including clients, project managers, and product owners, to understand software requirements and business objectives.
//    - Analyze user needs to create software that aligns with these needs.

// 2. Design and Architecture:
//    - Develop technical designs, software architectures, and detailed specifications for software systems.
//    - Design scalable, secure, and efficient solutions that can be implemented and maintained effectively.

// 3. Development and Coding:
//    - Write clean, efficient, and maintainable code following best practices.
//    - Implement algorithms and data structures as needed for the functionality of the software.

// 4. Testing and Debugging:
//    - Create and execute unit tests, integration tests, and other forms of testing to ensure the software's reliability and performance.
//    - Debug code to fix errors and improve software performance.

// 5. Documentation:
//    - Prepare technical documentation for software, including system specifications, API documentation, and user guides.
//    - Maintain code documentation for future development and maintenance.

// 6. Collaboration:
//    - Work with cross-functional teams including developers, QA engineers, product managers, and designers.
//    - Participate in code reviews to ensure quality and adherence to coding standards.

// 7. Deployment and Maintenance:
//    - Oversee software deployment processes, including continuous integration/continuous deployment (CI/CD).
//    - Monitor applications post-deployment, provide support for troubleshooting issues, and update software as needed.

// 8. Security and Performance Optimization:
//    - Implement measures to secure software against potential vulnerabilities.
//    - Optimize software performance, including load balancing, speed, and memory management.

// 9. Version Control and Project Management:
//    - Use version control systems like Git to manage code changes and collaborate with other developers.
//    - Participate in agile methodologies (e.g., Scrum, Kanban) and contribute to sprint planning, stand-up meetings, and retrospective sessions.

// 10. Research and Continuous Learning:
//     - Stay updated with the latest tools, technologies, and practices in software engineering.
//     - Innovate and propose new solutions or tools that can improve efficiency and performance.

// 11. Client and User Interaction:
//     - Interact with clients or end-users to gather feedback and refine software based on their needs.
//     - Provide technical support and training when necessary.

// 12. Mentorship:
//     - Mentor junior developers and contribute to their growth and development by sharing knowledge and best practices.
// `
//     }
//     //,
//     // applicants: [
//     //   { id: 1, name: 'Alice' },
//     //   { id: 2, name: 'Bob' }
//     // ]
//   };

const JobComponent = ({job}) => {
  const { jobId, jobRole, companyName, location, packageOffered, skillsRequired, dateOfPost, otherDetails } = job;

  return (
    <div className="job-card">
      <div className="job-title">{jobRole}</div>
      <div className="company">{companyName}</div>
      <div className="location">{location}</div>
      <div className="package">Package: {packageOffered}</div>
      <div className="skills">Required Skills: {skillsRequired}</div>
      <div className="date">Posted On: {dateOfPost}</div>
      <div className="other-details">
      Other Details:
        <ul>
          {Object.entries(otherDetails).map(([key, value]) => (
            <p key={key}>{key}: {value}</p>
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
    </div>
  );
};

export default JobComponent;
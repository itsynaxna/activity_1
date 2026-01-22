import React from "react";


function PersonalInformation({
  firstName,
  middleName,
  lastName,
  address,
  birthdate
}) {
  return (
    <div className="card">
      <h2 className="card-title">Personal Information</h2>

      <div className="info-grid">
        <div>
          <span className="label">First Name</span>
          <p>{firstName}</p>
        </div>

        <div>
          <span className="label">Middle Name</span>
          <p>{middleName}</p>
        </div>

        <div>
          <span className="label">Last Name</span>
          <p>{lastName}</p>
        </div>

        <div>
          <span className="label">Address</span>
          <p>{address}</p>
        </div>

        <div>
          <span className="label">Birthdate</span>
          <p>{birthdate}</p>
        </div>
      </div>
    </div>
  );
}


function EducationalBackground({
  elementary,
  elementaryYear,
  juniorHigh,
  juniorHighYear,
  seniorHigh,
  seniorHighYear,
  college,
  collegeYear
}) {
  return (
    <div className="card">
      <h2 className="card-title">Educational Background</h2>

      <div className="education-grid">
        <div className="edu-item">
          <h4>Elementary</h4>
          <p>{elementary}</p>
          <span>{elementaryYear}</span>
        </div>

        <div className="edu-item">
          <h4>Junior High School</h4>
          <p>{juniorHigh}</p>
          <span>{juniorHighYear}</span>
        </div>

        <div className="edu-item">
          <h4>Senior High School</h4>
          <p>{seniorHigh}</p>
          <span>{seniorHighYear}</span>
        </div>

        <div className="edu-item">
          <h4>College</h4>
          <p>{college}</p>
          <span>{collegeYear}</span>
        </div>
      </div>
    </div>
  );
}


export { PersonalInformation, EducationalBackground };

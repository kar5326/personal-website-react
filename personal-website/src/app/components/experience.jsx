import React from 'react';

const Experience = () => {
  return (
    <div className="font-[family-name:var(--font-montserrat)]">
        <h1 className=" subheading ">Experience</h1>
        <h3  className="title font-bold sm:text-left ">
            Software Engineer at Liberty Mutual Insurance 
        </h3>
        <h3 className="date sm:text-left ">
            2022-Present
        </h3>
        <ul  className="text-sm text-center mb-3 sm:text-left"> 
            <li>
                Developed new features for invoice registration and processing in Latin American markets.
            </li>
            <li>
                Implemented paperless billing feature in production, used by hundreds of customers for online invoice receipt and payment.
            </li>
            <li>
                Successfully finished training courses in Angular and AWS.
            </li>
        </ul>

        <h3 className="title font-bold sm:text-left ">
            Techstart Co-Op at Liberty Mutual Insurance
        </h3>
        <h3 className="date sm:text-left ">
            2021
        </h3>
        <ul  className="text-sm text-center mb-3 sm:text-left"> 
            <li>
                Developed new components for the global internal homepage using React.
            </li>
            <li>
                Updated language flows and added new localizations to enable the homepage to be available in multiple languages.
            </li>
            <li>
                Collaborated with UX designers to mockup new page components.
            </li>
        </ul>

        <h3  className="title font-bold sm:text-left ">
            Techstart Co-Op at Liberty Mutual Insurance
        </h3>
        <h3 className="date sm:text-left ">
            2020
        </h3>
        <ul  className="text-sm text-center mb-3 sm:text-left"> 
            <li>
                Developed an online inventory website for video conferencing hardware using MEAN tech stack.
            </li>
            <li>
                Supported senior software engineers in creating an onboarding application to allocate user groups and software for new employees.
            </li>
            <li>
                Assisted in building and managing video conferencing endpoints, video streaming, and digital signage.
            </li>
        </ul>
    </div>
  );
};

export default Experience;
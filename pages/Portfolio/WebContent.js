
import React, { useState } from 'react';

export default function WebContent() {
  const industries = [
    {
      name: 'Education',
      projects: [
        {
          title: 'Project 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: 'project1.jpg',
        },
        {
          title: 'Project 2',
          description: 'Praesent ullamcorper aliquam odio, a iaculis nunc tempor in.',
          image: 'project2.jpg',
        },
      ],
    },
    {
      name: 'Beauty',
      projects: [
        {
          title: 'Project 3',
          description: 'Vestibulum fringilla, nisi et placerat rutrum, dolor ex faucibus tellus.',
          image: 'project3.jpg',
        },
      ],
    },

    {
        name: 'Real Estate',
        projects: [
          {
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'project1.jpg',
          },
          {
            title: 'Project 2',
            description: 'Praesent ullamcorper aliquam odio, a iaculis nunc tempor in.',
            image: 'project2.jpg',
          },
        ],
      },

      {
        name: 'Restaurants',
        projects: [
          {
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'project1.jpg',
          },
          {
            title: 'Project 2',
            description: 'Praesent ullamcorper aliquam odio, a iaculis nunc tempor in.',
            image: 'project2.jpg',
          },
        ],
      },

      {
        name: 'eCommerce',
        projects: [
          {
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'project1.jpg',
          },
          {
            title: 'Project 2',
            description: 'Praesent ullamcorper aliquam odio, a iaculis nunc tempor in.',
            image: 'project2.jpg',
          },
        ],
      },
    
    // ... add more industries and projects as needed
  ];

  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const handleIndustryClick = (industry) => {
    setSelectedIndustry(industry);
  };

  const handleProjectDetails = (project) => {
    // Handle project details, e.g., navigate to a project page
    console.log(`Viewing details of ${project.title}`);
  };

  return (
    <div>
      <h2>Web Industries</h2>
      <ul>
        {industries.map((industry) => (
          <li key={industry.name}>
            <button onClick={() => handleIndustryClick(industry)}>
              {industry.name}
            </button>
          </li>
        ))}
      </ul>
      {selectedIndustry && (
        <div>
          <h3>{selectedIndustry.name}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {selectedIndustry.projects.map((project) => (
            <div key={project.title} className="project-card" style={{ width: '300px', margin: '10px' }}>
              <img src={project.image} alt={project.title} />
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <button onClick={() => handleProjectDetails(project)}>
                Details
              </button>
            </div>
          ))}
        </div>
        </div>
      )}
    </div>
  );
}

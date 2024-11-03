// Function to get the license badge based on the chosen license
// If the license is 'MIT', it returns the corresponding badge; otherwise, it returns an empty string
export const getLicenseBadge = (license) => {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  return '';  
};

// Function to generate the Table of Contents section
// It maps over the sections array to create a markdown list with anchor links
export const generateTableOfContents = (sections) => {
  return sections.map(section => `- [${section}](#${section.toLowerCase()})`).join('\n');
};

// Default export function to generate markdown content for the README file
// It uses template literals to build the content based on the provided data
export default function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${getLicenseBadge(data.license)}  // Insert the license badge here if applicable
  
  ## Description
  ${data.description}  // User-provided description of the project
  
  ## Table of Contents
  ${generateTableOfContents(['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'])}  // Table of Contents with links
  
  ## Installation
  ${data.installation}  // Instructions on how to install the project
  
  ## Usage
  ${data.usage}  // Information on how to use the project
  
  ## License
  This project is licensed under the ${data.license} license.  // License information based on user input
  
  ## Contributing
  ${data.contributing}  // Guidelines for contributing to the project
  
  ## Tests
  ${data.tests}  // Instructions for testing the project
  
  ## Questions
  For any questions, please reach out to me at:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:${data.email})  // Contact information for further inquiries
  `;
}

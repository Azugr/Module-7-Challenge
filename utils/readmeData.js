export const getLicenseBadge = (license) => {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  return '';  
};

  export const generateTableOfContents = (sections) => {
    return sections.map(section => `- [${section}](#${section.toLowerCase()})`).join('\n');
  };
  
  // Default export for the entire markdown template
  export default function generateMarkdown(data) {
    return `
  # ${data.title}
  
  ${getLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  ${generateTableOfContents(['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'])}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  This project is licensed under the ${data.license} license.
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For any questions, please reach out to me at:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:${data.email})
  `;
  }
  
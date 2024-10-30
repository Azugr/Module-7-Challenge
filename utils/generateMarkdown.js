// Function that returns a license badge based on the license selected
// If there is no license, it returns an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return ''; // Return empty string if no license is chosen
  }
  // Return badge based on the selected license
  return `![License](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-brightgreen)`;
}

// Function that returns the license link for the README
// If there is no license, it returns an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') {
    return ''; // Return empty string if no license is chosen
  }
  // Define URLs for popular licenses
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPL 3.0': 'https://www.gnu.org/licenses/gpl-3.0.en.html',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause'
  };
  return licenseLinks[license] || ''; // Return the link or empty if not found
}

// Function that returns the license section for the README
// If there is no license, it returns an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return ''; // Return empty string if no license is chosen
  }
  // Generate license section content
  return `## License

This project is licensed under the ${license} license. More details can be found [here](${renderLicenseLink(license)}).
`;
}

// Main function to generate markdown content for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please reach out:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})

`;
}

// Export the generateMarkdown function as the default export
export default generateMarkdown;


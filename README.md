
# Professional README Generator

## Description

This command-line application helps developers quickly generate a professional README.md file for their projects by prompting them for specific details about the project. The application saves time and ensures that all necessary sections are included in the README.md, making it easy to maintain consistent and high-quality documentation.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Demo](#demo)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Azugr/Module-7-Challenge
   ```

2. Navigate into the project directory:
   ```bash
   cd Module-7-Challenge
   ```

3. Install the necessary npm packages:
   ```bash
   npm install
   ```

## Usage

To run the application, enter the following command in the terminal:

```bash
node index.js
```

The application will prompt you with a series of questions:

- **Project Title**: Enter the title of your project.
- **Description**: Provide a brief description of the project.
- **Installation**: Describe the installation process.
- **Usage**: Explain how to use the project.
- **License**: Choose a license from the provided options.
- **Contributing**: Describe how others can contribute to the project.
- **Tests**: Explain how users can test the project.
- **GitHub Username**: Enter your GitHub username for contact information.
- **Email Address**: Enter your email address for contact information.

The generated README.md file will be saved in the `output` folder as `GeneratedREADME.md`. Open the generated file to review the content and ensure all information is correct.

## User Story

As a developer,  
I want a README generator,  
So that I can quickly create a professional README for a new project.

## Acceptance Criteria

- **GIVEN** a command-line application that accepts user input  
- **WHEN** I am prompted for information about my application repository  
  - **THEN** a high-quality, professional README.md is generated with the project title, sections for Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions  
- **WHEN** I enter my project title  
  - **THEN** this is displayed as the title of the README  
- **WHEN** I enter a description, installation instructions, usage information, contribution guidelines, and test instructions  
  - **THEN** this information is added to the respective sections of the README  
- **WHEN** I choose a license for my application from a list of options  
  - **THEN** a badge for that license is added near the top of the README and a notice is included in the License section  
- **WHEN** I enter my GitHub username  
  - **THEN** this is added to the Questions section with a link to my GitHub profile  
- **WHEN** I enter my email address  
  - **THEN** this is added to the Questions section with instructions on how to reach me with additional questions  
- **WHEN** I click on the links in the Table of Contents  
  - **THEN** I am taken to the corresponding section of the README

## Demo

[Watch the video demonstration](https://drive.google.com/file/d/1yAIuJwu_N0oeMcjkt1ID7sHhy1MPWnM2/view?usp=drive_link)

## License

This project is licensed under the MIT License.

## Contributing

To contribute to this project:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add new feature'
   ```
4. Push the branch:
   ```bash
   git push origin feature-branch
   ```
5. Open a Pull Request.

## Questions

For any questions, please reach out:

- **GitHub**: [azugr](https://github.com/azugr)
- **Email**: [azugr@outlook.com](mailto:azugr@outlook.com)
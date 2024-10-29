Professional README Generator

License: MIT
Description

The Professional README Generator is a command-line application that helps developers quickly generate a professional and comprehensive README file for their projects. By following prompts, users can easily create a README file with essential sections, saving time and ensuring consistency in documentation.

Table of Contents

    User Story
    Acceptance Criteria
    Installation
    Usage
    File Structure
    License
    Contributing
    Questions

User Story

    AS A developer
    I WANT a README generator
    SO THAT I can quickly create a professional README for a new project

Acceptance Criteria

    GIVEN a command-line application that accepts user input
        WHEN prompted for information about the application repository
            THEN a high-quality, professional README.md is generated with essential sections: Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.
        WHEN the project title is entered
            THEN it is displayed as the README title.
        WHEN details such as description, installation, usage, contribution guidelines, and test instructions are provided
            THEN they are added to corresponding README sections.
        WHEN a license is selected
            THEN a badge and license notice are added to the README.
        WHEN GitHub username and email are entered
            THEN they appear in the Questions section with contact instructions.

1. Installation

    Clone the Repository:

    git clone https://github.com/Azugr/Module-7-Challenge.git

2. Navigate to the Project Directory:

    cd Module-7-Challenge

3. Install Dependencies: Run the following command to install the necessary packages, including inquirer:

    npm install

Usage

To generate a README:

    Run the application with:

        node index.js

    Follow the prompts to enter details about your project.
        
    Once completed, the generated README will be saved as GeneratedREADME.md in the output folder, or with the filename you specified.

Example Commands

To run the generator:
    node index.js

Example Prompts

    Title: "My Project"
    Description: "A tool for generating professional README files"
    Installation: "Run npm install"
    Usage: "Run node index.js"
    Contributing: "Submit pull requests"
    Tests: "Run npm test"
    License: "MIT"

File Structure

Module-7-Challenge/
│
├── index.js                 # Main file for running the application
├── package.json             # Project metadata and dependencies
├── utils/
│   ├── generateMarkdown.js  # Contains markdown generation logic
│   ├── questions.js         # Contains Inquirer prompt questions
├── output/                  # Folder where generated README files are saved
│   └── GeneratedREADME.md   # Example generated README file
└── README.md                # README for the README Generator tool

License

    This project is licensed under the MIT License. See the LICENSE file for details.

Contributing

    If you'd like to contribute to this project, please fork the repository and submit a pull request. All contributions are welcome!

Questions

For any questions or feedback, please reach out to:

    GitHub: Azugr
    Email: azugr@outlook.com
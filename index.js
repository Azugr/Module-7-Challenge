// Import necessary packages
import inquirer from 'inquirer'; // Package for handling user prompts
import * as fs from 'fs'; // Node.js File System module for reading and writing files
import generateMarkdown from './utils/generateMarkdown.js'; // Custom function to generate README content
import { questions } from './utils/questions.js'; // Import questions array from questions.js

// Function to write the README file
// It takes in the filename and generated markdown content as data
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(`Error writing file: ${err}`) : console.log('README.md generated successfully!')
  );
}

// Function to initialize the app
// It uses inquirer to prompt the user, generates the markdown content, and writes it to a file
function init() {
  inquirer.prompt(questions) // Start the inquirer prompt with the questions array
    .then((answers) => {
      // Pass user answers to generateMarkdown to create the README content
      const markdownContent = generateMarkdown(answers);
      // Call writeToFile to save the generated content to README.md
      writeToFile('README.md', markdownContent);
    })
    .catch((error) => {
      console.error(`Error during inquirer prompt: ${error}`);
    });
}

// Start the application by calling init
init();

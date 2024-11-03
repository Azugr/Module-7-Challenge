// Import necessary packages
import inquirer from 'inquirer'; // Inquirer package for handling interactive user prompts in the command line
import * as fs from 'fs'; // File System module from Node.js for reading and writing files
import generateMarkdown from './utils/generateMarkdown.js'; // Custom function to generate README content based on user input
import { questions } from './utils/questions.js'; // Array of questions for user input imported from questions.js

// Function to write the README file
// This function takes in a filename and data (markdown content) and writes it to a file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(`Error writing file: ${err}`) : console.log('README.md generated successfully!')
  );
}

// Function to initialize the application
// Uses inquirer to prompt the user with questions, generates the markdown content, and writes it to a file
function init() {
  inquirer.prompt(questions) // Prompt the user with questions from the questions array
    .then((answers) => {
      // Generate README content from user’s answers using generateMarkdown
      const markdownContent = generateMarkdown(answers);
      // Write the generated README content to a file in the specified directory
      writeToFile('output/GeneratedREADME.md', markdownContent);
    })
    .catch((error) => {
      console.error(`Error during inquirer prompt: ${error}`); // Handle any errors from the prompt
    });
}

// Start the application by calling the init function
init();

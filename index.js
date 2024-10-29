// Import the required packages
import inquirer from 'inquirer';
import * as fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
import { questions } from './utils/questions.js';

// Prompt the user for input
inquirer.prompt(questions).then((data) => {
  // Use the filename provided by the user, defaulting to 'GeneratedREADME.md'
  const filename = data.filename || 'GeneratedREADME.md';

  // Generate markdown content using the user's answers
  const markdownContent = generateMarkdown(data);

  // Write the file to the output folder
  fs.writeFile(`./output/${filename}`, markdownContent, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log(`${filename} generated successfully in the output folder!`);
    }
  });
});


import inquirer from 'inquirer';
import * as fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
import { questions } from './utils/questions.js';

inquirer.prompt(questions).then((data) => {
  const markdownContent = generateMarkdown(data);

  fs.writeFile('README.md', markdownContent, (err) =>
    err ? console.error(err) : console.log('README.md generated successfully!')
  );
});


export const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: input => input.length > 1 || 'Please enter a valid project title.',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project:',
    validate: input => input.length >= 10 || 'Please provide at least 10 characters for the description.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install the project?',
    validate: input => input.length >= 10 || 'Please provide a detailed installation instruction (at least 10 characters).',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use the project?',
    validate: input => input.length >= 10 || 'Please provide a detailed usage instruction (at least 10 characters).',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to the project?',
    validate: input => input.length >= 10 || 'Please describe how others can contribute (at least 10 characters).',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How can users test the project?',
    validate: input => input.length >= 10 || 'Please provide test instructions (at least 10 characters).',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
    validate: input => input.length > 1 || 'Please enter a valid GitHub username.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
    validate: input => /\S+@\S+\.\S+/.test(input) || 'Please enter a valid email address.',
  }
];

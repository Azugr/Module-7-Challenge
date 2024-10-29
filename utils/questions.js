export const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: input => input.length > 1 || 'Please enter at least 2 characters.',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project:',
    validate: input => input.length > 10 || 'Please enter a description of at least 10 characters.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install the project?',
    validate: input => input.length > 5 || 'Please provide more details about the installation.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use the project?',
    validate: input => input.length > 5 || 'Please provide more details on how to use the project.',
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
    validate: input => input.length > 5 || 'Please provide more information on how others can contribute.',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How can users test the project?',
    validate: input => input.length > 5 || 'Please provide more details on how to test the project.',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
    validate: input => input ? true : 'This field cannot be left blank.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
    validate: function (input) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return input && emailPattern.test(input) ? true : 'Please enter a valid email address.';
    },
  }
];

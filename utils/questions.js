// Array of questions for user input, defining the type, name, prompt message, and validation rules for each question
export const questions = [
  {
    type: 'input',  // Specifies an input text type for the user's response
    name: 'title',  // The key used to store the user's response
    message: 'What is the title of your project?',  // Prompt shown to the user
    validate: input => input.length > 1 || 'Please enter a valid project title.',  // Ensures the title is at least 2 characters long
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project:',
    validate: input => input.length >= 10 || 'Please provide at least 10 characters for the description.',  // Ensures a minimum length for a meaningful description
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install the project?',
    validate: input => input.length >= 10 || 'Please provide a detailed installation instruction (at least 10 characters).',  // Ensures installation steps are sufficiently detailed
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use the project?',
    validate: input => input.length >= 10 || 'Please provide a detailed usage instruction (at least 10 characters).',  // Ensures usage information is sufficiently detailed
  },
  {
    type: 'list',  // Specifies a list type allowing the user to select one option
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],  // License options for the project
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to the project?',
    validate: input => input.length >= 10 || 'Please describe how others can contribute (at least 10 characters).',  // Ensures contribution guidelines are detailed
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How can users test the project?',
    validate: input => input.length >= 10 || 'Please provide test instructions (at least 10 characters).',  // Ensures test instructions are provided in detail
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
    validate: input => input.length > 1 || 'Please enter a valid GitHub username.',  // Validates that GitHub username is more than one character
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
    validate: input => /\S+@\S+\.\S+/.test(input) || 'Please enter a valid email address.',  // Validates email format
  }
];

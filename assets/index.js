// require modules 
const fs = require('fs'); 
const inquirer = require('inquirer'); 

// This is where the ReadMe is made 
const generateReadMe = require('./output/generateMarkdown.js');

const UserQuestions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'projectTitle',
        message: "What is your project's title?",
      },
      {
        type: 'input',
        name: 'description',
        message: 'Write a brief description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How will users you use your project?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GNU', 'None'],
      },
      {
        type: 'input',
        name: 'tests',
        message: 'How do you run tests for your project?',
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
    ]);
  };
  
  module.exports = UserQuestions;
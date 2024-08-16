const fs = require('fs');
const inquirer = require('inquirer');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a short description of your project:',
  },
  {
    type: 'input',
    name: 'userstory',
    message: 'Enter your user stories:',
  },
  {
    type: 'input',
    name: 'instructions',
    message: 'Enter start instructions:',
  },
  {
    type: 'input',
    name: 'contributers',
    message: 'Enter the contributors to this project:',
  },

];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, 'utf8');
  console.log('README.md has been generated!');
}

// Function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## User Story
${answers.userstory}

## Instructions
${answers.instructions}

## Contributers
${answers.contributers}

`;
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error('Error generating README:', error);
    });
}

// Function call to initialize app
init();


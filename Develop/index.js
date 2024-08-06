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
    name: 'installation',
    message: 'Enter the installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage instructions:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Enter the license for your project:',
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

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
${answers.license}
`;
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error('Error generating README:', error);
    });
}

// Function call to initialize app
init();


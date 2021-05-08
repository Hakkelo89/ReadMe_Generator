// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` # Project Title 

  ![mit license](https://img.shields.io/badge/license-MIT-green) 
  
  ## Description
  
  Project description goes here 
  
  ## Table of Contents
  
    - [Project Title](#project-title-question-1---input)
    - [Description](#description)
    - [Table of Contents](#table-of-contents)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
  
  ## Installation
 
  ```
  npm install
  node index.js
  ```
  
  ## Usage
  
  - When the app is running answer all questions
  - After all questions view generated README markdown file
  
  ## License
  
  MIT License (question 2 - choices)
  
  ## Contributing
 
  Open an issue or a pull request and I will sort it.
  
  ## Tests

  There are no tests for this app
  
  ## Questions
  
  - View my [GitHub](https://github.com/Hakkelo89) profile
  - Email me at hakelcam@gmail.com 
  `;
}

module.exports = generateMarkdown;

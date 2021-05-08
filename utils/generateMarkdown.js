// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license !== "None") {
    return `
![${license} badge](https://img.shields.io/badge/license-${license}-green)
`;
  } else {
    return "";
  }
};

const getLicenseLink = (license) => {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
      break;
    case "APACHE_2.0":
      return "https://opensource.org/licenses/Apache-2.0";
      break;
    case "GPL_3.0":
      return "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "BSD_3":
      return "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "None":
      return "";
      break;
    default:
      return "";
      break;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//This function generate text based on input
const generateMarkdown = (data) => {
  const {
    title,
    badge,
    description,
    usage,
    installation,
    license,
    screenshot,
    altText,
    contributors,
    test,
    email,
    github,
  } = data;

  //Dynamically render GitHub profile URL
  const githubProfile = `https://github.com/${github}`;
  return `# ${title}
  ![${badge}](https://img.shields.io/badge/license-${badge}-green)
  
  ## Description
    ${description}
    
  ## Table of Contents
  - [Description](#Description)
  - [Usage](#Usage)
  - [Installation](#Installation)
  - [License](#License)
  - [Contributors](#Contributors)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
  ## Usage
    ${usage}
    
  ## Installation
    ${installation}
  
  ## License
    ${badge}
    ${license}
  
  ## Screenshot
   ![${altText}](${screenshot})

  ## Contributors
    ${contributors}
    
  ## Tests
    ${test}
    
  ## Questions
  If you have any questions regarding this app, please contact me via:
  - Email at ${email}
  - GitHub at <${githubProfile}>`;
};

module.exports = generateMarkdown;

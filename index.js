// TODO: Include packages needed for this application
//Required modules
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const createGeneratedFile = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Please Choose a file name",
    name: "filename",
  },

  {
    type: "list",
    message: "Please choose a file extension",
    name: "extension",
    choices: ["md", "txt"],
  },
  {
    type: "input",
    message: "Please type in the title of your project",
    name: "title",
  },

  {
    type: "list",
    message: "Please select a license",
    name: "badge",
    choices: ["Apache", "IBM", "MIT", "Peri", "No licence"],
  },

  {
    type: "input",
    message: "Please describe your application",
    name: "description",
  },

  {
    type: "input",
    message: "Please explain the usage of the application",
    name: "usage",
  },

  {
    type: "input",
    message: "Please type in the steps needed to install the application:",
    name: "installation",
  },

  {
    type: "input",
    message:
      "Please provide a description of the badge used for this application:",
    name: "license",
  },

  {
    type: "input",
    message:
      "If applicable, please type in all the contributors on this project:",
    name: "contributors",
  },

  {
    type: "input",
    message:
      "Please provide any test instructions. If not applicable, leave blank.",
    name: "test",
  },

  {
    type: "input",
    message: "Please provide your email address",
    name: "email",
  },

  {
    type: "input",
    message: "Please provide your GitHub username",
    name: "github",
  },
];
//This is function to user
const promptUser = () => inquirer.prompt(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// This will show user questions, collect to answers and generate readme file
const init = async () => {
  console.log(questions);
  try {
    const answers = await inquirer.prompt(questions);
    const generatedData = generatedMarkdown(answers);
    await createGeneratedFile(
      `${answers.filename}.${answers.extension}`,
      generatedData
    );
    console.log("File Generated!");
  } catch (err) {
    console.log(err);
  }
};

// Function call to initialize app
init();

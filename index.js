// TODO: Include packages needed for this application
//Required modules
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const writeToFile = require("./utils/writeToFile");

const getAnswers = async (questions) => {
  const answers = await inquirer.prompt(questions);
  return answers;
};

// TODO: Create an array of questions for user input
const init = async () => {
  const questions = [
    {
      type: "input",
      message: "Please type in the title of your project",
      name: "title",
    },

    {
      type: "list",
      message: "Please select a license",
      name: "badge",
      choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"],
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
        "Please please add a link of a screenshot that captures your working application:",
      name: "screenshot",
    },

    {
      type: "input",
      message: "Please type in the Alt-Text for the screenshot",
      name: "altText",
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
      validate: function (email) {
        // Regex mail check
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
          email
        );
      },
    },

    {
      type: "input",
      message: "Please provide your GitHub username",
      name: "github",
    },
    {
      message:
        "What would you like to name your README.md file? *** Only enter the file name, without the .md",
      name: "readme",
      default: "GENERATEDREADME",
    },
  ];

  //This is function to user
  answers = await getAnswers(questions);

  // user answers are passed to generateMarkdown fn and return value is stored
  const generatedMarkdown = generateMarkdown(answers);

  // TODO: Create a function to write README file
  writeToFile(answers.readme, generatedMarkdown);
};
// Function call to initialize app
init();

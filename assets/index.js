// require modules
const fs = require("fs");
const path = require("path"); // Import the 'path' module
const inquirer = require("inquirer");
const generateReadMe = require(path.resolve(__dirname, "../output/generatedReadMe.js"));

// This is where the ReadMe is made
const customFilePath = path.resolve(__dirname, "../output/README.md"); // Sets to the output folder

const UserQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project's title?",
      validate: (nameInput) =>
        nameInput ? true : "Please enter your project name!",
    },
    {
      type: "input",
      name: "description",
      message: "Write a brief description of your project:",
      validate: (nameInput) =>
        nameInput ? true : "Please enter a description!",
    },
    {
      type: "input",
      name: "installation",
      message: "How do you install your project?",
      validate: (nameInput) =>
        nameInput ? true : "Please enter how users will install the project!",
    },
    {
      type: "input",
      name: "usage",
      message: "How will users use your project?",
      validate: (nameInput) =>
        nameInput ? true : "Please enter a usage section!",
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license for your project:",
      choices: ["MIT", "Apache", "GNU", "None"],
      validate: (nameInput) => (nameInput ? true : "Please select a license!"),
    },
    {
      type: "input",
      name: "contributing",
      message: "How can others contribute to your project?",
      validate: (nameInput) =>
        nameInput ? true : "Please enter how others can contribute!",
    },
    {
      type: "input",
      name: "tests",
      message: "How do you run tests for your project?",
      validate: (nameInput) =>
        nameInput ? true : "Please enter how users will run tests!",
    },
    {
      type: "confirm",
      name: "includeScreenshot",
      message: "Would you like to include a screenshot? (Y/N)",
    },
    {
      // Only ask this question if includeScreenshot is true
      type: "input",
      name: "gifPath",
      message: "Please provide the file path or URL of the GIF:",
      when: (answers) => answers.includeScreenshot,
      default: "![Alt Text] (./assets/gif/your Gif here)",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
      validate: (nameInput) =>
        nameInput ? true : "Please enter your GitHub username!",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
      validate: (nameInput) => {
        const isValid = nameInput && nameInput.includes("@");
        return isValid ? true : "Please enter a valid email address!";
      },
    },
  ]);
};

module.exports = UserQuestions;

// function that creates README file using file system  FS
const writeReadMe = (data) => {
  fs.writeFile(customFilePath, data, (err) => {
    // if there is an error
    if (err) {
      console.log(err);
      return;
      // when the README has been created
    } else {
      console.log("Your README was successfully created!", customFilePath);
    }
  });
};

// Initilise
UserQuestions()
  // getting user answers
  .then((answers) => {
    return generateReadMe(answers);
  })
  // using data to display on page
  .then((data) => {
    writeReadMe(data);
  })
  // catching errors
  .catch((err) => {
    console.error("Error generating the README:", err);
  });

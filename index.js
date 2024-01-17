const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
   {
      type: "input",
      name: "title",
      message: "Enter the title of your project:",
   },
   {
      type: "input",
      name: "description",
      message: "Provide a short description of your project:",
   },
   {
      type: "input",
      name: "installation",
      message: "Enter installation instructions:",
   },
   {
      type: "input",
      name: "usage",
      message: "Enter usage information:",
   },
   {
      type: "list",
      name: "license",
      message: "Choose a license for your project:",
      choices: ["MIT", "Apache", "GPL", "ISC", "None"],
   },
   {
      type: "input",
      name: "contributing",
      message: "Enter contribution guidelines:",
   },
   {
      type: "input",
      name: "tests",
      message: "Enter test instructions:",
   },
   {
      type: "input",
      name: "github",
      message: "Enter your GitHub username:",
   },
   {
      type: "input",
      name: "email",
      message: "Enter your email address:",
   },
];

// function to write README file
function writeToFile(fileName, data) {
   fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
   inquirer
      .prompt(questions)
      .then((answers) => {
         // Generate README content using the external function
         const readmeContent = generateMarkdown(answers);

         // Create "output" folder if it doesn't exist
         const outputFolder = path.join(process.cwd(), "output");
         if (!fs.existsSync(outputFolder)) {
            fs.mkdirSync(outputFolder);
         }

         // Write to README.md file inside the "output" folder
         const outputPath = path.join(outputFolder, "README.md");
         writeToFile(outputPath, readmeContent);

         console.log('README.md file is successfully generated in the "output" folder!');
      })
      .catch((error) => {
         console.error("Error during inquirer prompts:", error);
      });
}

// function call to initialize program
init();

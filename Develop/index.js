const generateTheMarkdown = require('./utils/generateMarkdown.js');
const questions = require('./lib/questions.js');
const inquirer = require('inquirer');
const fs = require('fs');

//TODO: write a function to create a readme 
function writeToTheFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log('Error');
        } else {
            console.log("README Written Successfully");
        }
    });
}


// TODO: Include packages needed for this application
//(at the top)
// TODO: Create an array of questions for user input (NULL)

//Use inquirer prompt to get their readme details
function getTheUserInput() {
    inquirer.prompt(questions)
    .then((answersObj) => {
        const markdown = generateTheMarkdown(answersObj);

        writeToTheFile('./README.md', markdown);
    });
    
}


// TODO: Create a function to initialize app
function init() {
    //Start getting user input
    getTheUserInput();
}

// Function call to initialize app
init();

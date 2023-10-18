const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

//import the function using require. 
const questions = [
    {
        type: 'input',
        message: 'What is the title of your Challenge?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What are you creating in this Challenge?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please write the installation steps to this Challenge.',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Please give a description on the usage of this Challenge',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Any test you need to run for this challenge?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Which license did you use?',
        choices : ['MIT', 'Apache 2.0', 'Boost', 'N/A'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Any Contributors?',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Please type in your Git Hub username',
        name: 'gitHub',
    },
    
];

//The arguments is on the init functions. 
function writeToFile(fileName, data) {
  
    fs.writeFile(fileName, data, (err, res) => {
        if (err) throw err
        console.log('ReadMe has been created')
    })
}
//this function grabs the questions from the const question 
//array and then tells it to create a readme document reading
// the data from the generateMarkdown

function init() {
    inquirer.prompt(questions).then((data)=> {
       writeToFile('README.md', generateMarkdown(data))
    })
 
}

// Function call to initialize app
init();



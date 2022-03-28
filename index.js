// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateReadme = require('./src/readme-template');
const writeFile = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {    
  return inquirer.prompt([
  //TITLE
  {
  type: 'input',
  name: 'name',
  message: "What is your project's name? (Required)",
  validate: nameInput => {
      if (nameInput) {
      return true;
      } else {
      console.log('Please enter your project name!');
      return false;
      }
  }
  },
  //DESCRIPTION
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project (Required)',
    validate: nameInput => {
      if (nameInput) {
      return true;
      } else {
      console.log('Please enter a description');
      return false;
      }
    }
  },
  //INSTALLATION INSTRUCTIONS
  {
    type: 'input',
    name: 'install',
    message: 'Provide installation instructions (Required)',
    validate: nameInput => {
        if (nameInput) {
        return true;
      } else {
        console.log('Please enter installation instructions!');
        return false;
      }
    }
  },
//USAGE
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples of use (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please record the usage!');
        return false;
      }
    }
  },
//LICENSE
  {
    type: 'list',
    name: 'licenses',
    message: 'Which license would you like to use? (Check One)',
    choices: ['', 'MIT', 'GPLv3', 'AGPL']
  },
  //CREDITS
  {
    type: 'checkbox',
    name: 'credits',
    message: 'Include any credits',
    choices: ['Bootcamp Modules', ' Bootcamp Challenges', ' Bootcamp Projects', ' MDN', ' W3 Schools', ' Bootcamp TAs', ' Bootcamp Tutors', ' npm', ' Bootstrap', ' Materialize',]
  },
  {
    type: 'input',
    name: 'otherCredits',
    message: 'Provide additional credits here:',
    // when: ({ answers }) => {
    //   answers.credits.ForEach(element => {
    //   if (element === "Other") {
    //     return true;
    //   } else {
    //     console.log("hi");
    //   }
    // })
    // }
  },
  //CONTRIBUTIONS
  {
    type: 'input',
    name: 'contributions',
    message: 'Provide guidelines for contributions (Required)',
    validate: contributionInput => {
      if (contributionInput) {
      return true;
      } else {
      console.log('Please enter guidelines!');
      return false;
      }
    }
  },
    // TESTS
  {
    type: 'input',
    name: 'tests',
    message: 'Provide examples of how to run tests here:',
    validate: testInput => {
      if (testInput) {
        return true;
      } else {
        console.log("provide test examples here!")
        return false;
      }
    }
  },
  //QUESTIONS
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub Username',
    validate: usernameInput => {
      if (usernameInput) {
      return true;
      } else {
      console.log('Please enter your username!');
      return false;
      }
    }
  },
  // REMOVED BECAUSE THIS LINK CAN BE REPLACED USING THE PROJECT NAME AND THE GITHUB USERNAME. 
  //IF THE PROJECT NAME AND THE ROPOSITORY NAME ARE NOT THE SAME, UNCOMMENT THIS OUT AND ALTER THE README-TEMPLATE.
  // {
  //   type: 'input',
  //   name: 'repositoryLink',
  //   message: 'Enter the GitHub repository link to your project. (Required)',
  //   validate: repoInput => {
  //     if (repoInput) {
  //     return true;
  //     } else {
  //     console.log('Please enter your link!');
  //     return false;
  //     }
  //   }
  // },
  {
    type: 'input',
    name: 'deployedLink',
    message: 'Enter the deployed GitHub link to your project, if you have one.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please provide your email (Required)',
    validate: emailInput => {
      if (emailInput) {
      return true;
      } else {
      console.log('Please enter your email!');
      return false;
      }
    }
  },
  //EXTRAS
  // {
  //   type: 'confirm',
  //   name: 'confirmBadges',
  //   message: 'Would you like to include any badges?',
  //   default: false
  // },
  // {
  //   type: 'input',
  //   name: 'badges',
  //   message: 'Provide badges here:',
  //   when: ({ confirmAbout }) => {
  //     if (confirmAbout) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  // },
  // {
  //   type: 'confirm',
  //   name: 'confirmFeatures',
  //   message: 'Would you like to include any features?',
  //   default: false
  // },
  // {
  //   type: 'input',
  //   name: 'features',
  //   message: 'Provide features here:',
  //   when: ({ confirmAbout }) => {
  //     if (confirmAbout) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  // },
])
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();


questions()
  .then(portfolioData => {
    return generateReadme(portfolioData);
  })
  .then(pageHTML => {
    console.log(pageHTML);
    return writeFile(pageHTML);
  })
  .catch(err => {
    console.log(err);
  });

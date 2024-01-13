// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //Return a link in the markdown that scrolls down to header with the name of ## License
  return license ? '- [License](#license)' : '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //Return the license section of markdown
  return license ? `
  ## License
  
  license under the ${license} license
  `: '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answersObj) {
  return `
  # ${answersObj.title}
  ${renderLicenseBadge(answersObj.license)}
  ## Table of Contents
  ${renderLicenseLink(answersObj.license)}
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Description
  ${answersObj.description}
  ## Installation
  ${answersObj.installation}
  ## Usage
  ${answersObj.usage}
  ## Contributing
  ${answersObj.contributing}
  ## Tests
  ${answersObj.tests}
  ## Questions
  If you have any questions, feel free to reach out to me via email at ${answersObj.email}. You can also find more of my work on my [GitHub profile](https://github.com/${answersObj.github}).

  ${renderLicenseSection(answersObj.license)}
  `.trim();
}

module.exports = generateMarkdown;

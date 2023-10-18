function renderLicenseBadge(license) {
if(license === 'N/A'){
  return ''
}
return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/MIT)'`
}
//Gives user an N/A option that will return in empty string. Or else whichever the license the user chose the 
//badge will show on the top. 
function renderLicenseLink(license) {
  if(license === 'N/A'){
    return ''
  }
  return '- [License](#license)'
}
//This is for the table of content
function renderLicenseSection(license) {

  if(license === 'N/A'){
    return ''
  }
  return `## License
  
  Read about your license ${license}`
}
//The readme skeleton 
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description

  ${data.description}

  ## Table of Content 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Test](#test)
  ${renderLicenseLink(data.license)}
  - [Contributors](#contributors)
  - [GitHub](#github)
  
## Installation
${data.install}
## Usage 
${data.usage}
## Test
${data.test}

${renderLicenseSection(data.license)}
## Contributors
${data.contribute}
 ## Github 
Username: ${data.gitHub}
`;
}

module.exports = generateMarkdown;

function renderLicenseBadge(license) {
if(license === 'N/A'){
  return ''
}
return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/MIT)'`
}

function renderLicenseLink(license) {
  if(license === 'N/A'){
    return ''
  }
  return '- [License](#license)'
}

function renderLicenseSection(license) {

  if(license === 'N/A'){
    return ''
  }
  return `## License
  
  some stuff about this license ${license}`
}

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

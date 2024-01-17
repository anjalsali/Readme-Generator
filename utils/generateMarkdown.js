// Function to generate markdown for README
function generateMarkdown(data) {
   // Generate license badge based on user's choice
   const licenseBadge = data.license !== "None" ? `![License](https://img.shields.io/badge/license-${encodeURIComponent(data.license)}-brightgreen)` : "";

   return `
# ${data.title} ${licenseBadge}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license. See the [LICENSE](./LICENSE) file for details.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact me:

GitHub: [${data.github}](https://github.com/${data.github})

Email: ${data.email}
  `;
}

module.exports = generateMarkdown;

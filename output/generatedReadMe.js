const generateReadMe = data => {
    return `# ${data.title}
    ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)
    ![Inquirer Version](https://img.shields.io/badge/Inquirer-8.2.4-blue.svg)

    
    ## Description 
    ${data.description}
  
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * ${data.includeScreenshot ? "[Screenshot](#screenshot)" : ""}
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## Installation 
    ${data.installation}
  
    ## Usage 
    ${data.usage}


    ${data.includeScreenshot ? "## Screenshot\n![Alt Text] (" + data.gifPath + ")\n" : ""}
  
    ## License 
    This project is license under ${data.license}
  
    ## Contributing 
    ${data.contributing}
  
    ## Tests
    ${data.tests}
  
    ## Questions
    If you have any questions about this project, please contact me directly at ${data.email}. Feel free to view more of my projects at https://github.com/${data.github}.`;
  }
  
  
  // use for importing Markdown in index 
  module.exports = generateReadMe;
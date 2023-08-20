const generateReadMe = (data) => {
  return `# ${data.title}
![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)
![Inquirer Version](https://img.shields.io/badge/Inquirer-8.2.4-blue.svg)
![JavaScript Badge](https://img.shields.io/badge/JavaScript-100%25-yellow.svg)
![File System](https://img.shields.io/badge/File%20System-Implemented-green.svg)
    
## 📄 Description 
${data.description}

## 🪛 Technologies used 
<p><a href="https://nodejs.org/">Node.js</a></p>
<p><a href="https://www.npmjs.com/">NPM</a></p>
<p><a href="https://www.npmjs.com/package/express">Express.js</a></p>
<p><a href="https://www.npmjs.com/package/mysql2">MySQL2</a></p>
<p><a href="https://www.npmjs.com/package/sequelize">Sequelize</a></p>
<p><a href="https://www.npmjs.com/package/dotenv">dotenv</a></p>
<p><a href="https://heroku.com/">Heroku</a></p>
  
## 📓 Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* ${data.includeScreenshot ? "[Screenshot](#screenshot)" : ""}
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
## 🖥️ Installation 
 ${data.installation}
  
## 💬 Usage 
${data.usage}


${
  data.includeScreenshot
    ? "## 🖼️ Screenshot\n![Alt Text] (" + data.gifPath + ")\n"
    : ""
}

## 📹 Video
  
## ⚖️ License 
This project is licensed under ${data.license}
  
## 🤝 Contributing 
${data.contributing}
  
## 🛠️ Tests
${data.tests}
 
## ❔ Questions
If you have any questions about this project, please contact me directly at ${
    data.email
  }. Feel free to view more of my projects at https://github.com/${
    data.github
  }.`;
};

// use for importing Markdown in index
module.exports = generateReadMe;

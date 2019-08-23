const fs = require('fs');

class Project {
  constructor(project = {}) {
    Object.assign(this, project)
  }
}
fs.readdirSync(__dirname + "/Methods/").forEach((file) => {
  if (file != 'index.js') {
    let filename = file.replace('.js', '')
    Project.prototype[filename] = require(__dirname + "/Methods/" + filename)
  }
})

module.exports = Project
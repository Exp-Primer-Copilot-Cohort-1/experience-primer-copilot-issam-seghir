function skillsMember() {
  console.log('I am a member of the team')
}
function printName() {
    console.log('My name is GitHub Copilot');
}

const api = {
  skillsMember,
  printName
}

module.exports = api

// Path: index.js
// const api = require('./member')

api.skillsMember()
api.printName()

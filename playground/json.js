//required file system here
const fs = require('fs');

//created object originalNote
var originalNote = {
    title: "Some Title",
    body: "Some body"
};

//convert object to string
var originalNoteString = JSON.stringify(originalNote);

//create file called notes.json with contents of originalNoteString
fs.writeFileSync('notes.json', originalNoteString);

//read, parse, print the title
var noteString = fs.readFileSync('notes.json');

//changes string to an object
var note = JSON.parse(noteString)
console.log(typeof note);
console.log(note.title);
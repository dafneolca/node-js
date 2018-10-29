/*jshint esversion: 6 */

console.log("starting app.js");
//Require notes.js to get edit data with functions from user input
const notes = require('./notes.js');

//Require Yargs.argv to get user input in CLI
const yargs = require('yargs');
const argv = yargs.argv;
var command = argv._[0];

console.log('Command: ', command);

//Calls functions from notes.js, according to
if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note Created');
        notes.logNote(note);
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('Note not found.');
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved
        ? 'Note Removed'
        : 'Note was not removed / not found';
    console.log(message);
} else {
    console.log('command not recognized');
}

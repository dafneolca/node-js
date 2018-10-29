/*jshint esversion: 6 */
console.log('starting notes.js');
const fs = require('fs');

var fetchNotes = () => {
    //try catch. catches error if try is not executable
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    //new array that will contain values that already exist
    var duplicateNotes = notes.filter((note) => note.title === title);
    //adds notes to json file ONLY if notes are unique
    if (duplicateNotes.length === 0) {
        console.log("The note will be added.");
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(note));
        saveNotes(notes);
        return note;
    }
    else {
        console.log("Note is already in the file, and will not be added.");
    }
};

var getAll = () => {
    console.log('Listing all notes: ');
};

var getNote = (title) => {
    //1. fetching
    var notes = fetchNotes();
    //2. filtering
    var filteredNotes = notes.filter((note) => note.title === title);
    //3. return
    console.log('Reading note: ', filteredNotes);
    return filteredNotes[0];
};

var removeNote = (title) => {
    //fetch notes
    var notes = fetchNotes(); 

    //filter notes, removing the one with title
    var filteredNotes = notes.filter((note) => note.title !== title);

    // save new notes array
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};

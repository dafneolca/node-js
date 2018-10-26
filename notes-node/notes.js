console.log('starting notes.js');

// console.log(module);

// module.exports.addNote = () => {

// }

var addNote = (title, body) => {
    console.log('Adding note: ', title, body)
};

var getAll = () => {
    console.log('Listing all notes: ')
};

var getNote = (title) => {
    console.log('Reading note: ', title)
};

var removeNote = (title) => {
    console.log('Removing note: ', title)
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};

const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return loadNotes();
};

const addNote = (title, body) => {
    const notes = loadNotes();

    notes.push({title, body});

    saveNotes(notes);
};

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes);

    fs.writeFileSync('notes.json', notesJSON);
}

const loadNotes = () => {
    // Try to read the notes file, return an empty array on error
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

// JS lets you pass only the value if the key if key has the same name as the varible.
module.exports = { getNotes, addNote };
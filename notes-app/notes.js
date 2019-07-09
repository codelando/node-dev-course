const fs = require('fs');
const chalk = require('chalk');

const getNote = () => {

};

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicates = notes.filter(note => note.title === title);

    if (duplicates.length === 0) {
        notes.push({title, body});
        saveNotes(notes);
        console.log(chalk`{green.inverse New note added!}`);
    } else {
        console.log(chalk`{red.inverse Title already exists!}`);
    }
};

const removeNote = (title) => {
    const notes = loadNotes();

    const filteredNotes = notes.filter(note => note.title !== title);

    if (notes.length > filteredNotes.length) {
        saveNotes(filteredNotes);
        console.log(chalk`{green.inverse Note deleted!}`);
    } else {
        console.log(chalk`{yellow.inverse Title not found!}`);
    }
}

const listNotes = () => {
    const notes = loadNotes();
    
    console.log(chalk`{blue.inverse Your notes:}`);

    notes.forEach((note, index) => {
        console.log(chalk`{blue ${index + 1}. ${note.title}}`);
    });
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
module.exports = { getNotes, addNote, removeNote, listNotes };
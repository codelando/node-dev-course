// Core modules
const fs = require('fs');

// NPM
const chalk = require('chalk');
const yargs = require('yargs');

// My Files
const notes = require('./notes.js');

yargs.version('1.1.0');

// Add note command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
});

// Remove note command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

// List notes command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        notes.listNotes();
    }
});

// Read note command
yargs.command({
    command: 'read',
    describe: 'Reads a note',
    handler() {
        console.log('Reading the note');
    }
});

// Parse de arguments
yargs.parse();


// console.log(chalk`{underline Body}: ${body}`);
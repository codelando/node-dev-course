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
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
});

// Remove note command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note');
    }
});

// List notes command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        console.log('Listing all the notes');
    }
});

// Read note command
yargs.command({
    command: 'read',
    describe: 'Reads a note',
    handler: function () {
        console.log('Reading the note');
    }
});

// Parse de arguments
yargs.parse();

// console.log(chalk`{underline Title}: ${title}`);
// console.log(chalk`{underline Body}: ${body}`);
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const note = require('./note.js');

const argv = yargs.argv;
const command = argv._[0];


if (command === 'add') {
	var noteIsCreated = note.addNote(argv.title, argv.body);

	if (noteIsCreated) {
		console.log("\n==========Note was created==========");
		note.logNote(noteIsCreated);
	} else {
		console.log("Note could not be created");
	}

} 

else if (command === 'list') {
	note.getAllNotes();
}

else if (command === 'update') {
	note.updateNote();
}

else if (command === 'delete') {
	var noteRemoved = note.deleteNote(argv.title);
	var message = noteRemoved ? "Note was removed" : "Note not found";
	console.log(message);
}

else if (command === 'find') {
	var noteIsFound = note.getNoteByTitle(argv.title);

	if (noteIsFound) {
		console.log("\n==========Note was found==========");
		note.logNote(noteIsFound);
	} else {
		console.log("Note was not found");
	}
}

else {
	console.log('Command not recognised');
}




/*switch (command) {

	case "add":
		break;

	case "list":
		note.getAllNotes();
		break;

	case "update":
		note.updateNote();
		break;

	case "delete":
		var noteRemoved = note.deleteNote(argv.title);
		var message = noteRemoved ? "Note was removed" : "Note not found";
		console.log(message);
		break;

	case "find":
		let foundNote = note.getNoteByTitle(argv.title);
		if (foundNote) {
			console.log("Note was found");
			note.logNote(foundNote);
		} else {
			console.log("Note was not found");
		}
		break;

	default:
		console.log("Command was not recognised");
		break;
}*/
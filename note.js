const fs = require('fs');


var addNote = (title, body) => {

	var notes = fetchAllNotes();
	var note = {
		title,
		body
	};

	var duplicateNotes = notes.filter((note) => note.title === title);

	if(duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	} else {
		console.log("Note with title \'" + title + "\' already exist");
	}
}

var getAllNotes = () => {
	var notesParsed = [];

	try {
		var notesString = fs.readFileSync('notes-data.json');
		notesParsed.push(JSON.parse(notesString));
	} catch(e) {
		console.log(e);
	}

	console.log(notesParsed);
}

var updateNote = (title) => {

}

var deleteNote = (title) => {
	
	var notes = fetchAllNotes();
	var filteredNotes = notes.filter(note => note.title !== title);
	saveNotes(filteredNotes);

	return notes.length !== filteredNotes.length;
}

var getNoteByTitle = (title) => {
	var notes = fetchAllNotes();

	var filteredNote = notes.filter(note => note.title === title);

	if (filteredNote.length > 0) {
		return filteredNote[0];
	}
}


// Utility functions
var fetchAllNotes = () => {
	var notes = [];

	try {
		var storedData = fs.readFileSync('notes-data.json');
		notes = JSON.parse(storedData);
	} catch(e) {
		console.log(e);
	}

	return notes;
}

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var logNote = (note) => {
	console.log("\nTitle: " + note.title);
	console.log("Body: " + note.body);
}

// Exports
module.exports = {
	addNote,
	getAllNotes,
	updateNote,
	deleteNote,
	getNoteByTitle,
	logNote
}
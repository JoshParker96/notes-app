const fs = require('fs');


var originalNote = {
	title: "Secrets",
	body: "Does Josh have any secrets?"
}

var noteString = JSON.stringify(originalNote);

fs.writeFileSync("note.js", noteString);

var data = fs.readFileSync("note.js");

var noteParsed = JSON.parse(data);

console.log(typeof noteParsed);
console.log(noteParsed);


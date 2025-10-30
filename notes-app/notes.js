const chalk = require("chalk");
const fs = require("fs");
const getNotes = function () {
  return "Your notes...";
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  const removeDuplicateBook = notes.filter((item) => {
    return item.title !== title;
  });

  debugger;
  removeDuplicateBook.push({
    title: title,
    body: body,
  });
  fs.writeFileSync("notes.json", JSON.stringify(removeDuplicateBook));
  console.log(chalk.green("book added"));
};

const removeNotes = (title) => {
  const notes = loadNotes();
  const removeNote = notes.filter((item) => {
    return item.title !== title;
  });

  fs.writeFileSync("notes.json", JSON.stringify(removeNote));
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
};

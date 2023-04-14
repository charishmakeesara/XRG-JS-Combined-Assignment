// Structure of the Note:
// {id: 1, title: 'Note 1', body: 'This is note 1', author: 'John Doe'}

// Create Notes;

const notesArray = [];

const addNoteObj = {
  id: 1,
  title: 'Note 123',
  body: 'This is note 1',
  author: 'John Doe',
};

const toCreateNote = (noteObj) => {
  const hasSeen = {};
  for (const notesValues of notesArray) {
    hasSeen[notesValues.title] = true;
  }
  if (!hasSeen[noteObj.title]) {
    noteObj.id = new Date().valueOf();
    notesArray.push(noteObj);
  }
  return notesArray;
};

console.log(toCreateNote(addNoteObj));
// Read Notes

// Update Notes

// Delete Notes

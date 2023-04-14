// Structure of the Note:

const notes = [
  { id: 1, title: 'Note 1', body: 'This is note 1', author: 'John Doe' },
  { id: 2, title: 'Note 1', body: 'This is note 1', author: 'John Doe' },
  { id: 3, title: 'Note 1', body: 'This is note 1', author: 'John Doe' },
  { id: 4, title: 'Note 1', body: 'This is note 1', author: 'John Doe' },
];

// Create Notes
// {id: 1, title: 'Note 1', body: 'This is note 1', author: 'John Doe'}

const createNote = (noteObj) => {
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

// Read Notes
const readnote = (id) => {
  for (const note of notes) {
    if (note.id == id);
    {
      return note;
    }
  }
};

// Update Notes

// Delete Notes

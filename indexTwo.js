// Structure of the Note:
// {id: 1, title: 'Note 1', body: 'This is note 1', author: 'John Doe'}

const notes = [
  { id: 1, title: 'Note 1', body: 'This is note 1', author: 'John Doe' },
  { id: 2, title: 'Note 2', body: 'This is note 1', author: 'John Doe' },
  { id: 3, title: 'Note 3', body: 'This is note 1', author: 'John Doe' },
  { id: 4, title: 'Note 4', body: 'This is note 1', author: 'John Doe' },
];

// Create Notes

// Read Notes
const readNote = (id) => {
  for (const note of notes) {
    if (note.id == id) {
      return note;
    }
  }
};

console.log(readNote(3));

// Update Notes

// Delete Notes

// Structure of the Note:
// {id: 1, title: 'Note 1', body: 'This is note 1', author: 'John Doe'}

// Create Notes

// Read Notes

// Update Notes
const updateNote = (note) => {
  for (const curNote of notes) {
    if (curNote.id == note.id) {
      curNote.title = note.title;
      curNote.body = note.body;
      curNote.author = note.author;
    }
  }
  return notes;
};
// Delete Notes

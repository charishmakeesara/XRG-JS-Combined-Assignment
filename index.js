// Structure of the Note:
// {id: 1, title: 'Note 1', body: 'This is note 1', author: 'John Doe'}

// Create Notes

// Read Notes

// Update Notes

const notes = [
  { id: 1, title: 'Note 1', body: 'This is note 1', author: 'John Doe' },
  { id: 2, title: 'Note 2', body: 'This is note 2', author: 'John' },
  { id: 3, title: 'Note 3', body: 'This is note 3', author: 'Kon' },
  { id: 4, title: 'Note 3', body: 'This is note 3', author: 'Kon' },
];
// Delete Notes
const deletenote = (id) => {
  for (const note of notes) {
    if (note.id == id) {
      notes.splice(notes.indexOf(note), 1);
      break;
    }
  }
};
deletenote(1);

/*const readnote=(id)=>{
    for(const note of notes){
        if(note.id==id){
            return notes;
        }
    }
    readnote(1);
}*/

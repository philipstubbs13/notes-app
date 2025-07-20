import Note from "./Note";

// note list
const NoteList = ({ notes, deleteNote }) => {
  if (notes.length === 0) {
    return <p className="text-center text-gray-500">No Notes Yet</p>;
  }

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <Note note={note} deleteNote={deleteNote} key={note.id} />
      ))}
    </div>
  );
};

export default NoteList;

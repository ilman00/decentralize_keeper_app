import React, { useEffect, useState } from 'react';
import Header from './Components/header';
import Footer from './Components/footer';
import Note from './Components/Note';
import CreateArea from './Components/CreateArea';
import {dkeeper_backend} from "../../declarations/dkeeper_backend";


function App() {
  const [notes, setNotes] = useState([])

  function addNote(note){
    setNotes(prevValue =>{
      dkeeper_backend.createNote(note.title, note.content)
      return [note, ...prevValue]
    })
  }

  useEffect(()=>{
    console.log("use Effect Triggered");
    fetchData();
  }, []);

  async function fetchData(){
    const noteArray = await dkeeper_backend.readNotes();
    setNotes(noteArray);
  }

  function deleteNote(id){
    dkeeper_backend.deleteNote(id);
    setNotes(prevValue=>{
      return prevValue.filter((noteItem, index)=>{
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index)=>{
        return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>
      })}
      <Footer />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Header from "./Header";
import Footer from "../Footer";
import Notes from "../Notes";
import Card from "../Card";
import contacts from "../Contacts";
import notess from "./Notess";
import CreateArea from "./CreateArea";

function Createcard(contact){
    return (
    <Card
    key={contact.id}
    name={contact.name} 
    img={contact.img}
    tel={contact.tel}
    email={contact.email}
    />
    );
}

function createNotess(noteItem){
    return <Notes
    key={noteItem.key}
    title={noteItem.title}
    content={noteItem.content}
    />
}




function App() {

    const[notes,setNotes]=useState([]);

    function addNote(newNote){
        setNotes(prevNotes=>{
            return [...prevNotes,newNote];
        });

    }

    function deleteNote(id){
     setNotes(prevNotes =>{
        return prevNotes.filter((noteItem,index) =>{
            return index !== id;
        })
     })
    }
    return <div> 
    <Header />
    < CreateArea
    onAdd={addNote}/>

   {/* {notess.map(createNotess)} */}

    {/* <h1>card list</h1> */}

    {/* {contacts.map(Createcard)} */}
    {/* <Card 
    name={contacts[0].name}
    img={contacts[0].img}
    tel={contacts[0].tel}
    email={contacts[0].email}    
    />
     <Card 
    name={contacts[1].name}
    img={contacts[1].img}
    tel={contacts[1].tel}
    email={contacts[1].email}    
    />
     <Card 
    name={contacts[3].name}
    img={contacts[3].img}
    tel={contacts[3].tel}
    email={contacts[3].email}    
    />
     
     <Card 
    name={contacts[2].name}
    img={contacts[2].img}
    tel={contacts[2].tel}
    email={contacts[2].email}    
    /> */}
    
    {notes.map((noteItem,index) =>{
        return <Notes 
        key={index}
        id={index}
        title={noteItem.title} 
        content={noteItem.content}
        onDelete={deleteNote}
        />; 
    })}
    
    <Footer />
    </div>
}

export default App;
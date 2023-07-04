 
import './App.css';
import React ,{useState,useEffect} from 'react';
import Header from './components/Header'
import ContactCard from './components/ContactCard'
import ContactList from './components/ContactList'
import AddContact from './components/AddContact'

function App() {
  const [contacts,setContacts]=useState([]);
  const LOCAL_STORAGE_KEY="contacts";

  const addContactHandler=(contact)=>
  {
    console.log(contact);
    setContacts([...contacts,contact]);
  };

  // useEffect(()=>{
  //   const retriveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if(retriveContacts)setContacts(retriveContacts);
  // },[contacts]);

  useEffect(() => {
    
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));

  },[contacts]);
  
  return (
    
    <div className="ui container">
   <Header></Header>
   <AddContact addContactHandler ={addContactHandler}/>
   <ContactList contacts={contacts}/>

    </div>
  );
}

export default App;

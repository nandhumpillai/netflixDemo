import './App.css';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from './firebase/firebase';
import React, { useState, useEffect } from 'react';

function App() {

  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([]);
  //write data to firebase  
  const addTodo = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "todos"), {
        todo: todo,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  //read data from firebase
  const fetchPost = async () => {
    await getDocs(collection(db, "todos")).then(
      (querysnapshot) => {
        const myData = querysnapshot.docs.map((doc => {
          return (
            { ...doc.data() }
          )
        }))
        setTodos(myData);
        console.log(todos, myData)
      }
    )
  }

  useEffect(() => {
    fetchPost();
  }, [])

  return (
    <div className="App">
      <input type="text" placeholder="What do you have to do today?"
        onChange={(e) => setTodo(e.target.value)}>

      </input>

      <button type="submit" className="btn" onClick={addTodo}>submit</button>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react'; 
import { db } from './firebase';
import { doc, setDoc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';

const counterRef = doc(db, "counter", "main"); 
// creates a reference to a doc in firestore 

function FinalApp() {
  const [count, setCount] = useState(0);
   // count is the current number on the screen
   // setCount is how to updates the number/starts at 0

  useEffect(() => 
  {
    const loadCounter = async () => {
      const snapshot = await getDoc(counterRef);
      if (snapshot.exists()) {
        setCount(snapshot.data().value);
      }
    };
    loadCounter();
  }, []);
/*
loadCounter is an async function that: 
    - uses getDoc() to read the firestore doc
    - if the doc exists, it gets the stored value (snapshot.data().value)
    - udates the counter using setCount()
*/

  const createCounter = async () => 
  {
    await setDoc(counterRef, { value: 1 });
    setCount(1);
  };

  /* 
  setDoc()
    - it sets the document's data to: { value: 1 } — this means the counter will be saved as 1 in Firestore
    - this updates the counter on your website screen. React uses setCount() to show 1 right away, without needing to reload
  */


  const increaseCounter = async () => 
  {
    const updatedValue = count + 1;          
    // Takes the current number from React state (count) and adds 1

    await updateDoc(counterRef, { value: updatedValue });
    // updates only the value field of the document in Firestore
    // if value was 4, it now becomes 5

    setCount(updatedValue);
    // updates the number shown on your website immediately



  };


  const clearCounter = async () => 
  {
    await deleteDoc(counterRef);
    //Deletes the document /counter/main from Firestore completely
    //This means there is no counter value stored anymore

    setCount(0);
    //Resets the number on your screen to 0 (even though there’s nothing in the database now)


  };



  
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        width: "105vw",
    }}>
    <h1>Counter: {count}</h1>
    <div>
      <button onClick={createCounter}>Create</button>
      <button onClick={increaseCounter}>Update</button>
      <button onClick={clearCounter}>Delete</button>
    </div>
  </div>
);


}

export default FinalApp;
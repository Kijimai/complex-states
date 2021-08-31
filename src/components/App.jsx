import '../App.css';
import React, {useState} from 'react'

function App() {
  const [contact, setContact] = useState({
    fMame: "",
    lName: "",
    email: ""
  })

  function handleChange(e) {
    const { name, value } = e.target

    setContact(prevValue => {
      if(name === 'fName') {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        }
      } else if(name === 'lName') {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        }
      } else if(name === 'email') {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName ,
          email: value
        }
      }
    })
  }

  return (
    <div className="container">
      <h1>Hey there {contact.fName} {contact.lName}</h1>
      <p>Your email is: {contact.email}</p>
      <form>
        <input 
          onChange={handleChange} 
          name="fName" 
          type="text" 
          placeholder="First Name" 
          value={contact.fName}
        />
        <input 
          onChange={handleChange} 
          name="lName" 
          type="text" 
          placeholder="Last Name" 
          value={contact.lName}
        />
        <input 
          onChange={handleChange} 
          name="email" 
          type="email" 
          placeholder="Email" 
          value={contact.email}
        />
      </form>
    </div>
  );
}

export default App;

import { useState } from 'react';
import axios from 'axios';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [msg, setInput] = useState(''); // Renamed setinput to setInput for clarity

  const submit = async (e) => { // Declare the submit function correctly
    e.preventDefault(); // Correctly prevent the default form submission behavior

    try {
      await axios.post("http://localhost:5002/", {
        msg
      });
      setInput(''); // Clear the textarea after submission
    } catch (error) {
      console.log(error); // Log any errors
    }
  }

  return (
    <div className="App">
      <div className='mainGrid'>
        <div id='nav'></div>
        <div className='test'>
          <div className="card">
            <div id='chatbox'>
              <p>What do you want to practice?</p>
            </div>
            <form onSubmit={submit}> {/* Use onSubmit for the form */}
              <textarea
                id="inputBox"
                name="text"
                value={msg} // Link the textarea to the state
                onChange={(e) => setInput(e.target.value)} // Update state on change
                placeholder='What do you want to practice?'
              ></textarea>
              <input type="submit" value="Submit" /> {/* Corrected value to a string */}
            </form>            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

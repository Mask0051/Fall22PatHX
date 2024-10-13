import { useState } from 'react';
import axios from 'axios';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [msg, setInput] = useState(''); 

  const submit = async (e) => { 
    e.preventDefault(); 

    try {
      alert("submitted");
      await axios.post("http://localhost:5002/", {
        msg
      });
      setInput(''); 
    } catch (error) {
      console.log(error); 
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
            <form onSubmit={submit}> 
              <textarea
                id="inputBox"
                name="text"
                value={msg} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder='What do you want to practice?'
              ></textarea>
              <input type="submit" value="Submit" /> 
            </form>            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

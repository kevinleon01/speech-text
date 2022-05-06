import React, {useState, useEffect} from 'react';
import './App.css';
//import { speechTextRef } from './firebase';

const SpeechRecognition = 
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

function App() {
const [isListening, setIsListening] = useState(false)
const [rec, setRec] = useState(null)
const [savedRecs, setSavedRecs] = useState([])

useEffect(() => {
  const handleListen = () => {
    if(isListening) {
      mic.start()
      mic.onend = () => {
        console.log('continue..')
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {
        console.log('stopped mic on click')
      }
    }
    mic.onstart = () => {
      console.log('mics on')
    }
  
    mic.onresult = event => {
      const transcript = Array.from(event.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('')
      console.log(transcript)
      setRec(transcript) 
  
      mic.onerror = event => {
        console.log(event.error)
      }
    }
  }
  handleListen()
}, [isListening]) 



const handleSaveRec = () => {
  setSavedRecs([...savedRecs, rec])
  //speechTextRef.push(rec)
  setRec('')
}

  return (
    <>
    <h1>Voice to Text</h1>
    <div className="container">
      <div className="box">
          <h2>Current Recording</h2>
          {isListening ? <span>🎙️ MIC ON</span> : <span>🚫 MIC OFF</span>}
          <button onClick={handleSaveRec} disabled={!rec}> 
          Save Recording 
          </button>
          <button onClick={() => setIsListening(prevState => !prevState)}>
            Start/Stop
          </button>
          <p>{rec}</p>
      </div>
      <div className="box">
          <h2>Transcriptions</h2>
        {savedRecs.map(n => (
          <p key={n}>{n}</p> 
        ))}
      </div>
    </div>
  </>
  );
}

export default App;
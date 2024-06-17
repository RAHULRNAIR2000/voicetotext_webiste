import React, { useState, useEffect } from 'react';
import '../components/Voiceinput.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import Ripples from 'react-ripples';




const VoiceInput = () => {
  const [recognizedText, setRecognizedText] = useState('');
  const recognition = new window.webkitSpeechRecognition();

  useEffect(() => {
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join('');
      setRecognizedText(transcript);
    };

    recognition.onend = () => {
      recognition.start();
    };
  }, []);

  const startRecognition = () => {
    recognition.start();
  };

  return (
    <div className='container'>
        <h1>Speech-to-Text Example</h1>
        <div className='innerblock'>
        <Ripples
        color="blue"
        during={1000}
        onClick={startRecognition}

        style={{
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          outline: 'none',
        }}
      >
        <FontAwesomeIcon icon={faMicrophone} size="3x" color="#fff" />
      </Ripples>

      
       <p>Tap to Speak</p>
      <div className='outputtextblock'>

      <p>{recognizedText}</p>

      </div>
      </div>
    </div>
  );
};

export default VoiceInput;
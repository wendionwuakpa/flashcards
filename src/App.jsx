import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  words_deck = [
    {'Kedu?' : 'How at you?'}, 
    {'Kedu?' : 'How at you?'}, 
  ]

  return (
    <>
      <div className='header' style={{color: 'darkgreen'}}>
        <h1>
          Igbo Flashcards
        </h1>
      </div>
      <h2>
        How good is your Igbo? Learn some common words and phrases in Nigerian Igbo language and test your vocabulary! 
      </h2>
      <p>
        The number of cards in deck {}
      </p>
    </>
  )
}

export default App

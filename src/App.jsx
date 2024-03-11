import { useState } from 'react'
import Flashcard from './Components/Flashcard';
import './App.css'


const words_deck = [
  {'Kedu?' : 'How are you?'}, 
  {'Dalụ' : 'Well done, Keep it up'}, 
  {'Nnọọ' : 'Hello'},
  {'Imela' : 'Thank you'},
  {'Kachifo' : 'Goodbye'},
  {'Biko' : 'Please'},
  {'Ezigbo mmadu' : 'Good person'},
  {'Ndo' : 'Sorry'},
  {'Gini bu aha gi?' : 'What is your name?'},
  {'Aha m bu' : 'My name is'}
]

function App() {
  const [currIndex, setCurrIndex] = useState(0);
 
  const nextCard = () => {
   const randIndex = Math.floor(Math.random() * words_deck.length)
   setCurrIndex(randIndex);
  };

  return (
    <>
      <div className='header' style={{color: 'darkgreen'}}>
        <h1>
          Igbo Flashcards
        </h1>
      </div>
      <h2>
        How good is your Igbo? 
      </h2>
      <h3>Learn some common words and phrases in Nigerian Igbo language and test your vocabulary! </h3>
      <p>There are {words_deck.length} cards in deck</p>

      <Flashcard wordPair={words_deck[currIndex]}/>
      <button type='button' className='nextCard' onClick={nextCard}>
        Next Card 
        ⭢
      </button>
    </>
  );
}

export default App

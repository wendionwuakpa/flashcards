import { useState } from 'react'
import Flashcard from './Components/Flashcard';
import './App.css'


const words_deck = [
  {'Kedu?' : 'How are you?'}, 
  {'Dalu' : 'Well done, Keep it up'}, 
  {'Nnoo' : 'Hello'},
  {'Imela' : 'Thank you'},
  {'Kachifo' : 'Goodbye'},
  {'Biko' : 'Please'},
  {'Ezigbo mmadu' : 'Good person'},
  {'Ndo' : 'Sorry'},
  {'Gini bu aha gi?' : 'What is your name?'},
  {'Aha m bu' : 'My name is'}
]

function App() {
  const randStartIndex = Math.floor(Math.random() * words_deck.length)
  const [currIndex, setCurrIndex] = useState(randStartIndex);
  const [resetUserGuess, setResetGuess] = useState(false);

  let hasNext = currIndex < words_deck.length - 1;
  let hasPrev = currIndex > 0;

  const handleNextClick = () => {
    if(hasNext) { 
      setCurrIndex(currIndex + 1);
      setResetGuess(true);
    }
    
   };

  const handlePrevClick = () => {
    if(hasPrev) {
      setCurrIndex(currIndex -1);
      setResetGuess(true);
    }

    
   };

  const handleRandClick = () => {
    // this will not generate an index out of bounds
    // Math.rand() -> [0, 1) will always be < 1 
    // Math.floor() -> rounds in a downward direction 
      // Math.floor(5.99) = 5 
   const randIndex = Math.floor(Math.random() * words_deck.length) 
   console.log('This is the random card: ', randIndex)
   setCurrIndex(randIndex);
   setResetGuess(true);
  };

 

  return (
    <>
      <div className='header' style={{color: 'darkgreen'}}>
        <h1>Nigerian Language Flashcards</h1>
        <h2><i>How good is your Igbo? </i> </h2>
      </div>
      <h3>Learn some common words and phrases! </h3>
      <p>There are {words_deck.length} cards in deck</p>

   
      {/* Pass the resetUserGuess through flashcard because it sits in between in the tree*/}
      <Flashcard wordPair={words_deck[currIndex]} resetUserGuess={resetUserGuess} onResetDone={() => setResetGuess(false)}/>

      <div className='navButtons'>
        <button type='button' disabled={!hasPrev} className='prevCard' onClick={handlePrevClick}>←</button>
        <button type='button' className='randCard' onClick={handleRandClick}>🔀 </button>
        <button type='button' disabled={!hasNext} className='nextCard' onClick={handleNextClick}>→</button>
        
      </div>
      
    </>
  );
}

export default App

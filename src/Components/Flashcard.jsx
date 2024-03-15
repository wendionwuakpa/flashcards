import {useEffect, useState} from 'react';
import CardForm from './CardForm';

function Flashcard(props) {
    const [flip, setFlip] = useState(true);
    const wordPair = props.wordPair;
    const [igboWord] = Object.keys(wordPair);
    const [englishWord] = Object.values(wordPair);
    const [userHasGuessed, setUserHasGuessed] = useState(false);
  
    const handleGuessSubmit = () => {
      setUserHasGuessed(true);
      console.log('Has user guessed?', userHasGuessed);
    }

    const handleCardClick = () => {
      if(userHasGuessed) {
        setFlip(!flip);
      }
    }

    // Listnes to when the userGuess has been reset and toggles the userHasGuessed state
    useEffect(() => {
      if (props.resetUserGuess) {
        setUserHasGuessed(false);
        props.onResetDone();
      }
    }, [props.resetUserGuess, props.onResetDone]);

    return (
      <>
        <div className={`card ${flip ? 'flip' : ''}`} onClick={handleCardClick}>
          <div className="card-back">{englishWord}</div>
          <div className="card-front">{igboWord}</div>
        </div>
        <CardForm nigerianWord={igboWord} 
        eng = {englishWord} 
        onGuessSubmit={handleGuessSubmit}
        resetUserGuess = {props.resetUserGuess}
        onResetDone = {props.onResetDone}
        />
      </>
        
      );
}

export default Flashcard;
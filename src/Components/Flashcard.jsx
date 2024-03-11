import React, {useState} from 'react';

function Flashcard({wordPair}) {
    const [flip, setFlip] = useState(false);
    const [igboWord] = Object.keys(wordPair);
    const [englishWord] = Object.values(wordPair);

    return (
        <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
          <div className="card-front">
            {igboWord}
          </div>
          <div className="card-back">
            {englishWord}
          </div>
        </div>
      );
}

export default Flashcard;
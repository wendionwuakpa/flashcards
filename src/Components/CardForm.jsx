import { useState, useEffect } from "react";

function CardForm(props) {
    const [wordTyped, setWordTyped] = useState('');
    const [feedback, setFeedback] = useState(null);

    // useEffect fires on every re-render of the DOM
    // Be careful not to trigger state changes in the useEffect to avoid continuous loops of re-renderingf
    useEffect(() => {
        if(props.resetUserGuess) {
            setWordTyped('');
            setFeedback('');
            //Notify the parent Flashcard component that the word has been reset. Sets reset back to false
            props.onResetDone();
            !props.onGuessSubmit();
        }
    }, [props.resetUserGuess, props.onResetDone]);

    const handleTyping = (e) => {
        setFeedback(null);
        setWordTyped(e.target.value);
    }

    const checkAnswer = (e) => {
        e.preventDefault();
        if(wordTyped != "") {
            if(wordTyped.toLowerCase().replaceAll(" ", "").replace( /[^a-zA-Z ]/g, '').replace( /\s\s+/g, '' )
         === 
        props.nigerianWord.toLowerCase().replaceAll(" ", "").replace( /[^a-zA-Z ]/g, '').replace( /\s\s+/g, '' )) {
            console.log('Correct');
            setFeedback(<p style={{color: 'green'}}> Great Job!</p>);
        } else {
            console.log('Wrong', '\n Typed: ', wordTyped, '\n Answer: ', props.nigerianWord);
            setFeedback(<p style={{color: 'red'}}> Try Again</p>);
        }

        // Notify Flashcard component that a guess has been made 
        props.onGuessSubmit();
        setWordTyped(' ');

        }
        
    }

    return (
        <>
        <form onSubmit={checkAnswer}>
            <div className='userInput'>
            What does this word mean?<br></br> 
            <input type='text' value = {wordTyped} name= 'translation'onChange={handleTyping}/> 
        </div>
        <br></br> 
            <button type="submit" style={{color: 'blue'}}> Check Answer</button>
        </form>
        {feedback}
        
        </>
    )

}


export default CardForm; 
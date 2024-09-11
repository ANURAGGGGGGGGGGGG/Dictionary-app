import React, { useState } from 'react'
import axios from 'axios'

const Dictionary = () => {
    const [words, setWord] = useState();
    const [text, setText] = useState();
    const [partOfSpeechs, setpartofspeech] = useState();
    const [definitions, setDefinitions] = useState();
    const handleClick = () => {
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`)
            .then((res) => {
                setWord(res.data[0].word)
                setpartofspeech(res.data[0].meanings[0].partOfSpeech)
                setDefinitions(res.data[0].meanings[0].definitions[0].definition)
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <div className='container'>
                <h1>Free Dictionary</h1>
                <div className='text'>
                    <input type="text" onChange={(e) => setText(e.target.value)} />
                    <button onClick={handleClick}>🔍</button>
                </div>
                <div className='define'>
                    <h3>{words}</h3>
                    <h4>Parts of Speech</h4>
                    <p>{partOfSpeechs}</p>
                    <h4>Definition</h4>
                    <p>{definitions}</p>
                </div>
            </div>
        </>
    )
}

export default Dictionary

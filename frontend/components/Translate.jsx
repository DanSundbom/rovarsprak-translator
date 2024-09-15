import React, {useState} from 'react'

const Translate = () => {

    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');

    const handleTranslate = async () => {
        const response = await fetch('http://localhost:4000/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: inputText }),
        });

        const data = await response.json();
        setTranslatedText(data.translated);
    };

  return (
    <> 
        <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleTranslate}>
            Översätt
        </button>
        {translatedText && (
            <input type="text"
                   value={translatedText}
                   readOnly          
            />
        )}
    </>
  )
}

export default Translate

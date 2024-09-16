import React, {useState, useEffect, useRef} from 'react'

const Translate = () => {

    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const textareaRef = useRef(null);
    const translateDescriptor = "Översättning:"

    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
          textareaRef.current.style.height = 'auto';
          textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    };

    useEffect(() => {
        adjustTextareaHeight();
      }, [translatedText]);

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
        <textarea
            ref={textareaRef}
            value={`${translateDescriptor}\n${translatedText}`}
            rows={1}
            readOnly          
        />
    </>
  )
}

export default Translate

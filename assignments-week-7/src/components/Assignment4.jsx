import React, { useState } from 'react';

const Assignment4 = () => {
    const [numWords, setNumWords] = useState('');
    const [paragraph, setParagraph] = useState('');

    const handleGenerateParagraph = () => {
        if (!numWords || isNaN(numWords) || numWords <= 0) {
            alert('Please enter a valid number of words.');
            return;
        }

        const words = [
            "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur",
            "adipiscing", "elit", "sed", "do", "eiusmod", "tempor",
            "incididunt", "ut", "labore", "et", "dolore", "magna",
            "aliqua", "Ut", "enim", "ad", "minim", "veniam", "quis",
            "nostrud", "exercitation", "ullamco", "laboris", "nisi",
            "ut", "aliquip", "ex", "ea", "commodo", "consequat",
            "Duis", "aute", "irure", "dolor", "in", "reprehenderit",
            "in", "voluptate", "velit", "esse", "cillum", "dolore",
            "eu", "fugiat", "nulla", "pariatur", "Excepteur", "sint",
            "occaecat", "cupidatat", "non", "proident", "sunt", "in",
            "culpa", "qui", "officia", "deserunt", "mollit", "anim",
            "id", "est", "laborum"
        ];

        let generatedParagraph = '';
        for (let i = 0; i < numWords; i++) {
            const wordIndex = Math.floor(Math.random() * words.length);
            const word = words[wordIndex];
            generatedParagraph += word + ' ';
        }
        setParagraph(generatedParagraph.trim());
    };

    const handleNumWordsChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setNumWords(value);
    };

    return (
        <div className='flex flex-col justify-start items-center h-screen p-5 max-w-[720px] mx-auto'>
            <h1 className='text-2xl font-bold'>Paragraph Generator</h1>
            <div className='flex justify-center items-center gap-3 my-2'>
                <div className='border border-gray-300 h-[40px] w-[500px]'>
                    <input htmlFor="numWords"
                        type="text"
                        id="numWords"
                        value={numWords}
                        placeholder='Enter number of words'
                        onChange={handleNumWordsChange}
                        className='w-full h-full px-2 outline-none'
                    />
                </div>
                <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-indigo-700"
                    onClick={handleGenerateParagraph}>Generate</button>
            </div>
            <p className="mt-4 text-gray-800">{paragraph}</p>
        </div>
    );
};

export default Assignment4;
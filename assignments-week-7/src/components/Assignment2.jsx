import React, { useMemo, useState } from 'react';

const Assignment2 = () => {
    const [backgroundColor, setBackgroundColor] = useState('white');

    const buttons = useMemo(() => [
        {
            id: 1,
            color: 'red-600',
            text: 'Red'
        },
        {
            id: 2,
            color: 'yellow-600',
            text: 'Yellow'
        },
        {
            id: 3,
            color: 'green-600',
            text: 'Green'
        },
        {
            id: 4,
            color: 'blue-600',
            text: 'Blue'
        },
        {
            id: 5,
            color: 'purple-600',
            text: 'Purple'
        },
        {
            id: 6,
            color: 'black',
            text: 'Black'
        },
        {
            id: 7,
            color: 'orange-600',
            text: 'Default'
        },
    ], []);

    const handleClick = (color) => {
        setBackgroundColor(color);
    };

    return (
        <div className={`flex justify-center items-center h-screen bg-${backgroundColor}`}>
            <div className='shadow-lg p-2 rounded-lg flex gap-1 bg-white'>
                {
                    buttons.map((button) => (
                        <button key={button.id} className={`bg-${button.color} ${button.color === 'black' ? 'text-white' : 'text-black'} rounded-lg p-2 w-24`}
                            onClick={() => handleClick(button.color)}>{button.text}</button>
                    ))
                }
            </div>
        </div>
    );
};

export default Assignment2;

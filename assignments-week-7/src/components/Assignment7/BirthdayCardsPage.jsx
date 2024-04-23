import React from 'react';
import { useLocation } from 'react-router-dom';

const BirthdayCardsPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name');
    let img = "https://img.freepik.com/free-photo/orange-flowers-oil-paint-textured-background_53876-125221.jpg?size=626&ext=jpg&ga=GA1.1.2025171469.1707503533&semt=ais"

    const birthdayWishes = [
        {
            id: 1,
            message: `Happy Birthday, ${name}! Wishing you a day filled with joy and laughter.`,
            image: 'https://www.shutterstock.com/image-vector/birthday-balloons-vector-background-design-600nw-2003677130.jpg',
        },
        {
            id: 2,
            message: `Wishing you a fantastic birthday, ${name}! May all your dreams come true.`,
            image: 'https://images.unsplash.com/photo-1583875762487-5f8f7c718d14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlydGhkYXklMjBjYXJkfGVufDB8fDB8fHww',
        },
        {
            id: 3,
            message: `Sending you warm birthday wishes, ${name}! May your day be as special as you are.`,
            image: 'https://images.unsplash.com/photo-1562804698-732e972e46e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlydGhkYXklMjBjYXJkfGVufDB8fDB8fHww',
        },
    ];
    return (
        <div className={`min-h-screen flex flex-col justify-center items-center bg-[url('${img}')] p-5`}>
            <h1 className="text-4xl font-bold mb-8">Birthday Wishes for {name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {birthdayWishes.map(wish => (
                    <div key={wish.id} className="bg-white rounded-lg shadow-lg">
                        <img src={wish.image} alt={`Birthday wish ${wish.id}`} className="w-full h-64 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <p className="text-lg font-semibold mb-2">{wish.message}</p>
                            <p className="text-gray-600 text-sm">From: Anmol</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BirthdayCardsPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Assignment7 = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    let img = "https://img.freepik.com/free-photo/orange-flowers-oil-paint-textured-background_53876-125221.jpg?size=626&ext=jpg&ga=GA1.1.2025171469.1707503533&semt=ais"

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = () => {
        navigate(`/birthday-cards?name=${encodeURIComponent(name)}`);
    };

    return (
        <div className={`min-h-screen flex flex-col justify-center items-center bg-[url('${img}')]`}>
            <h1 className="text-4xl font-bold mb-8">Welcome to Birthday Wishes!</h1>
            <div className="max-w-lg p-4 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Enter the name of the person:</h2>
                <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
                    placeholder="Enter Name"
                />
                <button
                    onClick={handleSubmit}
                    className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                    Go to Birthday Cards
                </button>
            </div>
        </div>
    );
};

export default Assignment7;

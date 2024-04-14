import React, { useState, useEffect } from 'react';
import { BusinessCard } from './components/BusinessCard';
import axios from 'axios';

const App = () => {
  const [cards, setCards] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    linkedin: '',
    twitter: '',
    otherSocialMedia: '',
    interests: [],
  });

  useEffect(() => {
    // Fetch existing cards data from the API
    fetch('http://localhost:5000/api/cards')
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error('Error fetching cards:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInterestChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, interests: value.split(',') });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Add the new card to the state
        const newCard = await response.json();
        setCards([...cards, newCard]);
        // Clear the form data
        setFormData({
          name: '',
          description: '',
          linkedin: '',
          twitter: '',
          otherSocialMedia: '',
          interests: [],
        });
      } else {
        console.error('Failed to add card:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding card:', error);
    }
  };

  return (
    <div>
      <h1>Business Cards</h1>
      <div>
        <h2>Add a New Card</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          <br />
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required />
          <br />
          <label>LinkedIn:</label>
          <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} />
          <br />
          <label>Twitter:</label>
          <input type="text" name="twitter" value={formData.twitter} onChange={handleChange} />
          <br />
          <label>Other Social Media:</label>
          <input type="text" name="otherSocialMedia" value={formData.otherSocialMedia} onChange={handleChange} />
          <br />
          <label>Interests (comma-separated):</label>
          <input type="text" name="interests" value={formData.interests} onChange={handleInterestChange} />
          <br />
          <button type="submit">Add Card</button>
        </form>
      </div>
      <hr />
      <div>
        <h2>Existing Cards</h2>
        {cards.length === 0 && <p>No cards found.</p>}
        {cards.map(card => (
          <BusinessCard
            key={card._id}
            name={card.name}
            description={card.description}
            interests={card.interests}
            linkedin={card.linkedin}
            twitter={card.twitter}
            otherSocialMedia={card.otherSocialMedia}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

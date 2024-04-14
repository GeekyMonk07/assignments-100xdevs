const Card = require('../models/Card');

exports.getAllCards = async (req, res) => {
    try {
        const cards = await Card.find({});
        if(!cards) res.status(404).json({ message: 'No cards found' });
        res.json(cards);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createCard = async (req, res) => {
    const card = new Card(req.body);
    try {
        const newCard = await card.save();
        res.status(201).json(newCard);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


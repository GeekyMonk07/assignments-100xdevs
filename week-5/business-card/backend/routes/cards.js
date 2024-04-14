const express = require('express');
const router = express.Router();
const cardsController = require('../controllers/cardsController');

router.get('/', cardsController.getAllCards);
router.post('/', cardsController.createCard);

module.exports = router;

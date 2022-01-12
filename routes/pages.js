const express = require('express');
const path = require('path');

const pagesRouter = express.Router();

pagesRouter.get('/', (req, res) => {
	res.render('home');
})

pagesRouter.get('/about', (req, res) => {
	res.render('about');
});

module.exports = pagesRouter;
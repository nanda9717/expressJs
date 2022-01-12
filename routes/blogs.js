const express = require('express');
const path = require('path');

const blogsRouter = express.Router();

const blogData = require('../data/blogData');

blogsRouter.get('/', (req, res) => {
	res.render('blogs',{blogs: blogData});
});

blogsRouter.get('/detail/:slug', (req, res) => {
	const blog = blogData.filter((row) => {
		return row.slug == req.params.slug
	});
	res.render('blog_detail', {title : blog[0].title, description: blog[0].description});
});

module.exports = blogsRouter;
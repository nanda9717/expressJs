const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const { pagesRouter, blogsRouter } = require('./routes/index');

app.use('/', pagesRouter);
app.use('/blogs', blogsRouter);


app.listen(port, ()=>{
	console.log(`Server Running at ${port}`);
});


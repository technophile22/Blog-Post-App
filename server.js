const express = require('express');
const mongoose = require('mongoose');
const postRouter = require('./routes/posts')
const app = express()

mongoose.connect('mongodb://localhost:27017/blog-post-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended : false }))

//Home route (posts/index)
app.get('/', function(req, res){
    const posts = [{
        title: 'test post 1 ',
        createdAt: new Date(),
        description: 'Test Description'
    },
    {
        title: 'test post 2 ',
        createdAt: new Date(),
        description: 'Test Description'
    }]
    res.render('posts/index', {posts : posts });
});

app.use('/posts', postRouter);

app.listen(5000);

const express = require('express');
const postRouter = require('./routes/posts')
const app = express()

app.set('view engine', 'ejs');

app.use('/posts', postRouter)

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

app.listen(5000);

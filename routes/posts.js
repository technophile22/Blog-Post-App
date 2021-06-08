const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('posts/new');
});

//post method for new article
router.post('/', (req, res) => {
    
})
module.exports = router;
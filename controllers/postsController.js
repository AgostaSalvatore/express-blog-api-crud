//recupero i post 
const posts = require('../data/posts.js');

//index
function index(req,res){
    res.json(posts);
}
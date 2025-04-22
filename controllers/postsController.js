//recupero i post 
const posts = require('../data/posts.js');

//index
function index(req,res){
    res.json(posts);
};

//show
function show(req,res){
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    if (post) {
        res.json(post);
    }
    else{
        //importo lo stato
        res.status(404);
        return res.json({
            message: `posts numero ${req.params.id} non trovato`
        });
    }
}

//store
function store(req,res){
    res.send('Inserimento nuovo post')
};

//update
function update(req,res){
    res.send(`Modifica totale del post ${req.params.id}`);
};

//modify
function modify (req,res){
    res.send(`Modifica Parziale del post ${req.params.id}`)
}

//destroy
function destroy(req,res){
    res.send(`Eliminazione del post ${req.params.id}`)
}

module.exports={index,show,store,update,modify,destroy}
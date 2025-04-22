//recupero i post 
const posts = require('../data/posts.js');

//index
function index(req,res){
    res.json(posts);
};

//show
function show(req,res){
    res.json(`mostra post ${req.params.id}`);
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

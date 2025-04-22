//recupero i post 
const posts = require('../data/posts.js');

//index
function index(req,res){
    //res.json(posts);

    //filtraggio: uso delle query string
    const postTitle = req.query.title;

    //definizione della varibila che contiene il post filtrato
    let filteredPost = posts;

    //controllo
    if(postTitle){
        filteredPost = posts.filter((post) =>{
            return post.title.toLowerCase().includes(postTitle.toLowerCase());
        })
    }

    res.json(filteredPost);
};

//show
function show(req,res){
    //recupero l'id del post
    const id = parseInt(req.params.id);

    //
    const post = posts.find(p => p.id === id);

    //controllo
    if (post) {
        res.json(post);
    }
    else{
        //importo lo stato
        res.status(404);

        //messaggio di ritorno per l'utente
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
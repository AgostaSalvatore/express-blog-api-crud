//recupero i post 
const posts = require('../data/posts.js');

//index
function index(req,res){
    //res.json(posts);

    //filtraggio: uso delle query string
    const postTag = req.query.tag;

    //definizione della varibila che contiene il post filtrato
    let filteredPost = posts;

    //controllo
    if(postTag){
        filteredPost = posts.filter((post) => post.tags.includes(postTag));

        if(filteredPost.length===0){
            res.status(404);
            return res.json({
                message: `Nessun post trovato con il tag ${postTag}`
            });
        }
    }

    res.json(filteredPost);
}

//show
function show(req,res){
    //recupero l'id del post
    const id = parseInt(req.params.id);

    //
    const post = posts.find(post => post.id === id);

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
    //res.send('Inserimento nuovo post')
    
    //recupero il body della richiesta
    console.log(req.body);
    
    
}

//update
function update(req,res){
    res.send(`Modifica totale del post ${req.params.id}`);
}


//modify
function modify (req,res){
    res.send(`Modifica Parziale del post ${req.params.id}`)
}

//destroy
function destroy(req,res){
    //res.send(`Eliminazione del post ${req.params.id}`)

    //recupero il valore del parametro dinamico
    const id = parseInt(req.params.id);

    //vado a recuperare l'elemento trovato dall'array
    const post = posts.find(p => p.id === id);

    //vado ad eliminare l'elemento trovato dall'array
    posts.splice(posts.indexOf(post), 1);

    //restituisco la pizza
    res.json(post);
    
    //per debug
    console.log(posts); 

    res.sendStatus(200);

    // res.json({
    //     success: true,
    //     message: "Post eliminato con successo"
    // })
}

module.exports={index,show,store,update,modify,destroy}
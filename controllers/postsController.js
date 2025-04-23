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
    
    //definizione dell'id dell'elemento da inserire
    const newId = posts[posts.length - 1].id + 1;
    
    //creazione dell'oggetto da inserire
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };
    
    //inserimento dell'oggetto nell'array
    posts.push(newPost);
    
    //restituisco la lista aggiornata
    res.json(posts);

}

//update
function update(req,res){
    //res.send(`Modifica totale del post ${req.params.id}`);
    
    //recupero il valore del parametro dinamico
    const id = parseInt(req.params.id);
    
    //vado a recuperare il post
    const post = posts.find(post => post.id === id);

    //recupero il body della richiesta
    console.log(req.body);
    
    //modifico il post
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    //restituisco il post modificato
    res.json(post);
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
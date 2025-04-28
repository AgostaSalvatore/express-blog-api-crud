//importo express
const express  = require('express');

//inizializzo express
const app = express();

//inizializzo la porta
const port = 3000;

//importo gli assets statici
app.use(express.static('public'));

//importo i middleware
const errorsHandler = require('./middlewares/errorsHandler.js');
const notFound = require('./middlewares/notFound.js');

//indico ad express di trattare i body come json
app.use(express.json());

//importo il router
const postsRouter = require('./router/postsRouter.js');

//vado ad utilizzare postsRouter per creare le rotte
app.use('/posts', postsRouter);

//home
app.get('/', (req,res) =>{
    res.send('Blog con vari post');
});

//middleware per la gestione degli errori
app.use(errorsHandler);

//middleware per la gestione delle rotte non registrate
app.use(notFound);


//inizializzo il listen del server sulla porta 3000
app.listen(port, ()=>{
    console.log(`server listening on port ${port}`);
})
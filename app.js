//importo express
const express  = require('express');

//inizializzo express
const app = express();

//inizializzo la porta
const port = 3000;

//importo il router
const postsRouter = require('./router/postsRouter.js');

//vado ad utilizzare postsRouter per creare le rotte
app.use('/posts', postsRouter);

//home
app.get('/', (req,res) =>{
    res.send('Blog con vari post');
});


//inizializzo il listen del server sulla porta 3000
app.listen(port, ()=>{
    console.log(`server listening on port ${port}`);
})
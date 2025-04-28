function errorsHandler(err,req,res,next){
    res.status(500)

    res.json({
        error : 'Interal Server Error',
        message : err.message
    });
}

module.exports = errorsHandler;
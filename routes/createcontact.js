exports.list = function(req, res){

    req.getConnection(function(err,connection){
        var query = connection.query('SELECT * FROM person',function(err,rows){
            if(err)
                console.log("Error Selecting : %s ",err );

            res.render('createcontact',{page_title:"Create contact ",data:rows});
        });
    });
};
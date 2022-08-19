const fs = require('fs');
const CRUD= require("./CRUD");

exports.controller = function(req,res,next) {
    
    if(req.body.op=="getImage"){
        console.log("getImage");
        fs.readdir(__dirname+'/images/'+req.body.msg, function(err,fileList){
            res.send({result:req.body.op
                ,image:fileList[0]});
        });
    }else if(req.body.op=="getDetail"){
        console.log("getDetail");
        fs.readdir(__dirname+'/images/'+req.body.msg, function(err,fileList){
            res.send({result:req.body.op
                ,fileList:fileList});
        });
    }else if(req.body.op=="updateValue"){
        var filter = { name : req.body.name};
        var doc = { $set: { seq : parseInt(req.body.seq), price : req.body.price , link : req.body.link } };    
        CRUD.updateData(req.body.op,"products",filter,doc);
        res.send({result:req.body.op});
    }else if(req.body.op=="updateStorage"){
        var filter = { depth2 : req.body.depth2, depth3 : req.body.depth3};
        var doc = { $set: { Qtty : req.body.Qtty } };    
        CRUD.updateData(req.body.op,"storage",filter,doc);
        res.send({result:req.body.op});
    }else if(req.body.op=="createStorage"){
        var doc = { depth1 : req.body.depth1, depth2 : req.body.depth2, depth3 : req.body.depth3, Qtty : 0 };    
        CRUD.createData(req.body.op,"storage",doc);
        res.send({result:req.body.op});
    }else if(req.body.op=="updateTodo"){
        var filter = { createTm : req.body.createTm };
        var doc = { $set: { todo : req.body.todo, stat : req.body.stat, updateTm : req.body.updateTm} };
        CRUD.updateData(req.body.op,"todo",filter,doc);
        res.send({result:req.body.op});
    }else if(req.body.op=="createTodo"){
        var doc = { createTm : req.body.createTm, todo : req.body.todo, stat : req.body.stat, updateTm : req.body.updateTm };    
        CRUD.createData(req.body.op,"todo",doc);
        res.send({result:req.body.op});
    }else if(req.body.op=="deleteTodo"){
        var filter = { createTm : req.body.createTm };  
        CRUD.deleteData(req.body.op,"todo",filter);
        res.send({result:req.body.op});
    }
}

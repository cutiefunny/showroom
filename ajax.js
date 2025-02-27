const fs = require('fs');
const CRUD= require("./CRUD");

exports.controller = function(req,res,next) {
    
    if(req.body.op=="getImage"){
        //console.log("getImage");
        fs.readdir(__dirname+'/images/'+req.body.msg, function(err,fileList){
            res.send({result:req.body.op
                ,image:fileList[0]});
        });
    }else if(req.body.op=="getDetail"){
        //console.log("getDetail");
        fs.readdir(__dirname+'/images/'+req.body.msg, function(err,fileList){
            res.send({result:req.body.op,fileList:fileList});
        });
    }else if(req.body.op=="updateValue"){
        var filter = { name : req.body.name};
        var doc = { $set: { seq : parseInt(req.body.seq), price : req.body.price , link : req.body.link , tag : req.body.tag} };    
        CRUD.updateData(req.body.op,"products",filter,doc);
        res.send({result:req.body.op});
    }else if(req.body.op=="updateImg"){
        var filter = { name : req.body.name};
        var doc = { $set: { img : req.body.img , deletehash:response.data.deletehash } };    
        CRUD.updateData(req.body.op,"products",filter,doc);
        res.send({result:req.body.op,img : req.body.img});
    }else if(req.body.op=="uploadImage"){
        var doc = { link : req.body.link,deletehash : req.body.deletehash,use : req.body.use,createTm:req.body.createTm};    
        CRUD.createData(req.body.op,"images",doc);
        res.send({result:req.body.op,img : req.body.img});
    }else if(req.body.op=="deleteImage"){
        var filter = { deletehash : req.body.deletehash };      
        CRUD.deleteData(req.body.op,"images",filter);
        res.send({result:req.body.op});
    }else if(req.body.op=="createManage"){
        var doc = { seq : parseInt(req.body.seq), name : req.body.name , price : req.body.price , link : req.body.link , tag : req.body.tag };    
        CRUD.createData(req.body.op,"products",doc);
        res.send({result:req.body.op});
    }else if(req.body.op=="updateStorage"){
        var filter = { depth2 : req.body.depth2, depth3 : req.body.depth3};
        var doc = { $set: { Qtty : req.body.Qtty } };    
        CRUD.updateData(req.body.op,"storage",filter,doc);
        res.send({result:req.body.op});
    }else if(req.body.op=="deleteStorage"){
        var filter = { depth2 : req.body.depth2, depth3 : req.body.depth3};  
        CRUD.deleteData(req.body.op,"storage",filter);
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
    }else if(req.body.op=="saveMemo"){
        var doc = { deviceId : req.body.deviceId, contents : req.body.contents, createTm : req.body.createTm };    
        CRUD.createData(req.body.op,"board",doc);
        res.send({result:req.body.op});
    }else if(req.body.op=="deleteMemo"){
        var filter = { createTm : req.body.createTm };   
        CRUD.deleteData(req.body.op,"board",filter);
        res.send({result:req.body.op});
    }
}
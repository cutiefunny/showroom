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
    }
}

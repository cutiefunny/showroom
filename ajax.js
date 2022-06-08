const fs = require('fs');

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
        console.log("updateValue : " + req.body.msg.seq + req.body.msg.name + req.body.msg.price);
        var filter = { name : req.body.msg.name};
        var doc = { $set: { seq : req.body.msg.seq, price : req.body.msg.price } };    
        userList.updateOne(filter,doc,{upsert:true});
        res.send({result:req.body.op});
    }
}

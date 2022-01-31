const fs = require('fs');

exports.controller = function(req,res,next) {
    
    if(req.body.op=="getFileList"){
        console.log("getFileList");
        fs.readdir(__dirname+'/images/'+req.body.msg, function(err,fileList){
            res.send({result:req.body.op
                ,fileList:fileList});
        });
    }else if(req.body.op=="face1"){
        res.send({result:req.body.op,msg:"face1"});
    }
}

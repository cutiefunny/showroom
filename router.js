const fs = require('fs');

exports.main = function(req,res) {

    fs.readdir(__dirname+'/images/', function(err,folderList){
        console.log(folderList);
            res.render('main', { 
                title: '근육고양이 잡화점'
                , folderList : folderList
                , name : '김냐냐'
            });
    });
}
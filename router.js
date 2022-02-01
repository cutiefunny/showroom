const CRUD= require("./CRUD");
const fs = require('fs');

exports.main = function(req,res) {

    CRUD.searchData("getAll","products").then(products=>{
        console.log(products);
        res.render('main', { 
            title: '근육고양이 잡화점'
            , products : products
            , name : '김냐냐'
        });
    });
    // fs.readdir(__dirname+'/images/', function(err,folderList){
    //     console.log(folderList);
    //         res.render('main', { 
    //             title: '근육고양이 잡화점'
    //             , folderList : folderList
    //             , name : '김냐냐'
    //         });
    // });
}
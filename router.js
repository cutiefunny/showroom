const CRUD= require("./CRUD");
const fs = require('fs');

exports.main = function(req,res) {

    var MobileDetect = require('mobile-detect'),
    md = new MobileDetect(req.headers['user-agent']);
    console.log(req.query.id);
    
    //pc/mobile 구분
    var target="main";
    if(!md.mobile()) target="main_pc";

    CRUD.searchData("getAll","products").then(products=>{
        // let tags = [];
        // tags.push("전체");
        // products.forEach(product => {
        //     product.tag.forEach(t=>{
        //         if(!tags.includes(t)) tags.push(t);
        //     });
        // });
        //console.log(products);
        res.render(target, { 
            title: '근육고양이 잡화점'
            , products : products
            , name : '김냐냐'
            , device : md.mobile()
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

exports.manage = function(req,res) {

    CRUD.searchData("getAll","products").then(products=>{

        var target="manage";
        res.render(target, { 
            title: '상품관리'
            , products : products
        });
    });
}

exports.storage = function(req,res) {

    CRUD.searchData("getStorage","storage").then(products=>{

        var target="storage";
        res.render(target, { 
            title: '재고관리'
            , products : products
        });
    });
}

exports.todo = function(req,res) {

    CRUD.searchData("getTodo","todo").then(todoList=>{

        var target="todo";
        res.render(target, { 
            title: 'To-do List'
            , todoList : todoList
        });
    });
}

exports.old = function(req,res) {

    var target="main_old";

    CRUD.searchData("getAll","products").then(products=>{
        let tags = [];
        tags.push("전체");
        products.forEach(product => {
            product.tag.forEach(t=>{
                if(!tags.includes(t)) tags.push(t);
            });
        });
        console.log(products);
        res.render(target, { 
            title: '근육고양이 잡화점'
            , products : products
            , name : '김냐냐'
            , tags : tags
        });
    });
}
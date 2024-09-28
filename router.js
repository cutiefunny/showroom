const CRUD= require("./CRUD");
const fs = require('fs');
const deviceID = require('node-machine-id');

exports.main = function(req,res) {

    var MobileDetect = require('mobile-detect'),
    md = new MobileDetect(req.headers['user-agent']);
    
    //pc/mobile 구분
    var target="main";
    if(!md.mobile()) target="main_pc";

    CRUD.searchData("getAll","products").then(products=>{
        CRUD.searchData("getMainImage","images").then(images=>{
            CRUD.searchData("getBoard","board").then(memos=>{
                res.render(target, { 
                    title: '근육고양이 잡화점'
                    , products : products
                    , name : '김냐냐'
                    , images : images
                    , device : md.mobile()
                    , memos : memos
                    , deviceID : deviceID.machineIdSync()
                });
            });
        });
    });
}

exports.khan = function(req,res) {
    
    var MobileDetect = require('mobile-detect'),
    md = new MobileDetect(req.headers['user-agent']);
    
    //pc/mobile 구분
    let target="khan";

    CRUD.searchData("getAll","products").then(products=>{
        CRUD.searchData("getBoard","board").then(memos=>{
            res.render(target, { 
                title: '칸 티샤스 마켓'
                , products : products
                , name : '김냐냐'
                , device : md.mobile()
                , memos : memos
                , deviceID : deviceID.machineIdSync()
            });
        });
    });
}

exports.manageKhan = function(req,res) {
    CRUD.searchData("getAll","products").then(products=>{
        var target="manageKhan";
        res.render(target, {
            title: '상품관리'
            , products : products
        });
    });
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

exports.image = function(req,res) {

    CRUD.searchData("getImage","images").then(images=>{

        var target="image";
        res.render(target, { 
            title: '이미지관리'
            , images : images
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

exports.goods = function(req,res) {

    const xlsx = require('xlsx');
    const workbook = xlsx.readFile('./files/goods.xlsx'); // 액셀 파일 읽어오기
    const firstSheetName = workbook.SheetNames[0]; // 첫 번째 시트 이름 가져오기
    const firstShee = workbook.Sheets[firstSheetName]; // 시트 이름을 이용해 엑셀 파일의 첫 번째 시트 가져오기
    const firstSheeJson = xlsx.utils.sheet_to_json(firstShee); // 첫 번째 시트 내용을 json 데이터로 변환

    let goods = [];

    for(let i=0; i<firstSheeJson.length; i++){
        let good = {};
        good.depth1 = firstSheeJson[i].대분류명;
        good.depth2 = firstSheeJson[i].중분류명;
        good.depth3 = firstSheeJson[i].소분류명;
        good.name = firstSheeJson[i].상품명;
        good.barcode = firstSheeJson[i].바코드;
        good.price = firstSheeJson[i].판매가;
        if(good.depth1 == "티셔츠" || good.depth1 == "케이스" || good.depth1 == "소품") goods.push(good);
    }

    var target="goods";
    res.render(target, { 
        title: '상품목록', 
        goods : goods
    });

}
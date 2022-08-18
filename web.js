//#region 초반 선언부
const express = require('express');
const port = 8003;
const http = require('https'); 
const path = require('path');
const moment = require('moment');
const bodyparser= require('body-parser');
const router = require('./router');
const ajax = require('./ajax');
const CRUD= require("./CRUD");
const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/script',express.static(__dirname + "/script"));
app.use('/views',express.static(__dirname + "/views"));
app.use('/images',express.static(__dirname + "/images"));
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());

const { response, request } = require('express');
const { createConnection } = require('net');
//#endregion

//#region 리스닝 및 라우팅

//리스닝
app.listen(port, ()=>{
    console.log('8003번 포트에 대기중!');
})
console.log("server started");

//라우터
app.get('/', router.main);
app.get('/manage', router.manage);
app.get('/old',router.old)
app.get('/storage',router.storage)
app.get('/todo',router.todo)

//ajax 컨트롤러
app.post('/ajax', ajax.controller);

//#endregion
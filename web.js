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

// var Jimp = require('jimp');
// var multer = require('multer'); // express에 multer모듈 적용 (for 파일업로드)
// var upload = multer({ dest: 'images/test/' })

//imgur
// clientID : ff70f4ca94ef095
// clientSecret : e1fd611f43957aa9cc66bf3df034828eaf2f015d
// Abstract API
// primaryKey : 3867691d47e543958ab783fcadc332b2

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
app.get('/image', router.image);
app.get('/old',router.old);
app.get('/storage',router.storage);
app.get('/todo',router.todo);
app.get('/khan',router.khan);
app.get('/manageKhan',router.manageKhan);
app.get('/goods',router.goods); //

//ajax 컨트롤러
app.post('/ajax', ajax.controller);
// app.post('/upload', upload.single('userfile'), function(req, res){
//     //res.send('Uploaded! : '+req.file); // object를 리턴함
//     console.log(req.file.filename); // 콘솔(터미널)을 통해서 req.file Object 내용 확인 가능.
//     Jimp.read(req.file.path)
//         .then(file => {
//             return file
//             .resize(640, Jimp.AUTO) // resize
//             .quality(100) // set JPEG quality
//             .write('images/test/small2.jpg'); // save
//         })
//         .catch(err => {
//             console.error(err);
//         });
//   });
//#endregion
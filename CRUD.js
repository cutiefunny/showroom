const moment = require('moment');
const { MongoClient } = require("mongodb");

//몽고DB 연결
const uri =
  "mongodb+srv://cutiefunny:ghks1015@macrodb.srkli.mongodb.net/macroDB?retryWrites=true&w=majority";
const client = new MongoClient(uri);
client.connect();
const db = client.db("showroom");

//Read
exports.searchData = async function (op,col,param){
    var collection = db.collection(col);

    if(op=="getAll") res = await collection.find().sort({seq:1}).toArray();
    
    return res;
}
const moment = require('moment');
const { MongoClient } = require("mongodb");

//몽고DB 연결
const uri =
  "mongodb+srv://cutiefunny:ghks1015@macrodb.srkli.mongodb.net/macroDB?retryWrites=true&w=majority";
const client = new MongoClient(uri);
client.connect();
const db = client.db("showroom");
//const collection = db.collection("products");

//Read
exports.searchData = async function (op,col,param){
    var collection = db.collection(col);

    if(op=="getAll") res = await collection.find().sort({seq:1}).toArray();
    else if(op=="getStorage") res = await collection.find().sort({depth1:1,depth2:1,depth3:1}).toArray();
    else if(op=="getTodo") res = await collection.find().sort({createTm:-1}).toArray();
    else if(op=="getImage") res = await collection.find().sort({createTm:-1}).toArray();
    else if(op=="getMainImage") res = await collection.find().sort({createTm:-1}).limit(20).toArray();
    else if(op=="getBoard") res = await collection.find().sort({createTm:-1}).limit(20).toArray();
    
    return res;
}

//Update
exports.updateData = function (op,col,filter,doc){
  var collection = db.collection(col);
  collection.updateOne(filter,doc,{upsert:true});
  
  return res;
}

//Create
exports.createData = function (op,col,doc){
  var collection = db.collection(col);
  collection.insertOne(doc);
  
  return res;
}

//Create
exports.deleteData = function (op,col,doc){
  var collection = db.collection(col);
  collection.deleteOne(doc);
  
  return res;
}
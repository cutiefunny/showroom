var createTm = document.getElementsByName("createTm");
var todo = document.getElementsByName("todo");
var stat = document.getElementsByName("stat");
var row = document.getElementsByName("row");
var statVal = [];
var todoVal = [];
var selected=999;

//페이지 시작 시 수행되는 함수
window.onload = function(){
    var cnt=0;
    //기존의 값들을 배열에 담는다
    todo.forEach(val =>{
        todoVal.push(val.getAttribute("value"));
    });
    stat.forEach(val =>{
        statVal.push(val.getAttribute("value"));
        if(val.getAttribute("value")=="완료") row[cnt].classList.add("hide");
        cnt++;
    });
};

$('.ui.dropdown')
  .dropdown()
;

function select(cnt){
    selected=cnt;
    alert(selected);
}

function showAll(){
    row.forEach(tr => {
        tr.classList.remove("hide");
    })
}

function create(){
    $('#newTodo').val("");
    $('.ui.modal').modal('show');
}

function saveNew(){
    var val = $('#newTodo').val();
    var cnt=0;
    var exist=false;
    var time = new Date().YYYYMMDDHHMMSS();
    todo.forEach(obj => {
        if(obj.getAttribute("value") == val) {
            exist=true;
        }
        cnt++;
    });
    if(exist) alert("already exist!");
    else {
        callAjaxTodo("createTodo",{createTm:time,todo:val,stat:"예정",updateTm:""});
    }
}

function save(){
    var cnt=0;
    var statValAfter = [];
    var todoValAfter = [];
    stat = document.getElementsByName("stat");

    //변경된 입력값을 배열에 담는다
    stat.forEach(val =>{
        statValAfter.push(val.textContent);
    });
    todo.forEach(val =>{
        todoValAfter.push(val.getAttribute("value"));
    });

    //기존값과 입력값을 비교하여 차이가 있을 시 update
    for(i=0;i<stat.length;i++){
        console.log(todoVal[i]+","+todoValAfter[i] +"/"+ statVal[i]+","+statValAfter[i]);
        if(statVal[i]!=statValAfter[i] || todoVal[i]!=todoValAfter[i]) {
            update(createTm[i].getAttribute("id"),todoValAfter[i],statValAfter[i]);
            cnt++;
        }
    }

    if(cnt>0) alert("updated "+cnt+"rows");
    else alert("there are no modified values");
}

function update(createTm, todo, stat){
    callAjaxTodo("updateTodo",{createTm:createTm,todo:todo,stat:stat,updateTm:new Date().YYYYMMDDHHMMSS()})
}

function showAll(){
    if(document.getElementById("show").textContent=="완료보기"){
        row.forEach(tr => {
            tr.classList.remove("hide");
        });
        document.getElementById("show").textContent="완료숨기기";
    }else{
        var cnt=0;
        stat = document.getElementsByName("stat");
        stat.forEach(val =>{
            if(val.textContent=="완료") row[cnt].classList.add("hide");
            cnt++;
        });
        document.getElementById("show").textContent="완료보기";
    }
    
}

//Date format 정리 함수
Date.prototype.YYYYMMDDHHMMSS = function () {
    var yyyy = this.getFullYear().toString();
    var MM = pad(this.getMonth() + 1,2);
    var dd = pad(this.getDate(), 2);
    var hh = pad(this.getHours(), 2);
    var mm = pad(this.getMinutes(), 2)
    var ss = pad(this.getSeconds(), 2)
  
    return yyyy +  MM + dd+  hh + mm + ss;
  };
  
  function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
  }
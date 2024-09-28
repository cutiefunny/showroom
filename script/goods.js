var item = document.getElementsByName("item");
var depth1 = document.getElementsByName("depth1");
var depth2 = document.getElementsByName("depth2");
var depth3 = document.getElementsByName("depth3");
var row = document.getElementsByName("row");
var saveButton = document.getElementsByName("saveButton");
var QttyVal = [];

//페이지 시작 시 수행되는 함수
window.onload = function(){

};

function del(cnt){
    if(confirm("삭제하시겠습니까?")) {
        callAjaxStorage("deleteStorage",{depth2:depth2[cnt].getAttribute("value"),depth3:depth3[cnt].getAttribute("value")});
    }
}

function update(depth2,depth3,Qtty){
    callAjaxStorage("updateStorage",{depth1:"",depth2:depth2,depth3:depth3,Qtty:Qtty}) 
}

function change(obj){
    obj.setAttribute("value",obj.value);
}

function changeValue(op,cnt){
    var val = 0;
    if(op=="plus") val = parseInt(Qtty[cnt].getAttribute("value"))+1;
    else if(op=="minus" && parseInt(Qtty[cnt].getAttribute("value"))>0) val = parseInt(Qtty[cnt].getAttribute("value"))-1;
    Qtty[cnt].setAttribute("value",val);
    if(val==QttyVal[cnt]) Qtty[cnt].classList.remove("red");
    else if(val!=QttyVal[cnt] && !Qtty[cnt].classList.contains("red")) Qtty[cnt].classList.add("red");
}

function filter(op,val){
    var objs;
    var cnt=0;
    if(op=="1") objs=depth1;
    else if(op=="2") objs=depth2;
    else if(op=="3") objs=depth3;

    objs.forEach(obj => {
        if(obj.getAttribute("value")!=val) row[cnt].classList.add("hide");
        console.log(obj.getAttribute("value") + " / " + val);
        cnt++;
    });
}

function search(val){
    var cnt=0;
    row.forEach(tr => {
        if(item[cnt].getAttribute("value").indexOf(val)==-1) tr.classList.add("hide");
        else tr.classList.remove("hide");
        cnt++;
    })
}


function showAll(){
    row.forEach(tr => {
        tr.classList.remove("hide");
    })
}

function create(op,cnt){
    $('#newDepth1').val("");
    $('#newDepth2').val("");
    $('#newDepth3').val("");
    $('.ui.modal').modal('show');
    if(op>0) {
        $('#newDepth1').val(depth1[cnt].getAttribute("value"));
        if(op>1) {
            $('#newDepth2').val(depth2[cnt].getAttribute("value"));
            if(op>2) $('#newDepth3').val(depth3[cnt].getAttribute("value"));
        }
    }
}

function saveNew(){
    var d1 = $('#newDepth1').val();
    var d2 = $('#newDepth2').val();
    var d3 = $('#newDepth3').val();
    var cnt=0;
    var exist=false;
    depth1.forEach(obj => {
        if(obj.getAttribute("value") == d1 && depth2[cnt].getAttribute("value") == d2 && depth3[cnt].getAttribute("value") == d3) {
            exist=true;
        }
        cnt++;
    });
    if(exist) alert("already exist!");
    else {
        callAjaxStorage("createStorage",{depth1:d1,depth2:d2,depth3:d3,Qtty:0});
    }
}
var Qtty = document.getElementsByName("Qtty");
var depth1 = document.getElementsByName("depth1");
var depth2 = document.getElementsByName("depth2");
var depth3 = document.getElementsByName("depth3");
var row = document.getElementsByName("row");
var saveButton = document.getElementsByName("saveButton");
var QttyVal = [];

//페이지 시작 시 수행되는 함수
window.onload = function(){
    
    //기존의 값들을 배열에 담는다
    Qtty.forEach(val =>{
        QttyVal.push(val.getAttribute("value"));
    });
};

function save(){
    var cnt=0;
    var QttyValAfter = [];
    Qtty = document.getElementsByName("Qtty");

    //변경된 입력값을 배열에 담는다
    Qtty.forEach(val =>{
        QttyValAfter.push(val.getAttribute("value"));
    });

    //기존값과 입력값을 비교하여 차이가 있을 시 update
    for(i=0;i<Qtty.length;i++){
        console.log(QttyVal[i]+","+QttyValAfter[i]);
        if(QttyVal[i]!=QttyValAfter[i]) {
            update(depth2[i].getAttribute("value"),depth3[i].getAttribute("value"),QttyValAfter[i]);
            cnt++;
        }
    }

    if(cnt>0) alert("updated "+cnt+"rows");
    else alert("there are no modified values");
}

function update(depth2,depth3,Qtty){
    callAjaxStorage("updateStorage",{depth2:depth2,depth3:depth3,Qtty:Qtty}) 
}

function change(obj){
    obj.setAttribute("value",obj.value);
}

function changeValue(op,cnt){
    var val = 0;
    if(op=="plus") val = parseInt(Qtty[cnt].getAttribute("value"))+1;
    else if(op=="minus" && parseInt(Qtty[cnt].getAttribute("value"))>0) val = parseInt(Qtty[cnt].getAttribute("value"))-1;
    Qtty[cnt].setAttribute("value",val);
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

function showAll(){
    row.forEach(tr => {
        tr.classList.remove("hide");
    })
}
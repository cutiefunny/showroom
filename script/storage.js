var Qtty = document.getElementsByName("Qtty");
var depth2 = document.getElementsByName("depth2");
var depth3 = document.getElementsByName("depth3");
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
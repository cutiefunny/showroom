var createTm = document.getElementsByName("createTm");
var todo = document.getElementsByName("todo");
var stat = document.getElementsByName("stat");
var row = document.getElementsByName("row");
var statVal = [];
var todoVal = [];

//페이지 시작 시 수행되는 함수
window.onload = function(){
    
    //기존의 값들을 배열에 담는다
    todo.forEach(val =>{
        todoVal.push(val.getAttribute("value"));
    });
    stat.forEach(val =>{
        statVal.push(val.getAttribute("value"));
    });
};

function showAll(){
    row.forEach(tr => {
        tr.classList.remove("hide");
    })
}

function create(op,cnt){
    // $('#newDepth1').val("");
    // $('#newDepth2').val("");
    // $('#newDepth3').val("");
    // $('.ui.modal').modal('show');
    // if(op>0) {
    //     $('#newDepth1').val(depth1[cnt].getAttribute("value"));
    //     if(op>1) {
    //         $('#newDepth2').val(depth2[cnt].getAttribute("value"));
    //         if(op>2) $('#newDepth3').val(depth3[cnt].getAttribute("value"));
    //     }
    // }
}

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
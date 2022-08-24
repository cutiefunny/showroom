var onOff = document.getElementById("onOff");
var gray = document.getElementsByName("gray");
var seq = document.getElementsByName("seq");
var name2 = document.getElementsByName("name");
var price = document.getElementsByName("price");
var link = document.getElementsByName("link");
var tag = document.getElementsByName("tag");
var saveButton = document.getElementsByName("saveButton");
var seqVal = [];
var nameVal = [];
var priceVal = [];
var linkVal = [];
var tagVal = [];

//페이지 시작 시 수행되는 함수
window.onload = function(){
    
    //기존의 값들을 배열에 담는다
    seq.forEach(val =>{
        seqVal.push(val.getAttribute("value"));
    });
    name2.forEach(val =>{
        nameVal.push(val.getAttribute("value"));
    });
    price.forEach(val =>{
        priceVal.push(val.getAttribute("value"));
    });
    link.forEach(val =>{
        linkVal.push(val.getAttribute("value"));
    });
    tag.forEach(val =>{
        tagVal.push(val.getAttribute("value"));
    });
};

function toggle(){
    if(onOff.textContent=="비활성 상품 보이기"){
        onOff.textContent="비활성 상품 숨기기";
        gray.forEach(tr => {
            tr.setAttribute("style","display:block");
        });
    }else{
        onOff.textContent="비활성 상품 보이기";
        gray.forEach(tr => {
            tr.setAttribute("style","display:none");
        });
    }

}

function save(){
    var cnt=0;
    var seqValAfter = [];
    var priceValAfter = [];
    var linkValAfter = [];
    var tagValAfter = [];
    seq = document.getElementsByName("seq");
    price = document.getElementsByName("price");
    link = document.getElementsByName("link");
    tag = document.getElementsByName("tag");

    //변경된 입력값을 배열에 담는다
    seq.forEach(val =>{
        seqValAfter.push(val.getAttribute("value"));
    });
    price.forEach(val =>{
        priceValAfter.push(val.getAttribute("value"));
    });
    link.forEach(val =>{
        linkValAfter.push(val.getAttribute("value"));
    });
    tag.forEach(val =>{
        tagValAfter.push(val.getAttribute("value"));
    });

    //기존값과 입력값을 비교하여 차이가 있을 시 update
    for(i=0;i<seq.length;i++){
        console.log(seqVal[i]+","+seqValAfter[i]);
        if(seqVal[i]!=seqValAfter[i] || priceVal[i]!=priceValAfter[i] || linkVal[i]!=linkValAfter[i] || tagVal[i]!=tagValAfter[i]) {
            update(nameVal[i],seqValAfter[i],priceValAfter[i],linkValAfter[i],tagValAfter[i]);
            cnt++;
        }
    }

    if(cnt>0) alert("updated "+cnt+"rows");
    else alert("there are no modified values");
}

function update(name,seq,price,link,tag){
    callAjaxManage("updateValue",{name:name,seq:seq,price:price,link:link,tag:tag}) 
}

function change(obj){
    obj.setAttribute("value",obj.value);
}

function sortSeq(){
    var seqAfter = 10;
    var seqValAfter = [];
    var priceValAfter = [];
    var linkValAfter = [];
    var tagValAfter = [];
    seq = document.getElementsByName("seq");
    price = document.getElementsByName("price");
    link = document.getElementsByName("link");
    tag = document.getElementsByName("tag");

    //변경된 입력값을 배열에 담는다
    seq.forEach(val =>{
        seqValAfter.push(val.getAttribute("value"));
    });
    price.forEach(val =>{
        priceValAfter.push(val.getAttribute("value"));
    });
    link.forEach(val =>{
        linkValAfter.push(val.getAttribute("value"));
    });
    tag.forEach(val =>{
        tagValAfter.push(val.getAttribute("value"));
    });

    for(i=0;i<seq.length;i++){
            if(seqValAfter[i]>0) {
                update(nameVal[i],seqAfter,priceValAfter[i],linkValAfter[i],tagValAfter[i]);
                seqAfter += 10;
            }
        }
    
    alert("sort complete");
}

function create(op,cnt){
    $('#newName').val("");
    $('#newPrice').val("");
    $('#newLink').val("");
    $('#newTag').val("");
    $('.ui.modal').modal('show');
}

function saveNew(){
    var d1 = $('#newName').val();
    var d2 = $('#newPrice').val();
    var d3 = $('#newLink').val();
    var d4 = $('#newTag').val();
    var cnt=0;
    var exist=false;
    name2.forEach(obj => {
        if(obj.getAttribute("value") == d1) {
            exist=true;
        }
        cnt++;
    });
    if(exist) alert("already exist!");
    else {
        callAjaxManage("createManage",{name:d1,price:d2,link:d3,tag:d4,seq:11});
    }
}
var onOff = document.getElementById("onOff");
var gray = document.getElementsByName("gray");
var seq = document.getElementsByName("seq");
var name2 = document.getElementsByName("name");
var price = document.getElementsByName("price");
var saveButton = document.getElementsByName("saveButton");
var seqVal = [];
var nameVal = [];
var priceVal = [];

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
    seq = document.getElementsByName("seq");
    price = document.getElementsByName("price");

    //변경된 입력값을 배열에 담는다
    seq.forEach(val =>{
        seqValAfter.push(val.getAttribute("value"));
    });
    price.forEach(val =>{
        priceValAfter.push(val.getAttribute("value"));
    });

    //기존값과 입력값을 비교하여 차이가 있을 시 update
    for(i=0;i<seq.length;i++){
        console.log(seqVal[i]+","+seqValAfter[i]);
        if(seqVal[i]!=seqValAfter[i] || priceVal[i]!=priceValAfter[i]) {
            update(nameVal[i],seqValAfter[i],priceValAfter[i]);
            cnt++;
        }
    }

    if(cnt>0) alert("updated "+cnt+"rows");
    else alert("there are no modified values");
}

function update(name,seq,price){
    callAjax("updateValue",{name:name,seq:seq,price:price}) 
}
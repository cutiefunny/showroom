var onOff = document.getElementById("onOff");
var gray = document.getElementsByName("gray");
var seq = document.getElementsByName("seq");
var name = document.getElementsByName("name");
var price = document.getElementsByName("price");
var saveButton = document.getElementsByName("saveButton");

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

function saveOn(preId,id){
    var btn = document.getElementById(preId);
    if(id!=preId) btn.setAttribute("style","display:block");
    else btn.setAttribute("style","display:none")
}
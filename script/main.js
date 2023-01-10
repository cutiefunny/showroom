//페이지 시작 시 수행되는 함수
window.onload = function(){
    getTitle();
    getImage();
    setTimeout("hideLabels()",5000);
};

$('.ui.slider')
  .slider({
    min : 1,
    max : 5,
    step : 1
  })
;

function getDetail(){

}

function getImage(){ 
        document.getElementsByName("products").forEach(product => { 
            callAjax("getImage",product.getAttribute("id")) 
        });
}

function modal(product){
    $('.ui.modal').modal('show');
    document.getElementById("detail").innerHTML="";
    callAjax("getDetail",product.getAttribute("id"));
}

function clickTag(id){
    document.getElementsByName("tag").forEach(tag=> {
        if(tag.classList.contains("green")) tag.classList.remove("green");
    });
    document.getElementById(id).classList.add("green");

    if(id=="전체") {
        document.getElementsByName("box").forEach(box=>{
            box.setAttribute("style","display:block");
        });
    }
    else{
        document.getElementsByName("box").forEach(box=>{
            box.setAttribute("style","display:none");
            if(box.getAttribute("id").includes(id)) box.setAttribute("style","display:block");
        });
    }
}

function getTitle(){
    var num = Math.floor((Math.random() * 5)) + 1;
    var titleNum = "/images/"+num+".png";
    document.getElementById("title").setAttribute("src",titleNum);
}

function changeSlider(val){
    var cls = "step"+val;
    var cls2 = "centered"+val;
    console.log(cls);
    var imgs = document.getElementsByName("products");
    var prices = document.getElementsByName("prices");
    imgs.forEach(img => {
        img.className=cls;
    });
    prices.forEach(price => {
        price.className=cls2;
    });
}

function goLink(obj){
    // var url=obj.getAttribute("url");
    // if(url==null || url=="") alert("이 제품은 매장에서만 판매합니다.");
    // else window.open(url);
}

function goOld(){
    location.replace("/old");
}

function hide(obj){ obj.classList.add("hide") }
function hideLabels(){
    document.getElementById("label1").classList.add("hide");
    document.getElementById("label2").classList.add("hide");
}
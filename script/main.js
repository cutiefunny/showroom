//페이지 시작 시 수행되는 함수
window.onload = function(){
    getTitle();
    getImage();
};

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
    callAjax("getDetail",product);
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
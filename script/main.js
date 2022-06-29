//페이지 시작 시 수행되는 함수
window.onload = function(){
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

function goCat(){
    var title = document.getElementById("title");
    if(title.getAttribute("src")=="/images/1.png") title.setAttribute("src","/images/2.png");
    else if(title.getAttribute("src")=="/images/2.png") title.setAttribute("src","/images/3.png");
    else if(title.getAttribute("src")=="/images/3.png") title.setAttribute("src","/images/4.png");
    else if(title.getAttribute("src")=="/images/4.png") title.setAttribute("src","/images/5.png");
    else if(title.getAttribute("src")=="/images/5.png") title.setAttribute("src","/images/1.png");
}
//페이지 시작 시 수행되는 함수
window.onload = function(){
    getFiles();
};

function getFiles(){ 
        document.getElementsByName("products").forEach(product => { 
            callAjax("getFileList",product.getAttribute("id")) 
        });
}
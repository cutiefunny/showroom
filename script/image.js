function clickImg(obj){
    $('.ui.modal').modal('show');
    document.getElementById("bigImg").innerHTML = "<img src='"+obj.id+"' width='400px'>";
}

function copyUrl(obj) {
    navigator.clipboard.writeText(obj.id);
}

function uploadFile() {
    const fileInput = document.getElementById("uploadImg");
    var use = document.getElementById("use").value; 
    const upload = (file) => {
        if (file && file.size < 5000000) {
            const formData = new FormData();
            
            formData.append("image", file);
            fetch("https://api.imgur.com/3/image", {
                method: "POST",
                headers: {
                    Authorization: "Client-ID ff70f4ca94ef095",
                    Accept: "application/json",
                },
                body: formData,
            })
                .then((response) => response.json())
                .then((response) => {
                    console.log(response.data);
                    callAjaxImage("uploadImage",{link:response.data.link,deletehash:response.data.deletehash,use:use,createTm:new Date().YYYYMMDDHHMMSS()}) 
                });
        } else {
            console.error("파일 용량 초과");
        }
    };

    upload(fileInput.files[0]);
}

function deleteFile(obj) {
    if(confirm("delete?")){
        var deleteHash = obj.id;
        var xhr = new XMLHttpRequest();
        xhr.open('DELETE', 'https://api.imgur.com/3/image/' + deleteHash);
        xhr.setRequestHeader('Authorization', 'Client-ID ff70f4ca94ef095');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('Image deleted!');
                } else {
                    console.error(xhr.responseText);
                }
            }
        };
        xhr.send();
        callAjaxImage("deleteImage",{deletehash:deleteHash}) 
    }
}

function modal(obj){
    $('.ui.modal').modal('show');
    console.log(obj.id);
    document.getElementById("detail").innerHTML="<img src='"+obj.id+"' width='100%'>";
}

//Date format 정리 함수
Date.prototype.YYYYMMDDHHMMSS = function () {
    var yyyy = this.getFullYear().toString();
    var MM = pad(this.getMonth() + 1,2);
    var dd = pad(this.getDate(), 2);
    var hh = pad(this.getHours(), 2);
    var mm = pad(this.getMinutes(), 2)
    var ss = pad(this.getSeconds(), 2)
  
    return yyyy +  MM + dd+  hh + mm + ss;
  };
  
  function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
  }
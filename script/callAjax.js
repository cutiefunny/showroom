//Ajax 함수
function callAjax(op,msg) {

    $.ajax({
        url: '/ajax',
        dataType: 'json',
        type: 'POST',
        data: { 
            msg : msg
            , op : op
        },
        success: function(result) {
            //테스트
            if ( result['result'] == "getFileList" ) {  
                document.getElementById(msg).innerHTML += "<img src='/images/"+msg+"/"+result['fileList'][0]+"' width='350px' style='margin:5px'>";
                if(result['fileList'].length>1){
                    document.getElementById(msg).innerHTML += "<button class='ui button mini'>+"+(result['fileList'].length-1)+" more image"
                }
                document.getElementById(msg).innerHTML += "price : --- won";
                // result['fileList'].forEach(file => {
                //     document.getElementById(msg).innerHTML += "<img src='/images/"+msg+"/"+file+"' width='350px'>";
                // });
            }
            
        } //function끝
    }).done(function(response) {
        //alert("success");
    }).fail(function(response, txt, e) {
        //alert("fail");
    }); // ------      ajax 끝-----------------
}
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
            if ( result['result'] == "getImage" ) { 
                var product=document.getElementById(msg);
                product.innerHTML += "<img src='/images/"+msg+"/"+result['image']+"' style='width:100%'>";
                //cnt++;
            }else if( result['result'] == "getDetail" ) { 
                var detail=document.getElementById("detail");
                detail.setAttribute("style","width:"+ result['fileList'].length*480 +"px");
                result['fileList'].forEach(file => {
                    detail.innerHTML += "<img src='/images/"+msg+"/"+file+"' width='480px'>";
                });
            }

        } //function끝
    }).done(function(response) {
        //alert("success");
    }).fail(function(response, txt, e) {
        //alert("fail");
    }); // ------      ajax 끝-----------------
}

function callAjaxManage(op,msg) {
    $.ajax({
        url: '/ajax',
        dataType: 'json',
        type: 'POST',
        data: { 
            msg : msg
            , op : op
            , seq : msg.seq
            , name : msg.name
            , price : msg.price
            , link : msg.link
        },
        success: function(result) {
            if( result['result'] == "updateValue" ) {
            }
        } //function끝
    }).done(function(response) {
        //alert("success");
    }).fail(function(response, txt, e) {
        //alert("fail");
    }); // ------      ajax 끝-----------------
}
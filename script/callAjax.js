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
            , tag : msg.tag
            , img : msg.img
        },
        success: function(result) {
            if( result['result'] == "updateValue" ) {
            }else if( result['result'] == "createManage" ) {
                alert("create complete");
                location.reload();
            }else if( result['result'] == "updateImg" ) {
                location.reload();
            }
        } //function끝
    }).done(function(response) {
        //alert("success");
    }).fail(function(response, txt, e) {
        //alert("fail");
    }); // ------      ajax 끝-----------------
}

function callAjaxImage(op,msg) {
    $.ajax({
        url: '/ajax',
        dataType: 'json',
        type: 'POST',
        data: { 
            msg : msg
            , op : op
            , link : msg.link
            , deletehash : msg.deletehash
            , createTm : msg.createTm
        },
        success: function(result) {
            if( result['result'] == "uploadImage" ) {
                location.reload();
            }else if( result['result'] == "deleteImage" ) {
                location.reload();
            }
        } //function끝
    }).done(function(response) {
        //alert("success");
    }).fail(function(response, txt, e) {
        //alert("fail");
    }); // ------      ajax 끝-----------------
}

function callAjaxStorage(op,msg) {
    $.ajax({
        url: '/ajax',
        dataType: 'json',
        type: 'POST',
        data: { 
            msg : msg
            , op : op
            , depth1 : msg.depth1
            , depth2 : msg.depth2
            , depth3 : msg.depth3
            , Qtty : msg.Qtty
        },
        success: function(result) {
            if( result['result'] == "updateStorage" ) {

            }else if( result['result'] == "createStorage" ) {
                alert("create complete");
                location.reload();
            }
        } //function끝
    }).done(function(response) {
        //alert("success");
    }).fail(function(response, txt, e) {
        //alert("fail");
    }); // ------      ajax 끝-----------------
}

function callAjaxTodo(op,msg) {
    $.ajax({
        url: '/ajax',
        dataType: 'json',
        type: 'POST',
        data: { 
            msg : msg
            , op : op
            , createTm : msg.createTm
            , todo : msg.todo
            , stat : msg.stat
            , updateTm : msg.updateTm
        },
        success: function(result) {
            if( result['result'] == "updateTodo" ) {

            }else if( result['result'] == "createTodo" ) {
                alert("create complete");
                location.reload();
            }else if( result['result'] == "deleteTodo" ) {
                alert("delete complete");
                location.reload();
            }
        } //function끝
    }).done(function(response) {
        //alert("success");
    }).fail(function(response, txt, e) {
        //alert("fail");
    }); // ------      ajax 끝-----------------
}

function callAjaxImageResize(img) {

	var formData = new FormData();
    formData.append('userfile', img);

    $.ajax({
        enctype: 'multipart/form-data',
        data: formData,
        url: '/upload',
        type: 'POST',
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function(result) {

        } //function끝
    }).done(function(response) {
        //alert("success");
    }).fail(function(response, txt, e) {
        //alert("fail");
    }); // ------      ajax 끝-----------------
}
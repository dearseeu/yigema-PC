$(function(){
    $(`<link rel="stylesheet" href="css/aside.css">`).appendTo("head");
    $.ajax({
        url:"aside.html",
        type:"get",
        success:function(res){
            $(res).replaceAll("#aside")
        }
    })
})
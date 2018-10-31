$(function(){
    $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
    $.ajax({
        url:"header.html",
        type:"get",
        success:function(res){
            $(res).replaceAll("#header")
            $(document).ready(function(){
                    $(".my_bread").hide();
                    $("div.header_list>ul>li").hover(function(){
                        $(this).children("[data-toggle=items]").toggleClass("active")
                        $(this).children(":last-child").toggle();
                    })
                    //欢迎用户
                    var uname=sessionStorage.getItem("uname");
                    var upwd=sessionStorage.getItem("upwd");
                    // console.log(uname)
                    if(uname){
                        $("#welcome").text("欢迎您: "+uname)
                        $("#wxLogin").text("退出登录").click(function(){
                            sessionStorage.clear();
                            $(this).text("退出成功,3s后跳回登录页面")
                            setTimeout(function(){
                                location.href="http://127.0.0.1:4000/login.html"  
                            },3000)                
                        })
                    }
                    if(location.href!=="http://127.0.0.1:4000/index.html"){
                        $(".header_list").addClass("d-none")
                        // $(".nav_brand").mouseover(function () {
                        //                         //     $(".header_list").removeClass("d-none");
                        //                         // })
                    }
            })
        }
    })
})

(async function(){
    $.ajax({
        url:"http://127.0.0.1:4000/index/",
        type:"get",
        dataType:"json",
        success:function (res) {
            function f() {
                var html=``;
                for (var i = 0; i < 5; i++) {
                    var n = parseInt(Math.random() * 10);
                    html += `
                    <div class="d-flex flex-column align-items-center">
                        <img src="${res[n].img_url}" class="img-fluid link_img" alt="">
                        <a href="details.html?id=${res[n].id}" class="my_font_small mt-2 ell">${res[n].title}</a>
                        <h6 class="my_red_color font-weight-bold">商城价：${res[n].price.toFixed(2)}</h6>
                    </div>
                `
                }
                return html;
            }
           
            $(f()).appendTo($("#hot_rank"));
            $(f()).appendTo($("#hot_sale"));
            $(f()).appendTo($("#hot_intro"));
            $(f()).appendTo($("#hot_new"));
            $(f()).appendTo($("#hot_guess"));
            function f1() {
                var html=``;
                for(var i=0;i<4;i++){
                    var n = parseInt(Math.random() * 10);
                    html+=`
                    <div>
                        <img src="${res[n].img_url}" alt="" class="">
                        <a href="details.html?id=${res[n].id}" class="ell title_a">${res[n].title}</a>
                        <div class="d-flex justify-content-between align-items-center">
                            <h6 class="my_red_color">&yen;${res[n].price.toFixed(2)}</h6>
                            <a href="#" class="cart_btn"><img src="img/shop.png" alt=""></a>
                        </div>
                    </div>`
                }
                var div=$(`<div class='list_goods'>${html}</div>`)
                return div;
            };
            $(f1()).appendTo($("#choice"));$(f1()).appendTo($("#choice"));
            $(f1()).appendTo($("#baby"));$(f1()).appendTo($("#baby"));
            $(f1()).appendTo($("#man"));$(f1()).appendTo($("#man"));
            $(f1()).appendTo($("#babyfood"));$(f1()).appendTo($("#babyfood"));
            $(f1()).appendTo($("#floor2_1"));$(f1()).appendTo($("#floor2_1"));
            $(f1()).appendTo($("#floor2_2"));$(f1()).appendTo($("#floor2_2"));
            $(f1()).appendTo($("#floor2_3"));$(f1()).appendTo($("#floor2_3"));
            $(f1()).appendTo($("#floor2_4"));$(f1()).appendTo($("#floor2_4"));
            $(f1()).appendTo($("#floor3_1"));$(f1()).appendTo($("#floor3_1"));
            $(f1()).appendTo($("#floor3_2"));$(f1()).appendTo($("#floor3_2"));
            $(f1()).appendTo($("#floor3_3"));$(f1()).appendTo($("#floor3_3"));
            $(f1()).appendTo($("#floor3_4"));$(f1()).appendTo($("#floor3_4"));
        }
    });
})()
$(document).ready(function(){

    $("[data-t=change]").mouseover(function(){
        var s=$(this).attr("data-s")
        $(this).attr("src",s)
    })
    // $("[data-t=change]").hover(function(){
    //     var s=$(this).attr("data-s")
    //     $(this).attr("src",s)
    //   },function(){
    //     var f=$(this).attr("data-f")
    //     $(this).attr("src",f)
    //   })
    var slideBox = $(".slideBox"); //整个父元素div
    var ul = slideBox.find("ul");  //图片ul
    var oneWidth = slideBox.find("ul li").eq(0).width(); //li移动宽度
    var number = slideBox.find(".spanBox span");   //找所有span         //注意分号 和逗号的用法
    var timer = null;
    var sw = 0;
    //每个span绑定click事件，完成切换颜色和动画，以及读取参数值
    number.on("click",function (){
        $(this).addClass("active").siblings("span").removeClass("active");
        sw=$(this).index();
        ul.animate({
            "right":oneWidth*sw,    //ul标签的动画为向左移动；
        },1000);
    });
    //左右按钮的控制效果
    $(".next").stop(true,true).click(function (){
        sw++;
        if(sw==number.length){sw=0}
        number.eq(sw).trigger("click");
    });
    $(".prev").stop(true,true).click(function (){
        sw--;
        if(sw==number.length){sw=0}
        number.eq(sw).trigger("click");
    });
    //定时器的使用，自动开始
    timer = setInterval(function (){
        sw++;
        if(sw==number.length){sw=0}
        number.eq(sw).trigger("click");
    },4000);
    //hover事件完成悬停和，左右图标的动画效果
    slideBox.hover(function(){
        $(".next,.prev").animate({
            "opacity":1,
        },200);
        clearInterval(timer);
    },function(){
        $(".next,.prev").animate({
            "opacity":0.5,
        },500);
        timer = setInterval(function (){
            sw++;
            if(sw==number.length){sw=0}
            number.eq(sw).trigger("click");
        },2000);
    })
    $(".section_floor>.floor_nav>ul.nav").mouseover(function(e){
        e.preventDefault();
        var $tar=$(e.target);
        if($tar.is("[data-toggle=item]")){
            var n= $tar.parent().index();
            $tar.parent().parent().parent().siblings().css("left",691+n*130)
        }
        $($tar.attr("data-target")).addClass("list_box_now").siblings().removeClass("list_box_now")
    });
    $(".section_nav ul").on("mouseover","[data-toggle=data]",function (e) {
        e.preventDefault();
        var item=$(this);
        item.parent().addClass("now").siblings().removeClass("now");
        $(item.attr("data-target")).addClass("now").siblings().removeClass("now");
        var n=item.parent().index();
        // console.log(n);
        $(".triangle").css("left",111+n*240);
    })
    window.onscroll= function(){
        var t = document.documentElement.scrollTop||document.body.scrollTop;
        // this.console.log(t)
        var scrolldiv = $("#scrolldiv")
        var li = scrolldiv.children().children()
        if(t<1300) scrolldiv.fadeOut();
        if(t>=1300) {
            scrolldiv.slideDown();
            $(li[0]).show().addClass("scroll").siblings().removeClass("scroll");
        }
        if(t>=1800) $(li[1]).addClass("scroll").siblings().removeClass("scroll")
        if(t>=2389) $(li[2]).addClass("scroll").siblings().removeClass("scroll")
        if(t>2888) scrolldiv.slideUp();
    }
});


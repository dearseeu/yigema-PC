// (async function(){
  if(location.search.split("=").slice(1)!=-1){
    var id=location.search.split("=").slice(1);
    $.ajax({
      url:"http://127.0.0.1:4000/details",
      type:"get",
      data:`id=${id}`,
      dataType:"json",
      success:(res)=>{
        console.log(res);
        var {id,title,price,img_url,big_url1,big_url2,big_url3,big_url4,big_url5,content}=res[0];
        $("#card-title").text(title);
        $("#p_price").text(price.toFixed(2));
        $(`<img class="card-img-top scanimg" src="${big_url1}" alt="Card image cap">`).appendTo(".bigImg");
        $("#content").html(content);
        var html=`
          <ul class="smallImg list-unstyled d-flex">
            <li class="border_active"><img src="${big_url1}" alt=""></li>
            <li><img src="${big_url2}" alt=""></li>
            <li><img src="${big_url3}" alt=""></li>
            <li><img src="${big_url4}" alt=""></li>
            <li><img src="${big_url5}" alt=""></li>
          </ul>
        `
        $(html).appendTo("#pics");
        var $scanbox=$(".scanbox")
        var src=$(".scanimg").attr("src");
        console.log(src)
        $scanbox.css("backgroundImage",`url('${src}')`)
        var MSIZE=176,SMIZE=352,MAX=SMIZE-MSIZE;
        $(".smallImg").on("click","img",function(){
          $(this).parent().addClass("border_active").siblings().removeClass("border_active");
          var bigSrc=$(this).attr("src");
          $(".scanimg").attr("src",bigSrc);
          $scanbox.css("backgroundImage",`url('${bigSrc}')`)
        })
        $(".smask").hover(
          function(){
            $(".mask").toggleClass("d-none")
            $scanbox.toggleClass("d-none")
          })
        .mousemove(function(e){
          var top=e.offsetY-176/2;
          var left=e.offsetX-176/2;
          if(top<0) top=0 ;else if(top>MAX) top=MAX
          if(left<0) left=0 ;else if(left>MAX) left=MAX
          $(".mask").css({top,left})
          $scanbox.css("backgroundRepeat","no-repeat")
          .css("backgroundPosition",`${-2*left}px ${-2*top}px`)
        })
      }
    });
  }
// })()

window.onscroll=function(){
  var t = document.documentElement.scrollTop||document.body.scrollTop;
  var leftFixed=$(".card_left").offset().top;
  // var rightFixed=$(".card_rigth").offset().top;
  // console.log(leftFixed)
  if(t>=1065.375){
    $(".card_left").addClass("p_fixed")
    $(".abs_card").addClass("abs_fixed")
  }
  else{
    $(".card_left").removeClass("p_fixed");
    $(".abs_card").removeClass("abs_fixed")
  } 
}

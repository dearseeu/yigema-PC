

$(".phone").focus(function(){
  $(this).next().css("display","block");
}).blur(function(){
  var phone=$(this).val();
  var reg=/^1[3,4,5,7,8]\d{9}$/;
  if(reg.test(phone)) $(this).next().text("验证通过").addClass("text-success");
  else $(this).next().text("您输入的手机号有误").addClass("text-danger");
})
$(".pwd").focus(function(){
  $(this).next().css("display","block");
}).blur(function(){
  var pwd=$(this).val();
  var reg=/^\d{6,8}$/;
  if(reg.test(pwd)) $(this).next().text("验证通过").addClass("text-success")
  else $(this).next().text("您输入的密码不符合要求").addClass("text-danger");
})
$("#register").click((e)=>{
  // console.log(111)
  e.preventDefault();
  var $uname=$(".phone").val();
  var $upwd=$(".pwd").val();
  // console.log($uname,$upwd)
  $.ajax({
    url:"http://127.0.0.1:4000/users/register",
    type:"post",
    data:`uname=${$uname}&upwd=${$upwd}`,
    success:function(res){
      // console.log(res.msg)
      $("#res_msg").text(res.msg);
    }
  })
})
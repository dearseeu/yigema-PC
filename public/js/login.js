$("#login").click((e)=>{
  e.preventDefault();
  console.log(111)
  var $uname=$(".uname").val();
  var $upwd=$(".upwd").val();
  $.ajax({
    url:"http://127.0.0.1:4000/users/login",
    method:"post",
    data:`uname=${$uname}&upwd=${$upwd}`,
    success:function(res){
      // console.log(res)
      $("#res_msg").text(res.msg)
      if(res.code==1){
        setTimeout(() => {
          location.href="http://127.0.0.1:4000/index.html"
        }, 3000);
        var $uname=$(".uname").val();
        var $upwd=$(".upwd").val();
        sessionStorage.setItem("uname",$uname);
        sessionStorage.setItem("upwd",$upwd)
      }
    }
  })
})
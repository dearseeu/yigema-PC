const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.post("/register",(req,res)=>{
  var uname=req.body.uname;
  // console.log(uname)
  var unameReg=/^1[3,4,5,7,8]\d{9}$/;
  if(!unameReg.test(uname)){
    res.send({code:-1,msg:"/(ㄒoㄒ)/~~用户名格式错误~"})
    return;
  }
  var upwd=req.body.upwd;
  var upwdReg=/^\d{6,8}$/;
  if(!upwdReg.test(upwd)){
    res.send({code:-2,msg:"/(ㄒoㄒ)/~~密码格式错误~"})
    return;
  }
  var sql="INSERT INTO `ygm_user`(`uid`, `uname`, `upwd`) VALUES (NULL,?,?)";
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"O(∩_∩)O~~注册成功"})
  })
})
router.post("/login",(req,res)=>{
  var uname=req.body.uname;
  var upwd=req.body.upwd;
  var sql=`SELECT * FROM ygm_user WHERE uname=? AND upwd=?`
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:1,msg:"登陆成功!3s后跳转至首页"})
    }
    else {
      res.send({code:-1,msg:"/(ㄒoㄒ)/~~请检查您的用户名或密码"})
      return;
    }
  })
})
module.exports=router;
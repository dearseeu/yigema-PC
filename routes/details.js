const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/",(req,res)=>{
  var id=req.query.id;
  var sql="SELECT * FROM `ygm_index_product` WHERE id=?";
  pool.query(sql,[id],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
// router.get("/",(req,res)=>{
//     var lid=req.query.lid;
//     var obj={
//         product:{},
//         specs:[]
//     };
//     (async function(){
//         await new Promise(function(open){
//             var sql=`SELECT * FROM xz_laptop WHERE lid=?`;
//             pool.query(sql,[lid],(err,result)=>{
//                 if(err) console.log(err);
//                 console.log(result)
//                 obj.product=result[0];
//                  open();
//             })
//         })
//         await new Promise(function(open){
//             var sql=`SELECT lid,spec FROM xz_laptop WHERE family_id=(SELECT family_id FROM xz_laptop WHERE lid=?)`;
//             pool.query(sql,[lid],(err,result)=>{
//                 if(err) console.log(err);
//                 obj.specs=result;
//                 open();
//             })
//         })
//         res.send(obj);
//     })()
// })


module.exports=router;
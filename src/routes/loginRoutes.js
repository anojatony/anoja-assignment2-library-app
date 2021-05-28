
  const express=require('express');
  const loginRouter=express.Router();
//   loginRouter.use(express.urlencoded({extended: true}));
   function login(nav){
  
    
    loginRouter.get('/',function(req,res){
        res.render("login",
        {
            nav,
            title:'Library'
        });
    })

    // app.post('/',function(req,res){
   //     const {email,username}=req.body;
   //     res.send(email)
   // })
     
    return loginRouter;
}

module.exports=login;

  const express=require('express');

const adminauthorRouter=express.Router();
adminauthorRouter.use(express.urlencoded({extended: true}));

function newauthor(nav){

    adminauthorRouter.get('/',function(req,res){
        res.render("addauthor",
        {
            nav,
            title:'Library',
        });
    })
  
     adminauthorRouter.post('/',function (req,res){
        data=req.body;
        console.log(data)
        // books.push(data);
        // console.log(books)
     })
  
     
    return adminauthorRouter;
  }

  module.exports=newauthor;

// requiring express
  const express=require('express');

// addbookrouter instance
  const adminbookRouter=express.Router();
  adminbookRouter.use(express.urlencoded({extended: true}));


// addbook router function (adminbook)
   function newbook(nav){
  
    adminbookRouter.get('/',function(req,res){
        res.render("addbook",
        {
            nav,
            title:'Library',
        });
    })
     adminbookRouter.post('/',function (req,res){
        data=req.body;
        console.log(data)
        // books.push(data);
        // console.log(books)
     })

     
    return adminbookRouter;
}


// exporting function 
module.exports=newbook;


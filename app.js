
//library app // Main Server

const express=require('express');
const app = new express();
//PORT
const port=process.env.PORT || 8000;

//navbar defining globally
const nav=[
    {
        link:'/books',
        name:'Books'
    },
    {
        link:'/authors',
        name:'Authors'
    },
    {
        link:'/signup',
        name:'SignUp'
    },
    
    {
        link:'/login',
        name:'Login'
    },
    {
        link:'/adminbook',
        name:'Add Book'
    },
    {
        link:'/adminauthor',
        name:'Add Author'
    }
];

//requiring booksRouter
const booksRouter=require('./src/routes/bookRoutes')(nav);
const authorsRouter=require('./src/routes/authorRoutes')(nav);
const signupRouter=require('./src/routes/signupRoutes')(nav);
const loginRouter=require('./src/routes/loginRoutes')(nav);
const adminbookRouter=require('./src/routes/addbookRoutes')(nav);
const adminauthorRouter=require('./src/routes/addauthorRoutes')(nav);

//middleware function..static
app.use(express.static('./public'));

// setting ejs    
app.set('view engine','ejs');  
app.set('views','./src/views');


app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use('/adminbook', adminbookRouter);
app.use('/adminauthor', adminauthorRouter);

// route
app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
})


app.listen(port,()=>{
    console.log("Server Ready at"+port);
});
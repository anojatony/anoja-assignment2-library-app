const express=require('express');
const booksRouter=express.Router();




function router(nav){
   
    var books=[
        {
            title:'Odayil Ninnu',
            author:'P. Kesavadev',
            genre:'Literature Novel',
            content:'Odayil Ninnu is a Malayalam novel written by Indian author P. Kesavadev in 1942. The protagonist of the novel is a rickshaw-puller named Pappu. The novel is one of the best known works of Kesavadev. Dev was in the forefront among the writers who employed new norms in the content and characterization in Malayalam fiction. Odayil Ninnu came as a shocking revelation that a finest piece of literature can be produced with commonplace themes and unconventional style of prose with ordinary mortals as heroes and heroines. Apart from the fact that the appearance of rickshaw puller was a thrilling experience at that time, the author blazed a new trail in Malayalam literature. ',
            img:"tom.jpg"
        },
        {
            title:'The Lord of the Rings',
            author:'J.R.R. Tolkien',
            genre:'Fantasy, Adventure',
            content:'The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien’s extensive knowledge of philology and folklore. The story concerns peoples such as hobbits, Elves, Men, Dwarves, Wizards, and Orcs (called goblins in The Hobbit), and centers on the Ring of Power made by the Dark Lord Sauron. Starting from quiet beginnings in the Shire, the story ranges across Middle-earth and follows the courses of the War of the Ring. The main story is followed by six appendices that provide a wealth of historical and linguistic background material, as well as an index listing every character, place, song, and sword.',
            img:"harry.jpg"
        },
        {
            title:'The 3 Mistakes of My Life',
            author:'Chetan Bhagat',
            genre:'Fiction',
            content:'The 3 Mistakes of my life is the third novel written by eminent Indian Author Chetan Bhagat. Based on cricket, business and religion, the novel is set against the backdrop of beautiful city Ahmedabad. Revolving around three young Indian boys Omi, Ishaan and Govind, the book goes on to narrate how the three are trying their best to make ends meet in the city. Mostly revolving around these three young fellows, the novel has almost everything that youngsters in India can relate to; from budding love story and betrayal to death, riots and suicide, the book touches upon a wide range of emotions and common perceptions in India',
            img:"paathu.jpg"
        }
    
        
        ]

    booksRouter.get('/',function(req,res){
        res.render("books",
        {
            nav,
            title:'Library',
            books
        });
    })
    
    //single book
    booksRouter.get('/:id',function(req,res){
        const id=req.params.id
        res.render('book',{
            nav,
            title:'Library',
            book:books[id]
        });
    });
    return booksRouter;
    
}


// module.exports=booksRouter;
module.exports=router;


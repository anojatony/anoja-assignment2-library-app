const express=require('express');
const authorsRouter=express.Router();

function route(nav){
    var authors=[
        {
            name:'P. Kesavadev',
            content:'P. Kesava Pillai, better known by his pen-name P. Kesavadev, was a novelist and social reformer of Kerala, India. He is remembered for his speeches, autobiographies, novels, dramas, short stories, and films. Odayil Ninnu, Nadhi, Bhrandalayam, Ayalkar (Central Academi Award-winning novel), Ethirppu (autobiography) and Oru Sundariyude Athmakadha are some among his 128 literary works. Kesavadev published his autobiography, Ethirppu, in 1959, which reflected his communist ideals. He was a recipient of Kerala Sahitya Akademi Fellowship. In 1964, Sahitya Akademi selected his work, Ayalkkar for their annual award for Novel.He was also a recipient of the Soviet Land Nehru Award.',
            img:"Kesa.jpg"
        },
        {
            name:'J.R.R. Tolkien',
            content:'J.R.R. Tolkien was an English fantasy author and academic. Tolkien settled in England as a child, going on to study at Exeter College. While teaching at Oxford University, he published the popular fantasy novels The Hobbit and The Lord of the Rings trilogy. The works have had a devoted international fan base and been adapted into award-winning blockbuster films. Tolkien at first intended The Lord of the Rings to be a childrens tale in the style of The Hobbit, but it quickly grew darker and more serious in the writing. Though a direct sequel to The Hobbit, it addressed an older audience, drawing on the immense backstory of Beleriand that Tolkien had constructed in previous years, and which eventually saw posthumous publication in The Silmarillion and other volumes.',
            img:"tol.jpg"
        },
        {
            name:'Chetan Bhagat',
            content:'Chetan Bhagat is an Indian author, columnist and screenwriter, who is popularly known for his English-language novels, mostly based on the lives of young urban middle class Indians. Bhagats novels have sold over seven million copies and in 2008, The New York Times quoted Bhagat as "the biggest selling English language novelist in India’s history". The Three Mistakes of Life was published under the banner of Rupa Publications; the 260 pages novel is a mix of cricket, friendship, religion, business, love and betrayal. The bestseller novel, similar to Chetan Bhagat’s other novels has been made into a movie too. ',
            img:"chetan.jpg"
        }
    
        
        ]
    
    authorsRouter.get('/',function(req,res){
        res.render("authors",
        {
            nav,
            title:'Library',
            authors
        });
    })
    
    //single author
    authorsRouter.get('/:ind',function(req,res){
        const ind=req.params.ind
        res.render('author',{
            nav,
            title:'Library',
            author:authors[ind]
        });
    });
    return authorsRouter;
}


module.exports=route;
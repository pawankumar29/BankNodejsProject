const express=require('express');
const app=express();
const hbs=require('hbs');
const path=require('path');
const port=process.env.port||8000;
//const codepath=path.join(__dirname,'source/');
const codepath1=path.join(__dirname,"./public");
const style=path.join(__dirname,"./source/style");
const file1=path.join(__dirname,"./source/views");


app.set('view engine',"hbs");
app.set('views',file1);
 app.use(express.static(codepath1));
 app.use(express.static(style));

app.get('/hello',(req,res)=>{
    res.render('file_1');
    
    
})
app.listen(port,()=>{
    console.log(codepath1);
});


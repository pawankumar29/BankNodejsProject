const express=require('express');
const app=express();
const hbs=require('hbs');
const path=require('path');
const port=process.env.port||8000;
const cors=require('cors');
app.use(express.static("./public/static_img"));
//const codepath=path.join(__dirname,'source/');
const codepath1=path.join(__dirname,"./public");
const style=path.join(__dirname,"./source/style");
const file1=path.join(__dirname,"./source/views");;
const mysql=require('mysql');
const { Z_ASCII } = require('zlib');
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:'bankDatabase'

});

con.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("connected");
    }
})
let data=[];
 async function fun(){
    let Name,Email,one;
 await con.query("select * from bank",(err,res)=>{
    if(err){
        console.log(err);
    }
    else{
        
         one=JSON.parse(JSON.stringify(res));
         Name=one[0].Name;
     
         console.log(Name);
       
    }
    
})

    return Name;

}


app.use(cors(
    {
    origin:'http://127.0.0.1:5500'
    }
))
app.set('view engine',"hbs");
app.set('views',file1);
 app.use(express.static(codepath1));
 app.use(express.static(style));
 app.use(express.json());
 app.use(express.urlencoded({extended:false}));

app.get('/hello',(req,resp)=>{
    let a=
        {Name:"pawan Kumar",
         Age:24};
    
    resp.json(a);});
    // con.query("select * from bank",(err,res)=>{
    //     if(err){
    //         console.log(err);
    //         res.send('error');
    //     }
    //     else{
           
    //         console.log(res);
    //       res.send("hello");
    //       //
    //     }
    //   }
       
 
    //    res.render(res);
    
    


app.get('/signup',(req,res)=>{
    // let a=
    //     {Name:"pawan Kumar",
    //      Age:24};
    
    res.render('file_1');
    
    
})

app.post('/signup',(req,res)=>{
 let d=[req.body.Name,req.body.Email,req.body.Mobile,req.body.Father,req.body.Mother,req.body.Password];
 let q1="select *from bank where Name=?&&Password=?";
 let d1=[req.body.Name,req.body.Password];

 con.query(q1,d1,(err,data1)=>{
         if(data1.length>0){
            console.log("sorry");
          res.render("Sorry");
         }
   else{
    let query="INSERT into bank SET Name=?,Email=?,Mobile=?,Father=?,Mother=?,Password=?";
    con.query(query,d);
   res.render("file_2")}
 }

)});

app.get('/Login',(req,res)=>{
   res.render('file_2');
})


app.post('/Login',(req,res)=>{
    let d=[req.body.Name,req.body.Password];
    let query="Select * from bank where (Name=?&&Password=?)";
    con.query(query,d,(err,data)=>{
         if(data.length>0){
            console.log(data);
            res.render('Welcome');
         }
         else{
            res.render('wrong');
         }
    })
})

app.get('/login/Interest',(req,res)=>{
      res.render('Interest');
})
    
// app.get('/Login/check',(req,res)=>{
//    console.log(req.body)
//     //   res.render('Balance',{
//     //     body:{
//     //         Name:"pawan",
//     //         Mobile:123

//     //     }
//     //   })
// })



app.listen(8001,()=>{
    
});


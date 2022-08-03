const http=require('http');
const app=require('./App');
http.createServer(app).listen(4000,()=>{
    console.log('running at 4000');
})
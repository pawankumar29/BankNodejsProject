

    let a1=fetch("http://localhost:8000/hello").then((res1)=>{
        res1.json().then((res2)=>{

          console.log(res2.Name);
          document.getElementById('a').textContent=res2.Name;
          return res2;
        })
   }
    //   res1.json().then((res2)=>{
    //       console.log(res2);
      )
   .catch((r)=>{
      console.log(r);
   });


 // let a={};

 // let {Name}=async function ram(){
 //    let a1=await fetch("http://localhost:8000/hello");
 //    let a2=await a1.json();
 //    console.log(a2.Name);
 //    return a2.Name;
 // }

 // console.log(Name);
   
    
 



const fetch = (method , url , cb) =>{
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () =>{
 if(xhr.readyState === 4){
   if(xhr.status === 200){
     cb(JSON.parse(xhr.responseText));

   }
 }
}
xhr.open(method , url)
xhr.send() 
}






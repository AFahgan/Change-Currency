const text = document.querySelector("#text")
const search = document.querySelector(".search")

const handelData = (data) =>{
 data.forEach(ele => {
   
   
 });
}
search.addEventListener("click" , (e) =>{
  e.preventDefault()
  const inputText = text.value
  console.log(inputText)
  fetch('GET' , url , handelData)
});


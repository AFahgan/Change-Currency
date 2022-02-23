const text = document.querySelector("#text")
const search = document.querySelector(".search")
const list =document.querySelector("#data-list")

// const handelData = (data) =>{
//  data.forEach(ele => {
   
   
//  });
// }

const searchData = (data) =>{
  const inputText = text.value
  const arr = Object.keys(data)
   const filterData = arr.filter((ele)=>{
   return (ele.toLowerCase().trim()).startsWith(inputText.toLowerCase().trim())
  });

  filterData.forEach((ele) =>{
    const option = document.createElement("option")
    option.textContent =ele
    option.value = ele;
    option.classList.add("data-list")
    list.appendChild(option)

  })
}


text.addEventListener("input" , () =>{
  list.innerHTML=""
  fetch("GET", "/search",searchData )
})



// search.addEventListener("click" , (e) =>{
//   e.preventDefault()
//   const inputText = text.value
//   console.log(inputText)
//   fetch('GET' , "/search" , handelData)
// });


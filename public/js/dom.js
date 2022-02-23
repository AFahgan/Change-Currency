const text = document.querySelector("#text");
const search = document.querySelector(".search");
const list = document.querySelector("#data-list");
const result = document.querySelector(".result");

text.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    search.click();
  }
});

const handelData = (data) => {
  const inputText2 = text.value;
  const title = document.createElement("h3");
  title.textContent = `1 ${inputText2}`;
  title.classList.add("maincurr");
  result.appendChild(title);
  const equal = document.createElement("span");
  equal.textContent = "Equals";
  equal.classList.add("equal");
  result.appendChild(equal);
  const price = document.createElement("h3");
  price.textContent = data.usd + ` ` + `  $ `;
  price.classList.add("maincurr");
  result.appendChild(price);
};

const searchData = (data) => {
  const inputText = text.value;
  const arr = Object.keys(data);
  const filterData = arr.filter((ele) => {
    return ele.toLowerCase().trim().startsWith(inputText.toLowerCase().trim());
  });

  filterData.forEach((ele) => {
    const option = document.createElement("option");
    option.textContent = ele;
    option.value = ele;
    option.classList.add("data-list");
    list.appendChild(option);
  });
};

text.addEventListener("input", () => {
  list.textContent = "";
  fetch("GET", "/search", searchData);
});

search.addEventListener("click", () => {
  result.textContent = "";

  const inputText2 = text.value;
  fetch("POST", "/results", handelData, inputText2);
});

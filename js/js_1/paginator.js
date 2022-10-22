import { data } from "./data.js";

const paginatorDiv = document.getElementById("paginator");

loadPage(1);

const btn = [...Array(Math.ceil(data.length / 2))].map((value, index) => {
  return `<button class="button_num btn">${index + 1}</button>`;
});

paginatorDiv.insertAdjacentHTML("beforeend", btn.join(""));

paginatorDiv.addEventListener("click", (e) => {
  for (let i = 0; i < 3; i++) {
    removePreviousPage("item");
    loadPage(e.target.innerText);
  }
});

function removePreviousPage(className) {
  let elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

function loadPage(page) {
  let leftBound = (page - 1) * 2;
  let pageData = data.slice(leftBound, leftBound + 2);
  console.log(pageData);
  addItems(paginatorDiv, pageData);
}

function addItems(selector, pageData) {
  let markUp = "";
  pageData.forEach((element) => {
    markUp += createMarkup(element); //todo если появляется один елемент
  });
  selector.insertAdjacentHTML("afterbegin", markUp);
}

function createMarkup(item) {
  return `
    <div class="item">
    <img class="blog_img" src="${item.userImage}" alt="design image" width="328">
        <div class="item_info">
          <h5 class="card_name">${item.category}</h5>
          <div class="article">
            <img class="article_img" src="./man_1.png" alt="man image" width="48">
            <div class="article_text">
                <h3 class="card_info">
                    ${item.title}
                </h3>
                <a href="${item.redirectLink}" class="blog_link">Read Now</a>
           </div>
        </div>
    </div>
</div>
`;
}

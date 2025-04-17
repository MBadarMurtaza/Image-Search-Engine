let form = document.getElementById("form");
let input = document.getElementById("searchBox");
let show = document.getElementById("result");
let more = document.getElementById("more");
const access = "_bumFHO-D5ukmN6gLg5oG89yrvAyNhKR_ajjxHIWVhk";
let keyword = "";
let page = 1;
async function searchImages() {
  keyword = input.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${access}&per_page=12`;
  let response = await fetch(url);
  const data = await response.json();
  if (page === 1) {
    show.innerHTML = "";
  }
  const results = data.results;
  results.map((result) => {
    const img = document.createElement("img");
    img.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(img);
    show.appendChild(imageLink);
  });
  more.classList.remove("hidden");
  more.classList.add("block");
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});
more.addEventListener("click", () => {
  page++;
  searchImages();
});

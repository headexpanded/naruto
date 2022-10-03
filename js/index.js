// get anime titles, let user choose one
let animeLst = [];
const frm = document.getElementById("frm");
const sel = document.getElementById("searchBar");

function fetcher(selVal) {
  fetch("https://api.jikan.moe/v4/anime?q=" + selVal)
    .then((response) => {
      return response.json();
    })
    .then((anime) => {
      animeLst = anime.data;
      console.log(animeLst);

      console.log(animeLst[0].title);

      for (index = 0; index < animeLst.length; index++) {
        const { title } = animeLst[0];
        console.log(title);
      }

      const title = document.querySelector("#movieTitle");
      const synopsis = document.querySelector("#synopsis");
      title.textContent = animeLst[0].title;
      synopsis.textContent = animeLst[0].synopsis;
    });
}
// data[index].title
fetcher();

frm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (sel.value !== "") fetcher(sel.value);
});

const btn = document.querySelector("burger button");
const menu = document.querySelector("div");

btn.onclick = () => hide(menu);

function hide(el) {
  el.classList.contains("display-none") ? el.classList.remove("display-none") : el.classList.add("display-none");
}

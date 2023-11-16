document.getElementById("carousel-next").onclick = function () {
  let lists = document.querySelectorAll(".carousel-item");
  document.getElementById("carousel-slidee").appendChild(lists[0]);
  let lists2 = document.querySelectorAll(".carousel-video-wrapper");
  document.getElementById("carousel-slidee-vid").appendChild(lists2[0]);
};
document.getElementById("carousel-prev").onclick = function () {
  let lists = document.querySelectorAll(".carousel-item");
  document.getElementById("carousel-slidee").prepend(lists[lists.length - 1]);
  let lists2 = document.querySelectorAll(".carousel-video-wrapper");
  document.getElementById("carousel-slidee-vid").prepend(lists2[lists2.length - 1]);
};
var prevButton = document.getElementById("carousel-prev");
for (var i = 0; i < 7; i++) {
  prevButton.click();
}
console.clear();

var textPath = document.querySelector("#text-path");

var textContainer = document.querySelector("#text-container");

var path = document.querySelector(textPath.getAttribute("href"));

var pathLength = path.getTotalLength();
console.log(pathLength);

function updateTextPathOffset(offset) {
  textPath.setAttribute("startOffset", offset);
}

updateTextPathOffset(pathLength);

function onScroll() {
  requestAnimationFrame(function () {
    var rect = textContainer.getBoundingClientRect();
    var scrollPercent = rect.y / window.innerHeight;
    console.log(scrollPercent);
    updateTextPathOffset(scrollPercent * 2 * pathLength - 300);
  });
}

window.addEventListener("scroll", onScroll);

window.addEventListener("scroll", function () {
  var sections = document.querySelectorAll(".fade-in");

  sections.forEach(function (section) {
    var sectionTop = section.getBoundingClientRect().top;
    var sectionBottom = section.getBoundingClientRect().bottom;

    if (sectionTop < window.innerHeight && sectionBottom > 0) {
      section.classList.add("fade-in-visible");
    } else {
      section.classList.remove("fade-in-visible");
    }
  });
});

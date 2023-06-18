//https://stackoverflow.com/questions/10147283/jump-to-anchor-tag-without-showing-hashtag-in-url
function scrollSmoothTo(elementId) {
  let element = document.getElementById(elementId);
  element.scrollIntoView({ 
    block: 'start', 
	behavior: 'smooth'
	});
}

//https://dev.to/areeburrub/change-nav-link-s-style-as-you-scroll-4p62
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");}
  });

  navLi.forEach(li => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};
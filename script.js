// Typed.js animation
var typed = new Typed('#element', {
  strings: ['Developer', 'Data Analyst'],
  typeSpeed: 50,
  loop: true
});

// Tab switcher
function openTab(tabName) {
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");

  for (let link of tablinks) {
    link.classList.remove("active-link");
  }
  for (let content of tabcontents) {
    content.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

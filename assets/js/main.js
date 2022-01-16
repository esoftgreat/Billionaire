const collapseTrigger = document.querySelectorAll(".collapse-trigger");
const FaqBox = document.querySelectorAll(".faq-box");

FaqBox.forEach((box) => {
  box.onclick = function () {
    const collapseButton = this.querySelector(".collapse-trigger");
    triggerCollapse(collapseButton);
  };
});

function triggerCollapse(el) {
  const collapseTarget = el.parentElement.parentElement.querySelector(".collapse-item");
  const faqBox = collapseTarget.parentElement;
  console.log("test");
  collapseTarget.classList.toggle("show");
  faqBox.classList.toggle("active");
}

function openNav() {
  const sideNavbar = document.querySelector(".side-navbar");

  sideNavbar.classList.add("active");
}
function closeNav() {
  const sideNavbar = document.querySelector(".side-navbar");

  sideNavbar.classList.remove("active");
}

window.onscroll = function () {
  const nav = document.querySelector("nav");
  console.log("test");
  if (document.documentElement.scrollTop >= 100) {
    nav.style.background = "linear-gradient(rgb(255, 177, 112), rgb(250, 167, 99))";
  } else {
    nav.style.background = "transparent";
  }
};

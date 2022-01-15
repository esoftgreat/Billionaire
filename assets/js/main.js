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

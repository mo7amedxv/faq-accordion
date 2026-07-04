const btns = document.querySelectorAll(".faq-question");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const parentItem = btn.parentElement;
    parentItem.classList.toggle("active");
    const clickedIcon = parentItem.querySelector(".icon");
    if (parentItem.classList.contains("active")) {
      clickedIcon.src = "assets/images/icon-minus.svg";
    } else {
      clickedIcon.src = "assets/images/icon-plus.svg";
    }
  });
});

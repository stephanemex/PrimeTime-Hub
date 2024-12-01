// script.js
document.querySelectorAll(".tool").forEach((tool) => {
  tool.addEventListener("mouseover", () => {
    tool.querySelector("p").style.opacity = "1";
  });
  tool.addEventListener("mouseout", () => {
    tool.querySelector("p").style.opacity = "0.8";
  });
});

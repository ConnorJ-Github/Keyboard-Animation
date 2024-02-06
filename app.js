var root = document.querySelector(":root");
var rootStyles = getComputedStyle(root);

var xAxis = rootStyles.getPropertyValue("--xAxis");
var yAxis = rootStyles.getPropertyValue("--yAxis");

console.log("X axis: ", xAxis);
console.log("y axis: ", yAxis);

document.addEventListener("keydown", (event) => {
  event = event;
  let charCode = event.keyCode;

  //console.log(charCode);

  const activeKey = document.querySelectorAll(".k" + charCode);

  //console.log(activeKey);

  activeKey.forEach((activeKey) => {
    document.querySelector(".active")?.classList.remove("active");
    activeKey.classList.add("active");
  });

  randomLoc();
});

function randomLoc() {
  let xAxis = Math.floor(Math.random() * 400) + "px";
  let yAxis = Math.floor(Math.random() * 400) + "px";

  root.style.setProperty("--xAxis", xAxis);
  root.style.setProperty("--yAxis", yAxis);
}

var divSubLoading = document.querySelector("#div-sub-loading");
var txtNumber = document.querySelector("#txt-number");

var count = 0;
var counter;

window.setInterval(function () {
  load();
}, 150);

function load() {
  count++;
  // divSubLoading.style.width = 5 + count + "%";
  txtNumber.textContent = 5 + count;
  divSubLoading.style.width = 5 + parseInt(txtNumber.textContent) + "%";
  if (txtNumber.textContent === "100") {
    divSubLoading.style.width = "0%";
    count = 0;
  }
  // console.log("Counter is " + count);
}

document.addEventListener("DOMContentLoaded", function () {


  const form = document.getElementById("convertForm");
  const metersInput = document.getElementById("meters");
  const unitSelect = document.getElementById("unit");


  form.addEventListener("submit", function (e) {

    e.preventDefault();
    const meters = Number(metersInput.value);
    const factor = Number(unitSelect.value);
    const unitName = unitSelect.options[unitSelect.selectedIndex].dataset.name;

    let result = meters * factor;
    alert(meters + " meters are exactly " + result + " " + unitName + " long");

  });
});
console.log("Hello from embedded JavaScript");
console.log("hello world")
alert("hello world")
const value = 1.0936132983
let number = 299
console.log("the number is "+ number)
function convert(a){
return a * value
}
if (convert(number) >= 300){
console.log("That is a really long golf drive")
}
else {console.log("this is nothing")}

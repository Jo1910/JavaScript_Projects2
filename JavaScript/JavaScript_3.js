function dessType(dessert) {
  var dessertType = dessert.getAttribute("data-dessert-type");
  alert(dessert.innerHTML + " belongs to the " + dessertType + " dessert type.");
}
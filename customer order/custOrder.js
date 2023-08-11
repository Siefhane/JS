var amount = document.getElementById("amount");
amount.innerText = 0;
var flag = false;
function OrderNow(event) {
  document.getElementById("default").style.display = "block";
  document.getElementById("noCart").style.display = "none";

  var price = parseInt(
    document.getElementById(event.target.className).innerText
  );
  console.log(price);
  document.getElementById("subtotal").innerText = price;
  var fee = document.getElementById("fee").innerText;
  if (flag == false) {
    amount.innerText = parseInt(amount.innerText) + price + parseInt(fee);
  } else {
    amount.innerText = parseInt(amount.innerText) + price;
  }

  flag = true;
}

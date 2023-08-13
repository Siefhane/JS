var amount = document.getElementById("amount");
amount.innerText = 0;
var arr = new Array();
var flag = false;
function OrderNow(event) {
  document.getElementById("default").style.display = "block";
  document.getElementById("noCart").style.display = "none";

  var price = parseInt(
    document.getElementById(event.target.className).textContent
  );
  arr.unshift(
    document.getElementById("p" + event.target.className.substring(4)).innerText
  );
  console.log(arr[0]);
  document.getElementById("subtotal").innerText = price;
  var fee = document.getElementById("fee").innerText;
  if (flag == false) {
    amount.innerText = parseInt(amount.innerText) + price + parseInt(fee);
  } else {
    amount.innerText = parseInt(amount.innerText) + price;
  }

  flag = true;
}

function SendMessage() {
  confirm("You ordered: " + arr);
}

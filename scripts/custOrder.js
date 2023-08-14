var amount = document.getElementById("amount");
amount.innerText = 0;
var flag = false;
function OrderNow(event) {
  document.getElementById("default").style.display = "block";
  document.getElementById("noCart").style.display = "none";
  console.log(plate)
  var price = parseInt(
    document.getElementById(event.target.className).innerText
  );
  console.log(price);
  document.getElementById("subtotal").innerText = price;
  var fee = document.getElementById("fee").innerText;
  var fees = document.getElementById("fee");
  if (flag == false) {
    amount.innerText = parseInt(amount.innerText) + price + parseInt(fee);
  } else {
    amount.innerText = parseInt(amount.innerText) + price;
  }
  let total= amount.innerText
  let delevry=fees.innerText
  setCookie("myCookie", total, delevry, 7);
  flag = true;
}
function setCookie(name, value1, value2, expirationDays) {
  var combinedValue = value1 + ';' + value2;
  var date = new Date();
  date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + encodeURIComponent(combinedValue) + ";" + expires + ";path=/";
}

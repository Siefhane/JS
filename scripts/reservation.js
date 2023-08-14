function reserve(e) {
  var name = document.getElementById("name").value;
  var number = document.getElementById("number").value;
  var number2 = document.getElementById("number2").value;
  var date = document.getElementById("date").value;
  if (name != "" && number != "" && number2 != "" && date != "") {
    if (document.getElementById("fawry").checked) {
      var num = Math.floor(Math.random() * 1234875);
      var ele = document.createElement("h2");
      ele.id = "h2";
      ele.innerText =
        "Your Fawry code is: " +
        num +
        ". Please pay before the end of this week";
      ele.style.marginTop = "50px";
      document.body.appendChild(ele);
      alert("Order submitted successfully!");
      e.preventDefault();
    } else if (document.getElementById("cash").checked) {
      alert("Order submitted successfully!");
    } else {
      alert("Complete your data!");
    }
  }
}

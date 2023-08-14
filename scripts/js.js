function getCookie(name) {
    var cookieArr = document.cookie.split(";");
  
    for (var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split("=");
  
      if (name === cookiePair[0].trim()) {
        return decodeURIComponent(cookiePair[1]);
      }
    }
  
    return null;
  }
  
  // Retrieve the cookie value
  var cookieValue = getCookie("myCookie");
  
  if (cookieValue) {
    var values = cookieValue.split(';');
    var value1 = values[0];
    var value2 = values[1];
    console.log(value1); 
    console.log(value2); 
  }
var date= Date().substring(0,24);
var randomNumber = Math.floor(Math.random() * 10001);
var dateI=document.getElementById('dateNow')
var CODE=document.getElementById('codeV')
var Dvalue=document.getElementById('Dvalue')
var input=document.getElementById('pay')
var loading=document.getElementById('loading')
var Tvalue=document.getElementById('Tvalue')
dateI.innerText=date
CODE.innerText="#"+" "+randomNumber
Dvalue.innerText= value2 + "  "+"$"
Tvalue.innerText= value1 + "  "+"$"
var interval
loading.style.display="none"
function paynow(){
    input.value=""
        loading.style.display="flex"
    interval=setInterval(()=>{
        input.value="Pay now"
        loading.style.display="none"
        },9000)
}

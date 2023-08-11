var users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    { username: "user3", password: "password3" },
    { username: "user4", password: "password4" },
  ];
  document.getElementById('loginform').addEventListener("submit",function(event){
    event.preventDefault();
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    var login=users.find(function(user){
        return user.username === username && user.password === password;
    })
    if(login){
        window.location.href="/home/index.html"
    }else{
        alert("Invalid username or password.")
    }
  })

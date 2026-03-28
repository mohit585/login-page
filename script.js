function showLogin() {
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("signupForm").classList.add("hidden");
}
function showSignup(){
  document.getElementById("signupForm").classList.remove("hidden");
  document.getElementById("loginForm").classList.add("hidden");
}
document.getElementById("signupForm").addEventListener("submit",function(e){e.preventDefault();
let name = document.getElementById("signupName").value;
let email = document.getElementById("signupEmail").value;
let password = document.getElementById("signupPassword").value;

let user={
  name: name,
  email:email,
  password:password,
};
localStorage.setItem("user",JSON.stringify(user));
document.getElementById("signupMessage").innerText="signup successful!";
});

document.getElementById("loginForm").addEventListener("submit",function(e){e.preventDefault();

  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;
  let storedUser = JSON.parse(localStorage.getItem("user"));

  if (storedUser) {
    if (email=== storedUser.email && password=== storedUser.password) {
      document.getElementById("loginMessage").innerText="Login Successful!";
    }else{
      document.getElementById("loginMessage").innerText="invalid Credential!";
    }
  }else{
      document.getElementById("loginMessage").innerText="no user found. plz signup first";
    }
  });

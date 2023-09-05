const ploginEl = document.getElementById("login");
const psignupEl = document.getElementById("signup");
const loginformEl = document.getElementById("loginform");
const signupformEl = document.getElementById("signupform");
const floginEl = document.getElementById("fsignin");
const footsignupEl = document.getElementById("create");
const fsignupEl = document.getElementById("fsignup");
const footloginEl = document.getElementById("signin");
const formcloseEl = document.getElementById("close");
const formcloseEl1 = document.getElementById("close1");
const home = document.querySelector(".home");
const pwhide = document.querySelectorAll(".lock");

ploginEl.addEventListener("click", showloginpage);
psignupEl.addEventListener("click", showsignuppage);
formcloseEl.addEventListener("click", removeloginsignuppage);
formcloseEl1.addEventListener("click", removeloginsignuppage);
footloginEl.addEventListener("click", showloginpage);
footsignupEl.addEventListener("click", showsignuppage);

const emailvl = document.getElementById("email1").value;
const passvl = document.getElementById("pass1").value;
const cpassvl = document.getElementById("cpass1").value;

    


  

function showloginpage() {
  loginformEl.classList.add("show");
  signupformEl.classList.remove("show");
}

function showsignuppage() {
  loginformEl.classList.remove("show");
  signupformEl.classList.add("show");
}
function removeloginsignuppage() {
  signupformEl.classList.remove("show");
  loginformEl.classList.remove("show");
}

pwhide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getpwinput = icon.parentElement.querySelector("input");
    if (getpwinput.type === "password") {
      getpwinput.type = "text";
      icon.classList.replace("fa-eye-slash", "fa-eye");
    } else {
      getpwinput.type = "password";
      icon.classList.replace("fa-eye", "fa-eye-slash");
    }
  });
});

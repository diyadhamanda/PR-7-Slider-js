let loginBtn = document.querySelector("#loginBtn");
let signupBtn = document.querySelector("#signupBtn");
let formSlider = document.querySelector("#formSlider");

loginBtn.onclick = () => {
  formSlider.classList.remove("move-left");
  loginBtn.classList.add("active");
  signupBtn.classList.remove("active");
};

signupBtn.onclick = () => {
  formSlider.classList.add("move-left");
  signupBtn.classList.add("active");
  loginBtn.classList.remove("active");
};

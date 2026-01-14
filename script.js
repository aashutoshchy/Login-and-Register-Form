const signUpButton = document.querySelector("#signUpButton");
const signInButton = document.querySelector("#signInButton");
const signUp = document.getElementById("signUp");
const signIn = document.getElementById("signIn");

signUpButton.addEventListener("click", () => {
  signIn.classList.add("display-none");
  signUp.classList.remove("display-none");
});

signInButton.addEventListener("click", () => {
  signUp.classList.add("display-none");
  signIn.classList.remove("display-none");
});

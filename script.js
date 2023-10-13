"use strict";

let form = document.forms.createYourAccount;
let firstName = form.firstName;
let secondName = form.secondName;
let email = form.emailAddress;
let choiceGender = form.choice;
let position = form.position;
let check = form.checkbox;
let singUp = form.singUp;

let profile = document.querySelector(".profile");
let imgProfile = document.querySelector(".imgProfile");
let nameProfile = document.querySelector(".nameProfile");
let emailProfile = document.querySelector('.emailProfile');
let positionProfile = document.querySelector('.positionProfile');

firstName.addEventListener("blur", function () {
    nameProfile.innerHTML = firstName.value + " " + secondName.value;
});
secondName.addEventListener("blur", function () {
    nameProfile.innerHTML = firstName.value + " " + secondName.value;
});
email.addEventListener("blur", function () {
    emailProfile.innerHTML = email.value;
});
position.addEventListener("blur", function () {
    positionProfile.innerHTML = position.value;
});

check.addEventListener("click", function () {
  check.checked
    ? (singUp.style.backgroundColor = "rgb(0, 179, 0)")
    : (singUp.style.backgroundColor = "rgb(146, 169, 156)");
});

singUp.addEventListener("click", function (event) {
  if (choiceGender.value === "man") {
    imgProfile.classList.add("imgMen");
  } else if (choiceGender.value === "woman") {
    imgProfile.classList.add("imgWomen");
  }
  if (!check.checked) {
    return;
  }
  form.classList.add("hidden");
  profile.classList.remove("hidden");
  event.preventDefault();
});

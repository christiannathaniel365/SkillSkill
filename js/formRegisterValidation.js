document.addEventListener("DOMContentLoaded", (e) => {
  const register = document.getElementById("formRegister");
  const date = new Date();

  const dob = document.getElementById("dateBirth");
  dob.valueAsDate = date;
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const parentPass = password.closest(".passwordForm");
  const parentConfirmPass = confirmPassword.closest(".confirmPasswordForm");
  setupPasswordVisibility(password, parentPass);
  setupPasswordVisibility(confirmPassword, parentConfirmPass);

  // password visible

  // Register Code
  console.log(register);
  register.addEventListener("submit", (exc) => {
    exc.preventDefault();
    const submitBtn = document.getElementById("btnSubmit");
    submitBtn.classList.remove("btnHover");
    submitBtn.classList.add("btnDisable");
    submitBtn.disabled = true;
    console.log(submitBtn);

    const email = document.getElementById("email");
    const gender = document.getElementsByName("gender");
    const username = document.getElementById("username");
    const genderForm = document.querySelector(".genderForm");

    if (email.value.length == 0) {
      errorMessage(email, "Email cannot be empty!");
    } else if (email.value.length < 5) {
      errorMessage(email, "Email is too short");
    } else if (!email.value.includes("@")) {
      errorMessage(email, "Email is not valid");
    }

    if (username.value.length == 0) {
      errorMessage(username, "Username cannot be empty!");
    } else if (username.value.length < 8) {
      errorMessage(username, "Username is too short");
    }

    let dobDate = new Date(dob.value);
    if (date.getFullYear() >= dobDate.getFullYear()) {
      errorMessage(
        dob,
        "Year of birth must not be more or equals to this year!",
      );
    }

    if (!gender[0].checked && !gender[1].checked) {
      console.log(gender[1]);
      console.log(genderForm);
      genderForm.querySelector("#errMsg").style.display = "block";
      genderForm.querySelector("#errMsg").innerText = "Choose your gender";
      setTimeout(() => {
        genderForm.querySelector("#errMsg").style.display = "none";
      }, 3000);
    }
    if (password.value.length == 0) {
      passErrorMessage(password, parentPass, "Password cannot be empty!");
    } else if (password.value.length < 8) {
      passErrorMessage(password, parentPass, "Password is too short");
    }

    if (confirmPassword.value.length == 0) {
      passErrorMessage(
        confirmPassword,
        parentConfirmPass,
        "Please Confirm your Password!",
      );
    } else if (password.value != confirmPassword.value) {
      passErrorMessage(
        confirmPassword,
        parentConfirmPass,
        "Your Confirm is different!",
      );
    }

    console.log(email.value);
    console.log(username.value);
    setTimeout(() => {
      submitBtn.classList.add("btnHover");
      submitBtn.classList.remove("btnDisable");
      submitBtn.disabled = false;
    }, 3000);
  });

  function errorMessage(input, message) {
    input.classList.add("errInp");
    input.nextElementSibling.style.display = "block";
    input.nextElementSibling.innerText = `${message}`;
    setTimeout(() => {
      input.classList.remove("errInp");
      input.nextElementSibling.style.display = "none";
    }, 3000);
  }
  function passErrorMessage(input, parent, message) {
    input.classList.add("errInp");
    parent.querySelectorAll("button").forEach((btn) => {
      btn.classList.add("errBtn");
    });
    console.log(parent.nextElementSibling);

    parent.nextElementSibling.style.display = "block";
    parent.nextElementSibling.innerText = `${message}`;
    setTimeout(() => {
      parent.querySelectorAll("button").forEach((btn) => {
        btn.classList.remove("errBtn");
      });
      input.classList.remove("errInp");
      parent.nextElementSibling.style.display = "none";
    }, 3000);
  }
  function setupPasswordVisibility(input, parent) {
    const btnHidden = parent.querySelector(".btnHidden");
    const btnNonHidden = parent.querySelector(".btnNonHidden");

    input.addEventListener("focus", () => {
      parent.querySelectorAll("button").forEach((btn) => {
        btn.classList.add("activebtn");
      });
    });

    input.addEventListener("blur", () => {
      parent.querySelectorAll("button").forEach((btn) => {
        btn.classList.remove("activebtn");
      });
    });

    btnHidden.addEventListener("click", () => {
      btnHidden.style.display = "none";
      input.type = "text";
      btnNonHidden.style.display = "block";
    });

    btnNonHidden.addEventListener("click", () => {
      btnNonHidden.style.display = "none";
      input.type = "password";
      btnHidden.style.display = "block";
    });
  }
});

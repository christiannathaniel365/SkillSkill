document.addEventListener("DOMContentLoaded", (e) => {
  const login = document.getElementById("formLogin");

  const password = document.getElementById("password");
  const parentPass = password.closest(".passwordForm");

  setupPasswordVisibility(password, parentPass);

  // Register Code
  login.addEventListener("submit", (exc) => {
    exc.preventDefault();
    const submitBtn = document.getElementById("btnLogin");
    submitBtn.classList.remove("btnHover");
    submitBtn.classList.add("btnDisable");
    submitBtn.disabled = true;
    console.log(submitBtn);

    const email = document.getElementById("email");

    if (email.value.length == 0) {
      errorMessage(email, "Email cannot be empty!");
    } else if (email.value.length < 5) {
      errorMessage(email, "Email is too short");
    } else if (!email.value.includes("@")) {
      errorMessage(email, "Email is not valid");
    }

    if (password.value.length == 0) {
      passErrorMessage(password, parentPass, "Password cannot be empty!");
    } else if (password.value.length < 8) {
      passErrorMessage(password, parentPass, "Password is too short");
    }

    console.log(email.value);
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

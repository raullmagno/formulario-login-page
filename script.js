const submitButton = document.getElementById("buttonSubmit");

function analysis(event) {
  event.preventDefault();
  const emailInput = document.getElementById("header-email").value;
  const passInput = document.getElementById("header-senha").value;

  if (emailInput === "tryber@test.com" || passInput === "123456") {
    alert("Olá tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
}

submitButton.addEventListener("click", analysis);

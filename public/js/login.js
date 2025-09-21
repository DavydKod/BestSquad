async function login() {
  const username = document.getElementById("enterUsername").value;
  const password = document.getElementById("enterPassword").value;
  /*
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  if (data.success) {
    showMenu();//or show admin menu
  } else {
    alert("Невірний логін або пароль");
  }*/
  showMenu();
}

async function showMenu() {
  const loginSection = document.getElementById("login");
  const menuSection = document.getElementById("menu");

  loginSection.classList.add("hidden");
  menuSection.classList.remove("hidden");
}

async function showAdminMenu() {
  const loginSection = document.getElementById("login");
  const menuSection = document.getElementById("menu");

  loginSection.classList.add("hidden");
  menuSection.classList.remove("hidden");
  document.getElementById("adminStory").classList.remove("hidden");
}

async function showStory() {
  document.getElementById("menu").classList.add("hidden");
  document.getElementById("showMyStory").classList.remove("hidden");
}

async function showStoryForAdmin() {
  document.getElementById("menu").classList.add("hidden");
  document.getElementById("showStoryForAdmin").classList.remove("hidden");
}

async function returnToMenu() {
  document.getElementById("showMyStory").classList.add("hidden");
  document.getElementById("menu").classList.remove("hidden");
}

async function returnToAdminMenu() {
  document.getElementById("showStoryForAdmin").classList.add("hidden");
  document.getElementById("menu").classList.remove("hidden");
}

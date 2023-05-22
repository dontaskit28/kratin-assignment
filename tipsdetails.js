document.getElementById("uname").textContent = localStorage.getItem("name");
document.getElementById("uweight").textContent = localStorage.getItem("weight");
document.getElementById("uproblem").textContent =
  localStorage.getItem("problem");
document.getElementById("ugender").textContent = localStorage.getItem("gender");

const NoDiseaseSelected = document.getElementById("NoDiseaseSelected");

function navigateToPage() {
  localStorage.removeItem("diseases");
  // navigate to selectdiseases.html
  window.location.href = "selectdiseases.html";
}

const diseasesArray = JSON.parse(localStorage.getItem("diseases"));

const arrayOfNine = [1, 2, 3, 4, 5, 6, 7, 8, 9];

if (diseasesArray.length === 0) {
  NoDiseaseSelected.textContent =
    "Ahh, It seems like you don't have any of the mentioned conditions";
}

arrayOfNine.map((number) => {
  if (diseasesArray.find((each) => each === number)) {
    document.getElementById(`d${number}`).style.display = "inline";
  } else {
    document.getElementById(`d${number}`).style.display = "none";
  }
});

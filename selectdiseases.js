function navigateToDetails() {
  let diseasesList = [];
  for (let i = 1; i < 10; i++) {
    const disease = document.getElementById(i).checked;
    if (disease) {
      diseasesList.push(i);
    }
  }
  console.log(JSON.stringify(diseasesList));
  console.log(diseasesList.length);
  localStorage.setItem("diseases", JSON.stringify(diseasesList));

  // navigate to tipsdetails.html
  window.location.href = "tipsdetails.html";
}

function checkboxStatusChange(checkboxId) {
  const checkbox = document.getElementById(checkboxId);
  const label = document.getElementById(`l${checkboxId}`);
  if (checkbox.checked) {
    label.style.color = "#000000";
  } else {
    label.style.color = null;
  }
}

function navigateToLogin() {
  localStorage.clear();

  //navigate to index.html
  window.location.href = "index.html";
}

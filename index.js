let myFormEl = document.getElementById("myForm");

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let ageEl = document.getElementById("age");
let ageErrMsgEl = document.getElementById("ageErrMsg");

let heightEl = document.getElementById("height");
let heightErrMsgEl = document.getElementById("heightErrMsg");

let weightEl = document.getElementById("weight");
let weightErrMsgEl = document.getElementById("weightErrMsg");

let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");

let formData = {
  name: "",
  age: "",
  height: "",
  weight: "",
  gender: "Male",
};

nameEl.addEventListener("change", function (event) {
  let nameElValue = event.target.value;
  if (nameElValue === "") {
    nameErrMsgEl.textContent = "Required*";
  } else {
    nameErrMsgEl.textContent = "";
  }
  formData.name = nameElValue;
});

ageEl.addEventListener("change", function (event) {
  let ageElValue = event.target.value;
  if (ageElValue === "") {
    ageErrMsgEl.textContent = "Required*";
  } else {
    ageErrMsgEl.textContent = "";
  }
  formData.age = ageElValue;
});

heightEl.addEventListener("change", function (event) {
  let heightElValue = event.target.value;
  if (heightElValue === "") {
    heightErrMsgEl.textContent = "Required*";
  } else {
    heightErrMsgEl.textContent = "";
  }
  formData.height = heightElValue;
});

weightEl.addEventListener("change", function (event) {
  let weightElValue = event.target.value;
  if (weightElValue === "") {
    weightErrMsgEl.textContent = "Required*";
  } else {
    weightErrMsgEl.textContent = "";
  }
  formData.weight = weightElValue;
});
genderMaleEl.addEventListener("change", function (event) {
  formData.gender = event.target.value;
});
genderFemaleEl.addEventListener("change", function (event) {
  formData.gender = event.target.value;
});

function checkValidFormDetails(formData) {
  var flag = 0;
  if (formData.name === "") {
    nameErrMsgEl.textContent = "Required*";
    flag = 1;
  }
  if (formData.age === "") {
    ageErrMsgEl.textContent = "Required*";
    flag = 1;
  }
  if (formData.height === "") {
    heightErrMsgEl.textContent = "Required*";
    flag = 1;
  }
  if (formData.weight === "") {
    weightErrMsgEl.textContent = "Required*";
    flag = 1;
  }
  if (flag === 1) {
    return false;
  }
  return true;
}

myFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(formData);
  if (!checkValidFormDetails(formData)) {
    return;
  }

  //navigate to selectdiseases.html
  window.location.href = "selectdiseases.html";

  localStorage.setItem("name", formData.name);
  localStorage.setItem("age", formData.age);
  localStorage.setItem("height", formData.height);
  localStorage.setItem("weight", formData.weight);

  if (genderFemaleEl.checked) {
    localStorage.setItem("gender", "Ms.");
  } else {
    localStorage.setItem("gender", "Mr.");
  }

  let problem = "";
  if (formData.height - 100 < formData.weight) {
    problem = "Over weight";
  } else if (formData.height - 100 > formData.weight) {
    problem = "Under weight";
  } else {
    problem = "Ideal weight";
  }
  localStorage.setItem("problem", problem);

  nameElValue = "";
  ageElValue = "";
  heightElValue = "";
  weightElValue = "";
});

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
// const msg = document.querySelector('#.msg');
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onsubmit);

function onsubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    alert("please enter fields");
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    userList.appendChild(li);

    //clear field
    nameInput.value = "";
    emailInput.value = "";
  }

  console.log(nameInput.value);
}

const links = document.getElementById("nav-links");
const wrapper = document.querySelector(".wrapper");
const hamburger =document.getElementById("hamburger");
const iconClose = document.querySelector(".icon-close");
let optionMenu = document.querySelector(".select-menu"),
  selectBtn = document.querySelector(".select-btn"),
  option = document.querySelectorAll(".option"),
  sBtn_text = document.querySelector(".sBtn-text"),
  selectedReason = document.getElementById("selectedReason"),
  errorMessage = document.getElementById("error-message");

// ------------active link------------
document.querySelectorAll(".link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    document
      .querySelectorAll(".link")
      .forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  });
});

document.querySelector(".delete-btn").addEventListener("click", () => {
  document.querySelector(".delete-btn").classList.toggle("active");
  links.classList.remove("active");
  if (wrapper.classList.contains("active-popup")) {
    wrapper.classList.remove("active-popup");
  } else {
    wrapper.classList.add("active-popup");
  }
  if (hamburger.textContent.trim() === '☰') {
    hamburger.textContent = '✗'; // Change to cross icon
} else {
    hamburger.textContent = '☰'; // Change back to hamburger icon
}
});
iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

// ------------MEDAI QUERY------------
hamburger.addEventListener("click", function () {
  links.classList.toggle("active");
  if (this.textContent.trim() === '☰') {
    this.textContent = '✗'; // Change to cross icon
} else {
    this.textContent = '☰'; // Change back to hamburger icon
}
}

);

// ---------------dropdown----------------------

selectBtn.addEventListener("click", () => {
  optionMenu.classList.toggle("active");
});

option.forEach((option) => {
  option.addEventListener("click", () => {
    let selectOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectOption;
    selectedReason.value = selectOption;
    // console.log(selectOption);
    optionMenu.classList.remove("active");
  });
});

document.getElementById("sure").addEventListener("click", (event) => {
  console.log(selectedReason.value);
  if (!validateForm()) {
    event.preventDefault(); // Prevent form submission
  }
});
// document.getElementById('sure').addEventListener('click', (event) => {
//   if (!validateForm()) {
//       event.preventDefault(); // Prevent form submission
//   }
// });
document.getElementById("confirm-btn").addEventListener("click", (event) => {
  if (!validateForm()) {
    
    // Only submit if validation is successful
    sendEmail();
    function sendEmail() {
      var templateParams = {
        form_name: document.querySelector('input[type="text"]').value.trim(),
        form_email: document.querySelector('input[type="email"]').value.trim(),
        number: document.getElementById("phone-number").value.trim(),
        reason: document.getElementById("selectedReason").value.trim(),
      };
      emailjs
        .send("service_2w37zam", "template_uwj5a9h", templateParams)
        .then(  (response) => {
          console.log("Params:", templateParams);
          window.location.href = 'thanks.html';
        });
          
         
    
  }}
});

function validateForm() {
  const name = document.querySelector('input[type="text"]').value.trim();
  const email = document.querySelector('input[type="email"]').value.trim();
  const number = document.getElementById("phone-number").value.trim();
  const selectedReason = document.getElementById("selectedReason").value.trim();
  const errorMessage = document.getElementById("error-message");
  const checkbox = document.querySelector('input[type="checkbox"]').checked;

  const numberPattern = /^\d{10}$/; // Regex for exactly 10 digits

  if (
    name === "" ||
    email === "" ||
    number === "" ||
    selectedReason === "" ||
    !checkbox
  ) {
    errorMessage.textContent =
      "Please fill out all fields and check the checkbox.";
    errorMessage.style.display = "block";
    return false;
  } else if (!numberPattern.test(number)) {
    errorMessage.textContent =
      "Invalid phone number. Please enter exactly 10 digits.";
    errorMessage.style.display = "block";
    return false;
  }
  errorMessage.style.display = "none"; // Hide error message if valid
  document.querySelector(".wrapper-alert").style.display = "grid";
  return false; // Prevent the form from submitting immediately
}

// ---------------thanks page---------------------

function createBurst(){


  let container = document.querySelector('.animation-container')
  let burst = document.querySelector('.burst')
  burst.style.top = Math.random() * 700 +'px';
  burst.style.left = Math.random() * 500 +'px';
  let burstClone =burst.cloneNode(true);
  container.appendChild(burstClone);
  setTimeout(() =>{
      burstClone.remove()
  },2000);
  
  }
  
  
  setInterval(createBurst,2000);

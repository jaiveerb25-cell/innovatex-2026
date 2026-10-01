// =========================
// REGISTRATION FORM
// VALIDATION
// =========================

const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();


    // Get values

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const selectedEvent =
        document.getElementById("event").value;


    // Error elements

    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const phoneError =
        document.getElementById("phoneError");

    const eventError =
        document.getElementById("eventError");

    const successMessage =
        document.getElementById("successMessage");


    // Clear old messages

    nameError.innerText = "";
    emailError.innerText = "";
    phoneError.innerText = "";
    eventError.innerText = "";
    successMessage.innerText = "";


    let isValid = true;


    // Name validation

    if (name === "") {

        nameError.innerText =
            "Please enter your name.";

        isValid = false;

    } else if (name.length < 3) {

        nameError.innerText =
            "Name must contain at least 3 characters.";

        isValid = false;
    }


    // Email validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.innerText =
            "Please enter your email.";

        isValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.innerText =
            "Please enter a valid email address.";

        isValid = false;
    }


    // Phone validation

    const phonePattern =
        /^[0-9]{10}$/;

    if (phone === "") {

        phoneError.innerText =
            "Please enter your phone number.";

        isValid = false;

    } else if (!phonePattern.test(phone)) {

        phoneError.innerText =
            "Phone number must contain 10 digits.";

        isValid = false;
    }


    // Event validation

    if (selectedEvent === "") {

        eventError.innerText =
            "Please select an event.";

        isValid = false;
    }


    // Successful submission

    if (isValid) {

        successMessage.innerText =
            "Registration successful! Welcome to InnovateX 2026.";

        form.reset();

    }

});

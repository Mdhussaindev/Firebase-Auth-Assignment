import { auth } from "./firebase.js";

import {
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const signupBtn = document.getElementById("signupBtn");
const errorDiv = document.getElementById("error");

signupBtn.addEventListener("click", async () => {

    errorDiv.innerText = "";

    const userEmail = email.value.trim();
    const userPassword = password.value.trim();

    // Empty Fields Validation
    if (!userEmail || !userPassword) {
        errorDiv.innerText = "Please fill all fields.";
        return;
    }

    // Password Length Validation
    if (userPassword.length < 6) {
        errorDiv.innerText =
        "Password must be at least 6 characters.";
        return;
    }

    try {

        await createUserWithEmailAndPassword(
            auth,
            userEmail,
            userPassword
        );

        alert("Account Created Successfully 🎉");

        window.location.href = "login.html";

    } catch (error) {

        switch (error.code) {

            case "auth/email-already-in-use":
                errorDiv.innerText =
                "This email is already registered.";
                break;

            case "auth/invalid-email":
                errorDiv.innerText =
                "Please enter a valid email.";
                break;

            case "auth/weak-password":
                errorDiv.innerText =
                "Password is too weak.";
                break;

            default:
                errorDiv.innerText =
                "Something went wrong. Try again.";
        }

        console.error(error);

    }

});
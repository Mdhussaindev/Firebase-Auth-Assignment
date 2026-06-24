import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const errorDiv = document.getElementById("error");


// If user already logged in
onAuthStateChanged(auth, (user) => {

    if (user) {
        window.location.href = "home.html";
    }

});


// Login Button Event
loginBtn.addEventListener("click", async () => {

    errorDiv.innerText = "";

    const userEmail = email.value.trim();
    const userPassword = password.value.trim();

    // Validation
    if (!userEmail || !userPassword) {

        errorDiv.innerText =
        "Please fill all fields.";

        return;
    }

    try {

        await signInWithEmailAndPassword(
            auth,
            userEmail,
            userPassword
        );

        alert("Login Successful 🎉");

        window.location.href =
        "home.html";

    } catch (error) {

        switch (error.code) {

            case "auth/invalid-credential":
                errorDiv.innerText =
                "Invalid Email or Password.";
                break;

            case "auth/user-not-found":
                errorDiv.innerText =
                "User not found.";
                break;

            case "auth/wrong-password":
                errorDiv.innerText =
                "Incorrect password.";
                break;

            case "auth/invalid-email":
                errorDiv.innerText =
                "Invalid email address.";
                break;

            default:
                errorDiv.innerText =
                "Login failed. Please try again.";
        }

        console.error(error);

    }

});
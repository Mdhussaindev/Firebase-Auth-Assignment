import { auth } from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const userEmail =
document.getElementById("userEmail");

const logoutBtn =
document.getElementById("logoutBtn");


// Check User Login Status
onAuthStateChanged(auth, (user) => {

    if (user) {

        userEmail.innerText =
        `Logged in as: ${user.email}`;

    } else {

        window.location.href =
        "login.html";

    }

});


// Logout Function
logoutBtn.addEventListener(
    "click",
    async () => {

        try {

            await signOut(auth);

            alert("Logged Out Successfully 👋");

            window.location.href =
            "login.html";

        } catch (error) {

            console.error(error);

        }

    }
);
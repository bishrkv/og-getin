// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

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

// Get references to UI elements
const emailList = document.getElementById("email-li");
const passwordList = document.getElementById("password-li");
const timeList = document.getElementById("time-li");

// Function to display user data
function displayUserData(user) {
    const emailItem = document.createElement("li");
    emailItem.textContent = user.email;
    emailList.appendChild(emailItem);

    const passwordItem = document.createElement("li");
    passwordItem.textContent = user.password;
    passwordList.appendChild(passwordItem);

    const timeItem = document.createElement("li");
    timeItem.textContent = user.time;
    timeList.appendChild(timeItem);
}

// Function to load existing users from Firebase
function loadExistingUsers() {
    const userRef = ref(database, "users");

    onValue(userRef, (snapshot) => {
        const users = snapshot.val();
        if (users) {
            Object.values(users).forEach(displayUserData);
        }
    });
}

// Initialize: Load existing users on page load
document.addEventListener("DOMContentLoaded", loadExistingUsers);

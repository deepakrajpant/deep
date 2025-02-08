// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlxCrKtgn8MPm-hEM6qAALlzuGTdawPKo",
    authDomain: "systemonoff-e9210.firebaseapp.com",
    projectId: "systemonoff-e9210",
    storageBucket: "systemonoff-e9210.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login Function
function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
            document.getElementById("login-container").style.display = "none";
            document.getElementById("dashboard").style.display = "flex";
        })
        .catch((error) => {
            document.getElementById("error-message").textContent = error.message;
        });
}

// Signup Function
function signup() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
            alert("Account created! You can now log in.");
            showLogin();
        })
        .catch((error) => {
            document.getElementById("signup-error").textContent = error.message;
        });
}

// Logout Function
function logout() {
    auth.signOut().then(() => {
        document.getElementById("dashboard").style.display = "none";
        document.getElementById("login-container").style.display = "block";
    });
}

// Forgot Password
function forgotPassword() {
    const email = prompt("Enter your email to reset password:");
    auth.sendPasswordResetEmail(email)
        .then(() => alert("Password reset email sent."))
        .catch((error) => alert(error.message));
}

// Show Login & Signup
function showSignup() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("signup-container").style.display = "block";
}

function showLogin() {
    document.getElementById("signup-container").style.display = "none";
    document.getElementById("login-container").style.display = "block";
}

// Firebase Auth State Listener
auth.onAuthStateChanged((user) => {
    if (user) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("dashboard").style.display = "flex";
    }
});

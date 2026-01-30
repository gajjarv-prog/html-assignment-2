$(document).ready(function () {

  $("#contactForm").submit(function (e) {
    e.preventDefault();

    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let message = $("#message").val().trim();

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Empty field check
    if (name === "" || email === "" || message === "") {
      $("#formMsg")
        .css("color", "red")
        .text("All fields are required.");
      return;
    }

    // Email validation
    if (!emailPattern.test(email)) {
      $("#formMsg")
        .css("color", "red")
        .text("Please enter a valid email address.");
      return;
    }

    // Message length check
    if (message.length < 10) {
      $("#formMsg")
        .css("color", "red")
        .text("Message must be at least 10 characters long.");
      return;
    }

    // Success
    $("#formMsg")
      .css("color", "green")
      .text("Message sent successfully!");

    $("#contactForm")[0].reset();
  });

});

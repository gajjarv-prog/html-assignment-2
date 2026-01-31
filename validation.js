$(document).ready(function () {
  $("#contactForm").validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      message: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      name: "Please enter your name",
      email: "Please enter a valid email",
      message: "Message must be at least 10 characters"
    },
    submitHandler: function () {
      $("#formMsg").text("Message sent successfully!").css("color", "green");
      $("#contactForm")[0].reset();
    }
  });
});

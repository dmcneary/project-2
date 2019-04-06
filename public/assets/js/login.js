$(document).ready(function() {
  // Getting references to our form and inputs
  var usernameInput = $("input#username");
  var passwordInput = $("input#password");
  var formSub = $("#login");
  // When the form is submitted, we validate there's an email and password entered
  $(formSub).on("click", function(event) {
    event.preventDefault();
    var userData = {
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.username || !userData.password) {
      return; 
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.username, userData.password);
    usernameInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(usernameQuery, passwordQuery) {
    $.post("/api/login", {
      username: usernameQuery,
      password: passwordQuery
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
  }

});

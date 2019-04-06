$(document).ready(function () {
    var username = $("input.username")
    var email = $("input.email")
    var password = $("input.password")

    $("#submit").on("click", function (event) {
        event.preventDefault();
        var newUser = {
            username: username.val().trim(),
            email: email.val().trim(),
            password: password.val().trim()
        };
        
        if (!newUser.username || !newUser.email || !newUser.password) {
            $("#error-msg").text("Please make sure to fill all above fields!");
            return;
        };

        
        console.log(newUser);
        submitUser(newUser);
        email = "";
        password = "";
    });

    function submitUser(User) {
        $.post("/api/users", User)
            .then(function (res) {
                window.location.replace(res);
                // If there's an error, handle it by throwing up a bootstrap alert
            }).catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#error-msg").text(err.responseJSON);
        $("#error-msg").fadeIn(500);
    }
});
$(document).ready(function() {
    var username = $(".username").val().trim();
    var email = $(".email").val().trim();
    var password = $(".password").val().trim();

    $("#submit").on('click', function submitUser(event) {
        event.preventDefault();
        if(!username.val().trim()|| !email.val().trim() || !password.val().trim()){
            return;
            alert("User can't be blank!");
        };

        var newUser = {
            username: username.val().trim(),
            email: email.val().trim(),
            password: password.val().trim()
        };
        console.log(newUser);

        function submitUser(User) {
            $.post("/api/users", User, function() {
            });
        };
        submitUser(newUser);
    })
});
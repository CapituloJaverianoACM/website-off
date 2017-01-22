(function(global) {

    var formObj = {};


    formObj.submit = function() {
        console.log("Submit");
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var mesj = document.getElementById("message").value;
        sendEmail(name, email, mesj);
    };

    function sendEmail(name, email, message) {
        console.log(name);
        console.log(email);
        console.log(message);

        // emailjs.send("gmail", "template_nOdqYSC1", {
        //     "reply_to": email,
        //     "from_name": name,
        //     "to_name": "ACM Javeriana",
        //     "message_html": message
        // });

        name = document.getElementById("name").value = "";
        email = document.getElementById("email").value = "";
        mesj = document.getElementById("message").value = "";

        alert("¡Gracias por contactarnos! Te responderemos en breve. ");

    }
    global.$formObj = formObj;

})(window);

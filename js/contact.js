function updateEmailLink() {
    var subject = document.getElementById("SubjetInput").value;
    var name = document.getElementById("NameInput").value;
    var body = document.getElementById("bodyInput").value;
    var email = document.getElementById("EmailInput").value;

    var emailBody = body + "\n\n" +
                    "Cordialement " + name + email;

    var emailLink = document.getElementById("emailLink");
    emailLink.action = "mailto:reflex.pilot@gmail.com" +
                     "?subject=" + encodeURIComponent(subject) +
                     "&body=" + encodeURIComponent(emailBody);
}

function openEmailClient() {
    var email = "reflex.pilot@gmail.com";
    var subject = encodeURIComponent("Subject of the email");
    var body = encodeURIComponent("Body of the email");

    window.location.href = "mailto:" + email + "?subject=" + subject + "&body=" + body;
}

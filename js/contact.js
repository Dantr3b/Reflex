function updateEmailLink() {
    var subject = document.getElementById("SubjetInput").value;
    var name = document.getElementById("NameInput").value;
    var body = document.getElementById("bodyInput").value;

    var emailBody = body + "\n\n" +
                    "Cordialement " + name;

    var emailLink = document.getElementById("emailLink");
    emailLink.action = "mailto:reflex.pilot@gmail.com" +
                     "?subject=" + encodeURIComponent(subject) +
                     "&body=" + encodeURIComponent(emailBody);
}

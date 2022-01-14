/* function to disable display of nav bar and show only the hamburger menu
to make home page display properly when nav bar is in block display mode*/
function clickMenu() {
    var menu = document.getElementById("menu");
    var home = document.getElementById("home");
    var about = document.getElementById("about");


    if (menu.style.display == "block") {
        menu.style.display = "none";

    } else {
        menu.style.display = "block";
        home.style.marginTop = "250px";
    }
}

function clickButton() {
    alert("Sorry, resume is not uploaded yet. Try later :)")
    var btn = document.getElementById("btn");

}

/*script for about page*/
function clickMenuAbout() {
    var menu = document.getElementById("menu");
    var about = document.getElementById("about");


    if (menu.style.display == "block") {
        menu.style.display = "none";

    } else {
        menu.style.display = "block";
        about.style.marginTop = "300px";
    }
}

/*script for education page*/
function clickMenuEducation() {
    var menu = document.getElementById("menu");
    var education = document.getElementById("education");


    if (menu.style.display == "block") {
        menu.style.display = "none";

    } else {
        menu.style.display = "block";
        education.style.marginTop = "300px";
    }
}

/*script for projects page*/
function clickMenuProjects() {
    var menu = document.getElementById("menu");
    var projects = document.getElementById("projects");


    if (menu.style.display == "block") {
        menu.style.display = "none";

    } else {
        menu.style.display = "block";
        projects.style.marginTop = "300px";
    }
}


/*script for contact page*/

function clickMenuContact() {
    var menu = document.getElementById("menu");
    var contact = document.getElementById("contact");


    if (menu.style.display == "block") {
        menu.style.display = "none";

    } else {
        menu.style.display = "block";
        contact.style.marginTop = "300px";
    }
}


function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "mishrasur7@gmail.com",
        Password: "jfsplrs5",
        To: 'mishrasur7@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New message",
        Body: "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone number: " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message sent successfully! Thank you for sending your message " + document.getElementById("name").value + "!")
    );
}
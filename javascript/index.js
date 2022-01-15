/* function to disable display of nav bar and show only the hamburger menu
to make home page display properly when nav bar is in block display mode*/
function clickMenu() {
    var menu = document.getElementById("menu");
    var home = document.getElementById("home");



    if (menu.style.display == "block") {
        menu.style.display = "none";

        if(menu.style.display == "none") {
            home.style.position = "relative"; 
            home.style.bottom = "150px";  
        } 
        
    } else {
        menu.style.display = "block";
        home.style.marginTop = "300px";

        if(menu.style.display == "block") {
            home.style.position = "static"; 
        }
    }
}

function clickButton() {
    alert("Sorry, resume is not uploaded yet. Please try later :)")
    var btn = document.getElementById("btn");

}

/*script for about page*/
function clickMenuAbout() {
    var menu = document.getElementById("menu");
    var about = document.getElementById("about");


    if (menu.style.display == "block") {
        menu.style.display = "none";

        if(menu.style.display == "none") {
            about.style.position = "relative"; 
            about.style.bottom = "150px"; 
        }

    } else {
        menu.style.display = "block";
        about.style.marginTop = "300px";

        if(menu.style.display == "block") {
            about.style.position = "static"; 
        }
    }
}

/*script for education page*/
function clickMenuEducation() {
    var menu = document.getElementById("menu");
    var education = document.getElementById("education");


    if (menu.style.display == "block") {
        menu.style.display = "none";

        if(menu.style.display == "none") {
            education.style.position = "relative"; 
            education.style.bottom = "150px"; 
        } 

    } else {
        menu.style.display = "block";
        education.style.marginTop = "300px";

        if(menu.style.display == "block") {
            education.style.position = "static"; 
        }
    }
}

/*script for projects page*/
function clickMenuProjects() {
    var menu = document.getElementById("menu");
    var projects = document.getElementById("projects");


    if (menu.style.display == "block") {
        menu.style.display = "none";

        if(menu.style.display == "none") {
            projects.style.position = "relative"; 
            projects.style.bottom = "150px"; 
        } 

    } else {
        menu.style.display = "block";
        projects.style.marginTop = "300px";

        if(menu.style.display == "block") {
            projects.style.position = "static"; 
        }
    }
}


/*script for contact page*/

function clickMenuContact() {
    var menu = document.getElementById("menu");
    var contact = document.getElementById("contact");


    if (menu.style.display == "block") {
        menu.style.display = "none";

        if(menu.style.display == "none") {
            contact.style.position = "relative"; 
            contact.style.bottom = "150px"; 
        } 

    } else {
        menu.style.display = "block";
        contact.style.marginTop = "300px";

        if(menu.style.display == "block") {
            contact.style.position = "static"; 
        }
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
        Body: "Name: " + document.getElementById("name").value +
            "<br> Email: " + document.getElementById("email").value +
            "<br> Phone number: " + document.getElementById("phone").value +
            "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message sent successfully! Thank you for sending your message " + document.getElementById("name").value + "!")
    );
}
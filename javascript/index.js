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
    alert("Sorry, this is not uploaded yet. Try later :)")
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



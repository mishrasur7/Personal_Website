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



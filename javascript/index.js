//Kör ett JavaScript-koden omedelbart efter att sidan har laddats:
window.addEventListener("load", GUI, false);  //Anropar på funktionen GUI

function GUI(){ 
    "use strict";
    var buttonref = document.querySelector("#sidebar-button button"); 
    buttonref.addEventListener("click", AnimationClick); //Skapar en klick-lyssnare på knappen som ska visa/dölja horisontella menyn 

    var liRef = document.querySelector("#horizontalmenu-dropdown");
    liRef.addEventListener("click", DropwdownFunction); //Skapar en klick-lyssnare på li-taggen med id:t "Horizontalmenu-dropdown, i syfte att visa undermenyn.

    var imgRef = document.querySelectorAll("figure img"); //Hämtar alla bilder som omslutar ett figure-element.

    for(var i=6; i<imgRef.length; i++){
        imgRef[i].addEventListener("click", PopUpMessagefunction); //Skapar en klick-lyssnare på de 6 sista bilderna på index.html. Syftet är att visa ett meddelande för besökaren.
    }

    //Ta reda på om skärmen är större än 1200 pixlar bred och om uttrycket är sant justera några css egenskaper.
    var x = window.matchMedia("(min-width: 1200px)");
    SidebarSettings(x);
    x.addListener(SidebarSettings);

}

function AnimationClick(Ev){ //Vad som sker när besökaren klickar på "meny-knappen".
    var buttonref = document.querySelector("#sidebar-button button");
    var sidebarRef = document.getElementById("mySidebar");
    var sidebarbtnRef = document.getElementById("sidebar-button");
    var overlayRef = document.querySelector(".overlay");
    var headerRef = document.querySelector("header");

    if(buttonref.textContent === "☰" ){
        sidebarRef.style.width = "255px";
        sidebarbtnRef.style.marginRight = "245px";
        buttonref.innerHTML="&#88;";
        buttonref.style.opacity = "1";
        buttonref.style.backgroundColor = "#cedf1d";
        overlayRef.style.opacity = "0.5";
        headerRef.style.opacity = "0.5";

    }else{
        sidebarRef.style.width = "0";
        sidebarbtnRef.style.marginRight= "0";
        buttonref.innerHTML="&#9776;";
        buttonref.style.opacity = "0.9";
        buttonref.style.backgroundColor = "#cddc39";
        overlayRef.style.opacity = "1";
        headerRef.style.opacity = "1";
    }
}

function DropwdownFunction(Evt){ //Vad som sker när besökaren klickar på li-taggen med id:t "Horizontalmenu-dropdown.
    var lirefs = document.querySelectorAll(".dropdown-items");
    var iconref = document.querySelector("#icon");
    for(var i = 0; i<lirefs.length; i++){
        if(lirefs[i].style.display === "none"){
            lirefs[i].style.display = "block";
        }else{
            lirefs[i].style.display = "none";
        }
    }

    iconref.classList.toggle("fa-plus");
    iconref.classList.toggle("fa-minus");    
}

function PopUpMessagefunction(Etarg){ //Vad som sker när besökaren klickar på dem 6 sista bilderna.
    alert("Arbete pågår just nu för blomman!\n\nVar vänlig vänta!");
}

function SidebarSettings(x) { //Vad som ska ske när skärmen är större än 1200 pixlar. Det gäller endast när användaren upptaderar sidan. 
    var buttonref = document.querySelector("#sidebar-button button");
    var overlayRef = document.querySelector(".overlay");
    var headerRef = document.querySelector("header");
    var sidebarbtnRef = document.getElementById("sidebar-button");
    var sidebarRef = document.getElementById("mySidebar");
    if (x.matches ) { 
      overlayRef.removeAttribute("style");
      headerRef.removeAttribute("style");
      sidebarRef.style.width = "0";
      sidebarbtnRef.style.marginRight= "0";
      buttonref.innerHTML="&#9776;";
      buttonref.style.opacity = "0.9";
      buttonref.style.backgroundColor = "#cddc39";
    } 
}


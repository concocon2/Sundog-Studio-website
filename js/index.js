let navOpened = false; 
let tl = new TimelineLite;
let navEle = document.getElementsByClassName("nav-list");
let navLink = document.getElementsByClassName("nav-links");
let navFasC = document.getElementById("nav-click");
let navFasO = document.getElementById("nav-open");
let navLogo = document.getElementById("m-nav-logo");

navFasO.addEventListener("click", function(){navOpen()},false);
//navLogo.addEventListener("transitionend", navEffect);

function navOpen() {
    if (navOpened == false){
        document.getElementById("sdNav").style.height = "100%";
        tl.progress(0);
        tl.to(navLogo, {duration: 0.5, opacity: 1}, "-=0.4");
        for (i = 0; i < navEle.length; i++) {
            navEle[i].style.top = "5vh";
            for (i = 2; i < navLink.length; i++){
                navLink[i].style.display = "inline-grid";
                tl.progress(0);
                tl.to(navLink[i], {duration: 0.5, opacity: 1}, "-=0.4");
            }
        }
        navLogo.style.display = "flex";
        navFasC.style.display = "flex";
        navFasC.style.opacity = "0";
        navFasC.style.fontSize = "3em";
        navFasC.style.margin = "-2px";
        navOpened = true;
    } else {
        document.getElementById("sdNav").style.height = "50px";
        for (i = 0; i < navEle.length; i++) {
            navEle[i].style.top = "0vh";
            for (i = 2; i < navLink.length; i++){
                navLink[i].style.display = "none";
                navLink[i].style.opacity = "0";
            }
        }
        navLogo.style.opacity = "0";
        navLogo.style.display = "none";
        navFasC.style.display = "flex";
        navFasC.style.opacity = "0.5";
        navFasC.style.fontSize = "2em";
        navFasC.style.marginTop = "4px";
        navFasC.style.marginLeft = "6px";
        navOpened = false;
    }
}

function navEffect() {
    if (navOpened == false) {
        this.style.display = "none";
    }
}

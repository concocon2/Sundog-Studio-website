(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL3VzZXIvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImpzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImxldCBuYXZPcGVuZWQgPSBmYWxzZTsgXHJcbmxldCB0bCA9IG5ldyBUaW1lbGluZUxpdGU7XHJcbmxldCBuYXZFbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmF2LWxpc3RcIik7XHJcbmxldCBuYXZMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdi1saW5rc1wiKTtcclxubGV0IG5hdkZhc0MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1jbGlja1wiKTtcclxubGV0IG5hdkZhc08gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1vcGVuXCIpO1xyXG5sZXQgbmF2TG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibS1uYXYtbG9nb1wiKTtcclxuXHJcbm5hdkZhc08uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7bmF2T3BlbigpfSxmYWxzZSk7XHJcbi8vbmF2TG9nby5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBuYXZFZmZlY3QpO1xyXG5cclxuZnVuY3Rpb24gbmF2T3BlbigpIHtcclxuICAgIGlmIChuYXZPcGVuZWQgPT0gZmFsc2Upe1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ROYXZcIikuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICAgICAgdGwucHJvZ3Jlc3MoMCk7XHJcbiAgICAgICAgdGwudG8obmF2TG9nbywge2R1cmF0aW9uOiAwLjUsIG9wYWNpdHk6IDF9LCBcIi09MC40XCIpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuYXZFbGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbmF2RWxlW2ldLnN0eWxlLnRvcCA9IFwiNXZoXCI7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDI7IGkgPCBuYXZMaW5rLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIG5hdkxpbmtbaV0uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWdyaWRcIjtcclxuICAgICAgICAgICAgICAgIHRsLnByb2dyZXNzKDApO1xyXG4gICAgICAgICAgICAgICAgdGwudG8obmF2TGlua1tpXSwge2R1cmF0aW9uOiAwLjUsIG9wYWNpdHk6IDF9LCBcIi09MC40XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5hdkxvZ28uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIG5hdkZhc0Muc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIG5hdkZhc0Muc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgIG5hdkZhc0Muc3R5bGUuZm9udFNpemUgPSBcIjNlbVwiO1xyXG4gICAgICAgIG5hdkZhc0Muc3R5bGUubWFyZ2luID0gXCItMnB4XCI7XHJcbiAgICAgICAgbmF2T3BlbmVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZE5hdlwiKS5zdHlsZS5oZWlnaHQgPSBcIjUwcHhcIjtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbmF2RWxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5hdkVsZVtpXS5zdHlsZS50b3AgPSBcIjB2aFwiO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAyOyBpIDwgbmF2TGluay5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBuYXZMaW5rW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIG5hdkxpbmtbaV0uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5hdkxvZ28uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgIG5hdkxvZ28uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIG5hdkZhc0Muc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIG5hdkZhc0Muc3R5bGUub3BhY2l0eSA9IFwiMC41XCI7XHJcbiAgICAgICAgbmF2RmFzQy5zdHlsZS5mb250U2l6ZSA9IFwiMmVtXCI7XHJcbiAgICAgICAgbmF2RmFzQy5zdHlsZS5tYXJnaW5Ub3AgPSBcIjRweFwiO1xyXG4gICAgICAgIG5hdkZhc0Muc3R5bGUubWFyZ2luTGVmdCA9IFwiNnB4XCI7XHJcbiAgICAgICAgbmF2T3BlbmVkID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5hdkVmZmVjdCgpIHtcclxuICAgIGlmIChuYXZPcGVuZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxufVxyXG4iXX0=

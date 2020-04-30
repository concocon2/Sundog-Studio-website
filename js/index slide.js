let slideIndex = 3;
let num = 1;
let navOpened = false; 
let tl = new TimelineLite;
let thumbTL = new TimelineLite;
let lastImgNum;
let imgClick;
var fs = require('fs');
var files = fs.readdirSync('./images/');

lastImgNum = files.length;
console.log(files);


showSlides(slideIndex);
document.getElementById("prev").addEventListener("click", function(){plusSlides(-1)}, false);
document.getElementById("next").addEventListener("click", function(){plusSlides(1)}, false);
document.getElementById("nav-open").addEventListener("click", function(){navOpen()},false);

for (i = 1; i < 6; i++) {
    document.getElementById("slot0" + i.toString()).addEventListener("click", function(){onImgClick(this)}, false);
}

function onImgClick(element) {
    let n = element.id.slice(-1);
    let thumbImg =  document.getElementsByClassName("small_img");
    let imgNum = (thumbImg[n-1].src.slice(-5)).charAt(0);
    thumbImg[2].src = thumbImg[n-1].src;
    plusSlides(n-3);
}

function onClickComplete() {
    thumbTL.pause(0);
    thumbTL.kill();
}

function navOpen(){
    let navEle = document.getElementsByClassName("nav-list");
    let navLink = document.getElementsByClassName("nav-links");
    console.log(navEle.length);
    if (navOpened == false){
        document.getElementById("sdNav").style.height = "100%";
        for (i = 0; i < navEle.length; i++) {
            navEle[i].style.top = "25vh";
            for (i = 1; i < navLink.length; i++){
                navLink[i].style.display = "block";
                tl.progress(0);
                tl.to(navLink[i], {duration: 0.5, opacity: 1}, "-=0.4");
            }
        }
        navOpened = true;
    } else {
        document.getElementById("sdNav").style.height = "40px";
        for (i = 0; i < navEle.length; i++) {
            navEle[i].style.top = "0vh";
            for (i = 1; i < navLink.length; i++){
                navLink[i].style.display = "none";
                navLink[i].style.opacity = "0";
            }
        }
        navOpened = false;
    }
}

function plusSlides(n) {
    slideIndex = slideIndex += n;
    if (slideIndex <= 0) {
        slideIndex = lastImgNum;
    }
    if (slideIndex > lastImgNum) {
        slideIndex = 1;
    }
    num += n;
    if (num > lastImgNum && n > 1) {
        num = n;
    } else if (num > lastImgNum) {
        num = 1
    }
    if (num < 1 && n < -1) {
        num = lastImgNum + (n + 1);
        console.log(n);
    } else if (num < 1) {
        num = lastImgNum;
    }
    showSlides(slideIndex, num);
}

function currentSlide(n) {
    num = n;
    showSlides(slideIndex = n, num);
}

function showSlides(n) {
    let i;
    let order;
    let imgSrc = document.getElementById("actual_img");
    let dots = document.getElementsByClassName("small_img");
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        order = i + num;
        if (order > lastImgNum) {
            order = order - lastImgNum;
        }
        dots[i].src = "./images/" + files[order-1].toString();
        console.log(order-1);
        console.log(files[10]);
    }
    imgSrc.src = dots[2].src;
}

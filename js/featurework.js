let slideIndex = 2;
let num = 1;
let lastImgNum;
var fs = require('fs');
var files = fs.readdirSync('videos/feature_work/');
var vNames = ["cocobay",
            "mrgift",
            "volkath"];
var videosSrc = ["https://drive.google.com/file/d/1tuCiLgo-fvuPhbgeaqCsYZ9U8j-FDqLu/preview",
            "https://drive.google.com/file/d/1Qr-5nYrgXS3Kjt_yTPlE76WmiH8qsHeV/preview", 
            "https://drive.google.com/file/d/1Z7Ju5Y3ve92NqccuAj8stOVilDggDS95/preview"];
var videosDict = {
    "https://drive.google.com/file/d/1tuCiLgo-fvuPhbgeaqCsYZ9U8j-FDqLu/preview" : "cocobay",
    "https://drive.google.com/file/d/1Qr-5nYrgXS3Kjt_yTPlE76WmiH8qsHeV/preview" : "mrgift", 
    "https://drive.google.com/file/d/1Z7Ju5Y3ve92NqccuAj8stOVilDggDS95/preview" : "volkath"
};
lastImgNum = files.length;


showSlides(slideIndex);
document.getElementById("prev").addEventListener("click", function(){plusSlides(-1)}, false);
document.getElementById("next").addEventListener("click", function(){plusSlides(1)}, false);

for (i = 1; i < 4; i++) {
    document.getElementById("slot0" + i.toString()).addEventListener("click", function(){onImgClick(this)}, false);
}

function onImgClick(element) {
    let n = element.id.slice(-1);
    let thumbImg =  document.getElementsByClassName("small_img");
    let imgNum = (thumbImg[n-1].src.slice(-5)).charAt(0);
    thumbImg[1].src = thumbImg[n-1].src;
    plusSlides(n-2);
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

function showSlides(n) {
    let i;
    let order;
    let filename;
    let imgSrc = document.getElementById("actual_img");
    let dots = document.getElementsByClassName("small_img");
    let vlinks = new Array(3);
    let videoName;
    let descr;
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        order = i + num;
        if (order > lastImgNum) {
            order = order - lastImgNum;
        }
        filename = files[order-1].toString();
        dots[i].src = "../videos/thumbnail/" + filename.substring(0, filename.length - 4) + "_thumb.jpg";
        console.log(dots[i]);
        vlinks[i] = videosSrc[order-1];
        //videoName = dots[i].src.match(/\("[^"]+"|[^"\/_%:]+/g);
        descr = document.getElementById(vNames[order-1].toLowerCase());
        console.log(vNames[order-1]);
        descr.style.display = "none";
    }
    //imgSrc.setAttribute('poster', dots[1].src);
    videoName = dots[1].src.match(/\("[^"]+"|[^"\/_%:]+/g);
    descr = document.getElementById(videosDict[vlinks[1]]);
    console.log(descr);
    descr.style.display = "block";
    filename = dots[1].src.replace("thumbnail", "feature_work");
    imgSrc.src = vlinks[1];
}

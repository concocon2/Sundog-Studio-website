let slideIndex = 3;
let num = 1;
let lastImgNum;
var fs = require('fs');
var files = fs.readdirSync('./content/thumbnail/');
/*var vlinks = [
    "https://drive.google.com/file/d/1FJVKT9t8Id7pwQ85QooPCLKF8KSftHPe/preview",
    "https://drive.google.com/file/d/1FGHwNtVSU6fzzwOzNtKKtXbprj2OmBWA/preview",
    "https://drive.google.com/file/d/15S0ZsomqeqLdfLOgsE0mvPiBgLPNhp_Z/preview",
    "https://drive.google.com/file/d/1K4z6r2jZGnGRXnuzcRRt1jNHc_geODLf/preview",
    "https://drive.google.com/file/d/15pgFETADZwdcR61aYBOqKXmxlwSjEjtV/view?usp=sharing",
    "https://drive.google.com/file/d/1ksE2ovX_y1XuATx8fNLMsqnQy0tAJSKX/view?usp=sharing",
    "https://drive.google.com/file/d/187JFg-Z-FZNe0v-ca16DDUMPNZuCKs8p/view?usp=sharing",
    "https://drive.google.com/file/d/1CwfLkY1dtlktrfJ_OPah6cRcH4nkjO6b/view?usp=sharing",
    "https://drive.google.com/file/d/14uK9vi3T1CWWnLEZF1EXimfeeNUDPjbZ/view?usp=sharing",
    "https://drive.google.com/file/d/1vKPL_Is0-wqaTUwadvLzmvxkucljHi1l/view?usp=sharing",
    "https://drive.google.com/file/d/1ZSZpjEUfAG7RA3lbReVwpVLlbt6fgBqq/view?usp=sharing",
    "https://drive.google.com/file/d/1lmuR0aotZnf3Ol5l0U7q0G6PFSZcSWHD/view?usp=sharing",
    "https://drive.google.com/file/d/1aixVIxEfJs4hJ17oaV80ou8Klu4BJLXo/view?usp=sharing",
    "https://drive.google.com/file/d/1Mey42uJh5jRFCezTYNzmn7wRXF-bLirx/view?usp=sharing",
    "https://drive.google.com/file/d/1XqOM4WxK4xwXgBvlFiTgSI-UMOOzsZ6P/view?usp=sharing",
    "https://drive.google.com/file/d/19MnluWEbkug6cxIGwMA06jYOPUWxZOab/view?usp=sharing",
    "https://drive.google.com/file/d/11bDAq1ljomks0tJtkEb_T_Mz9qtKfkFc/view?usp=sharing",
    "https://drive.google.com/file/d/16eX2y7xZfs7c6-yPG-eZea24OxHGMukb/view?usp=sharing",
    "https://drive.google.com/file/d/1rVnkJcIx2DwGwurcvZ5JEbf94ND5GWzT/view?usp=sharing",
    "https://drive.google.com/file/d/13STzVjIY_bHltft_bH8FBRPcZaN2SQQT/view?usp=sharing"
];*/
var vdict = {
    "[Phim Hoạt Hình ] 7 Chú Cao và nàng Bạch Tuyết - YouTube_thumb.png" : "https://drive.google.com/file/d/1FJVKT9t8Id7pwQ85QooPCLKF8KSftHPe/preview",
    "[Phim hoạt hình] Alice lạc vào xứ sở cao lớn - YouTube_thumb.png" : "https://drive.google.com/file/d/1FGHwNtVSU6fzzwOzNtKKtXbprj2OmBWA/preview",
    "[Phim hoạt hình] Cô Tấm cao lớn và những chuyện chưa kể - YouTube_thumb.png" : "https://drive.google.com/file/d/15S0ZsomqeqLdfLOgsE0mvPiBgLPNhp_Z/preview",
    "Another (x3) Love story - YouTube (360p)_thumb.png" : "https://drive.google.com/file/d/1K4z6r2jZGnGRXnuzcRRt1jNHc_geODLf/preview",
    "Another love story_(1080p)_thumb.png" : "https://drive.google.com/file/d/15pgFETADZwdcR61aYBOqKXmxlwSjEjtV/preview",
    "Cocobay 2 TVC - YouTube_thumb.png" : "https://drive.google.com/file/d/1ksE2ovX_y1XuATx8fNLMsqnQy0tAJSKX/preview",
    "Cocobay TVC - YouTube_thumb.png" : "https://drive.google.com/file/d/187JFg-Z-FZNe0v-ca16DDUMPNZuCKs8p/preview",
    "H&P_thumb.png" : "https://drive.google.com/file/d/1CwfLkY1dtlktrfJ_OPah6cRcH4nkjO6b/preview",
    "Hiruscar Campaign Clip 1 - YouTube (360p)_thumb.png" : "https://drive.google.com/file/d/14uK9vi3T1CWWnLEZF1EXimfeeNUDPjbZ/preview",
    "Hiruscar Campaign Clip 2 - YouTube (360p)_thumb.png" : "https://drive.google.com/file/d/1vKPL_Is0-wqaTUwadvLzmvxkucljHi1l/preview",
    "Marineboys_final_30s_thumb.png" : "https://drive.google.com/file/d/1ZSZpjEUfAG7RA3lbReVwpVLlbt6fgBqq/preview",
    "Mecha_LuBu_youtube1080p_noVO_thumb.png" : "https://drive.google.com/file/d/1lmuR0aotZnf3Ol5l0U7q0G6PFSZcSWHD/preview",
    "MrGift_LPL_thumb.png" : "https://drive.google.com/file/d/1aixVIxEfJs4hJ17oaV80ou8Klu4BJLXo/preview",
    "quillen_final_music_vfx_thumb.png" : "https://drive.google.com/file/d/1Mey42uJh5jRFCezTYNzmn7wRXF-bLirx/preview",
    "Symphony of Love_(1080p)_thumb.png" : "https://drive.google.com/file/d/1XqOM4WxK4xwXgBvlFiTgSI-UMOOzsZ6P/preview",
    "The Love Story_(1080p)_thumb.png" : "https://drive.google.com/file/d/19MnluWEbkug6cxIGwMA06jYOPUWxZOab/preview",
    "Volkath_final_video_thumb.png" : "https://drive.google.com/file/d/11bDAq1ljomks0tJtkEb_T_Mz9qtKfkFc/preview",
    "We will be Happy_final cut_thumb.png" : "https://drive.google.com/file/d/16eX2y7xZfs7c6-yPG-eZea24OxHGMukb/preview",
    "when all star align_thumb.png" : "https://drive.google.com/file/d/1rVnkJcIx2DwGwurcvZ5JEbf94ND5GWzT/preview",
    "youtube ver_thumb.png" : "https://drive.google.com/file/d/13STzVjIY_bHltft_bH8FBRPcZaN2SQQT/preview" 
};

lastImgNum = files.length;
console.log(files);


showSlides(slideIndex);
document.getElementById("prev").addEventListener("click", function(){plusSlides(-1)}, false);
document.getElementById("next").addEventListener("click", function(){plusSlides(1)}, false);

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
    let imgSrc = document.getElementById("actual_img");
    let dots = document.getElementsByClassName("small_img");
    let vlinks = new Array(5);
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        order = i + num;
        if (order > lastImgNum) {
            order = order - lastImgNum;
        }
        filename = files[order-1].toString();
        vlinks[i] = files[order-1].toString();
        dots[i].src = "/content/thumbnail/" + filename;
        console.log(order-1);
        console.log(files[10]);
    }
    filename = dots[2].src.replace("thumbnail", "videos");
    console.log(vlinks[2])
    imgSrc.src = vdict[vlinks[2].toString()];
}

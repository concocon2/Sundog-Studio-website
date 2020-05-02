(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let slideIndex = 3;
let num = 1;
let lastImgNum;

var files = ["Another (x3) Love story - YouTube (360p)_thumb.png","Another love story_(1080p)_thumb.png","Cocobay 2 TVC - YouTube_thumb.png","Cocobay TVC - YouTube_thumb.png","H&P_thumb.png","Hiruscar Campaign Clip 1 - YouTube (360p)_thumb.png","Hiruscar Campaign Clip 2 - YouTube (360p)_thumb.png","Marineboys_final_30s_thumb.png","Mecha_LuBu_youtube1080p_noVO_thumb.png","MrGift_LPL_thumb.png","quillen_final_music_vfx_thumb.png","Symphony of Love_(1080p)_thumb.png","The Love Story_(1080p)_thumb.png","Volkath_final_video_thumb.png","We will be Happy_final cut_thumb.png","when all star align_thumb.png","youtube ver_thumb.png","[Phim hoạt hình] Cô Tấm cao lớn và những chuyện chưa kể - YouTube_thumb.png","[Phim Hoạt Hình ] 7 Chú Cao và nàng Bạch Tuyết - YouTube_thumb.png","[Phim hoạt hình] Alice lạc vào xứ sở cao lớn - YouTube_thumb.png"];
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL3VzZXIvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIkY6L0xBTS93ZWJzaXRlL0dpdEh1Yi9TdW5kb2ctU3R1ZGlvLVdlYnNpdGUvU3VuZG9nLVN0dWRpby13ZWJzaXRlL2pzL3dvcmt2aWRlb3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFJLGFBQWEsQ0FBQyxDQUFDO0FBQ25CLElBQUksTUFBTSxDQUFDLENBQUM7QUFDWixJQUFJLFVBQVUsQ0FBQztBQUNmLEFBQXVCO0FBQ3ZCLElBQUksUUFBUSx5MEJBQXNDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJuRCxJQUFJLFFBQVE7SUFDUix1RUFBdUUsMkVBQTJFO0lBQ2xKLHFFQUFxRSwyRUFBMkU7SUFDaEosd0ZBQXdGLDJFQUEyRTtJQUNuSyx1REFBdUQsMkVBQTJFO0lBQ2xJLHlDQUF5QywyRUFBMkU7SUFDcEgsc0NBQXNDLDJFQUEyRTtJQUNqSCxvQ0FBb0MsMkVBQTJFO0lBQy9HLGtCQUFrQiwyRUFBMkU7SUFDN0Ysd0RBQXdELDJFQUEyRTtJQUNuSSx3REFBd0QsMkVBQTJFO0lBQ25JLG1DQUFtQywyRUFBMkU7SUFDOUcsMkNBQTJDLDJFQUEyRTtJQUN0SCx5QkFBeUIsMkVBQTJFO0lBQ3BHLHNDQUFzQywyRUFBMkU7SUFDakgsdUNBQXVDLDJFQUEyRTtJQUNsSCxxQ0FBcUMsMkVBQTJFO0lBQ2hILGtDQUFrQywyRUFBMkU7SUFDN0cseUNBQXlDLDJFQUEyRTtJQUNwSCxrQ0FBa0MsMkVBQTJFO0lBQzdHLDBCQUEwQiwyRUFBMkU7Q0FDeEcsQ0FBQzs7QUFFRixhQUFhLEtBQUssT0FBTyxDQUFDO0FBQzFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7QUFHbkIsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3ZCLFFBQVEs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QUUsQ0FBQztRQUNyQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcscUJBQXFCLEdBQUcsUUFBUSxDQUFDO1FBQy9DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUMxQjtJQUNELFdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7Q0FDNUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJsZXQgc2xpZGVJbmRleCA9IDM7XHJcbmxldCBudW0gPSAxO1xyXG5sZXQgbGFzdEltZ051bTtcclxudmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcclxudmFyIGZpbGVzID0gZnMucmVhZGRpclN5bmMoJy4vY29udGVudC90aHVtYm5haWwvJyk7XHJcbi8qdmFyIHZsaW5rcyA9IFtcclxuICAgIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRkpWS1Q5dDhJZDdwd1E4NVFvb1BDTEtGOEtTZnRIUGUvcHJldmlld1wiLFxyXG4gICAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFGR0h3TnRWU1U2Znp6d096TnRLS3RYYnByajJPbUJXQS9wcmV2aWV3XCIsXHJcbiAgICBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTVTMFpzb21xZXFMZGZMT2dzRTBtdlBpQmdMUE5ocF9aL3ByZXZpZXdcIixcclxuICAgIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSzR6NnIyalpHbkdSWG51emNSUnQxak5IY19nZU9ETGYvcHJldmlld1wiLFxyXG4gICAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE1cGdGRVRBRFp3ZGNSNjFhWUJPcUtYbXhsd1NqRWp0Vi92aWV3P3VzcD1zaGFyaW5nXCIsXHJcbiAgICBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtzRTJvdlhfeTFYdUFUeDhmTkxNc3FuUXkwdEFKU0tYL3ZpZXc/dXNwPXNoYXJpbmdcIixcclxuICAgIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xODdKRmctWi1GWk5lMHYtY2ExNkREVU1QTlp1Q0tzOHAvdmlldz91c3A9c2hhcmluZ1wiLFxyXG4gICAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFDd2ZMa1kxZHRsa3RyZkpfT1BhaDZjUmNING5rak82Yi92aWV3P3VzcD1zaGFyaW5nXCIsXHJcbiAgICBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTR1Szl2aTNUMUNXV25MRVpGMUVYaW1mZWVOVURQamJaL3ZpZXc/dXNwPXNoYXJpbmdcIixcclxuICAgIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdktQTF9JczAtd3FhVFV3YWR2THptdnhrdWNsakhpMWwvdmlldz91c3A9c2hhcmluZ1wiLFxyXG4gICAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFaU1pwakVVZkFHN1JBM2xiUmVWd3BWTGxidDZmZ0JxcS92aWV3P3VzcD1zaGFyaW5nXCIsXHJcbiAgICBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWxtdVIwYW90Wm5mM09sNWwwVTdxMEc2UEZTWmNTV0hEL3ZpZXc/dXNwPXNoYXJpbmdcIixcclxuICAgIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYWl4Vkl4RWZKczRoSjE3b2FWODBvdThLbHU0QkpMWG8vdmlldz91c3A9c2hhcmluZ1wiLFxyXG4gICAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFNZXk0MnVKaDVqUkZDZXpUWU56bW43d1JYRi1iTGlyeC92aWV3P3VzcD1zaGFyaW5nXCIsXHJcbiAgICBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVhxT000V3hLNHh3WGdCdmxGaVRnU0ktVU1PT3pzWjZQL3ZpZXc/dXNwPXNoYXJpbmdcIixcclxuICAgIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOU1ubHVXRWJrdWc2Y3hJR3dNQTA2allPUFVXeFpPYWIvdmlldz91c3A9c2hhcmluZ1wiLFxyXG4gICAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExYkRBcTFsam9ta3MwdEp0a0ViX1RfTXo5cXRLZmtGYy92aWV3P3VzcD1zaGFyaW5nXCIsXHJcbiAgICBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZlWDJ5N3haZnM3YzYteVBHLWVaZWEyNE94SEdNdWtiL3ZpZXc/dXNwPXNoYXJpbmdcIixcclxuICAgIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xclZua0pjSXgyRHdHd3VyY3ZaNUpFYmY5NE5ENUdXelQvdmlldz91c3A9c2hhcmluZ1wiLFxyXG4gICAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEzU1R6VmpJWV9iSGx0ZnRfYkg4RkJSUGNaYU4yU1FRVC92aWV3P3VzcD1zaGFyaW5nXCJcclxuXTsqL1xyXG52YXIgdmRpY3QgPSB7XHJcbiAgICBcIltQaGltIEhv4bqhdCBIw6xuaCBdIDcgQ2jDuiBDYW8gdsOgIG7DoG5nIELhuqFjaCBUdXnhur90IC0gWW91VHViZV90aHVtYi5wbmdcIiA6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRkpWS1Q5dDhJZDdwd1E4NVFvb1BDTEtGOEtTZnRIUGUvcHJldmlld1wiLFxyXG4gICAgXCJbUGhpbSBob+G6oXQgaMOsbmhdIEFsaWNlIGzhuqFjIHbDoG8geOG7qSBz4bufIGNhbyBs4bubbiAtIFlvdVR1YmVfdGh1bWIucG5nXCIgOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUZHSHdOdFZTVTZmenp3T3pOdEtLdFhicHJqMk9tQldBL3ByZXZpZXdcIixcclxuICAgIFwiW1BoaW0gaG9hzKN0IGhpzIBuaF0gQ8O0IFTDosyBbSBjYW8gbMahzIFuIHZhzIAgbmjGsMyDbmcgY2h1ecOqzKNuIGNoxrBhIGvDqsyJIC0gWW91VHViZV90aHVtYi5wbmdcIiA6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNVMwWnNvbXFlcUxkZkxPZ3NFMG12UGlCZ0xQTmhwX1ovcHJldmlld1wiLFxyXG4gICAgXCJBbm90aGVyICh4MykgTG92ZSBzdG9yeSAtIFlvdVR1YmUgKDM2MHApX3RodW1iLnBuZ1wiIDogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFLNHo2cjJqWkduR1JYbnV6Y1JSdDFqTkhjX2dlT0RMZi9wcmV2aWV3XCIsXHJcbiAgICBcIkFub3RoZXIgbG92ZSBzdG9yeV8oMTA4MHApX3RodW1iLnBuZ1wiIDogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE1cGdGRVRBRFp3ZGNSNjFhWUJPcUtYbXhsd1NqRWp0Vi9wcmV2aWV3XCIsXHJcbiAgICBcIkNvY29iYXkgMiBUVkMgLSBZb3VUdWJlX3RodW1iLnBuZ1wiIDogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrc0Uyb3ZYX3kxWHVBVHg4Zk5MTXNxblF5MHRBSlNLWC9wcmV2aWV3XCIsXHJcbiAgICBcIkNvY29iYXkgVFZDIC0gWW91VHViZV90aHVtYi5wbmdcIiA6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xODdKRmctWi1GWk5lMHYtY2ExNkREVU1QTlp1Q0tzOHAvcHJldmlld1wiLFxyXG4gICAgXCJIJlBfdGh1bWIucG5nXCIgOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUN3ZkxrWTFkdGxrdHJmSl9PUGFoNmNSY0g0bmtqTzZiL3ByZXZpZXdcIixcclxuICAgIFwiSGlydXNjYXIgQ2FtcGFpZ24gQ2xpcCAxIC0gWW91VHViZSAoMzYwcClfdGh1bWIucG5nXCIgOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTR1Szl2aTNUMUNXV25MRVpGMUVYaW1mZWVOVURQamJaL3ByZXZpZXdcIixcclxuICAgIFwiSGlydXNjYXIgQ2FtcGFpZ24gQ2xpcCAyIC0gWW91VHViZSAoMzYwcClfdGh1bWIucG5nXCIgOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXZLUExfSXMwLXdxYVRVd2Fkdkx6bXZ4a3VjbGpIaTFsL3ByZXZpZXdcIixcclxuICAgIFwiTWFyaW5lYm95c19maW5hbF8zMHNfdGh1bWIucG5nXCIgOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVpTWnBqRVVmQUc3UkEzbGJSZVZ3cFZMbGJ0NmZnQnFxL3ByZXZpZXdcIixcclxuICAgIFwiTWVjaGFfTHVCdV95b3V0dWJlMTA4MHBfbm9WT190aHVtYi5wbmdcIiA6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbG11UjBhb3RabmYzT2w1bDBVN3EwRzZQRlNaY1NXSEQvcHJldmlld1wiLFxyXG4gICAgXCJNckdpZnRfTFBMX3RodW1iLnBuZ1wiIDogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFhaXhWSXhFZkpzNGhKMTdvYVY4MG91OEtsdTRCSkxYby9wcmV2aWV3XCIsXHJcbiAgICBcInF1aWxsZW5fZmluYWxfbXVzaWNfdmZ4X3RodW1iLnBuZ1wiIDogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFNZXk0MnVKaDVqUkZDZXpUWU56bW43d1JYRi1iTGlyeC9wcmV2aWV3XCIsXHJcbiAgICBcIlN5bXBob255IG9mIExvdmVfKDEwODBwKV90aHVtYi5wbmdcIiA6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWHFPTTRXeEs0eHdYZ0J2bEZpVGdTSS1VTU9PenNaNlAvcHJldmlld1wiLFxyXG4gICAgXCJUaGUgTG92ZSBTdG9yeV8oMTA4MHApX3RodW1iLnBuZ1wiIDogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE5TW5sdVdFYmt1ZzZjeElHd01BMDZqWU9QVVd4Wk9hYi9wcmV2aWV3XCIsXHJcbiAgICBcIlZvbGthdGhfZmluYWxfdmlkZW9fdGh1bWIucG5nXCIgOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTFiREFxMWxqb21rczB0SnRrRWJfVF9NejlxdEtma0ZjL3ByZXZpZXdcIixcclxuICAgIFwiV2Ugd2lsbCBiZSBIYXBweV9maW5hbCBjdXRfdGh1bWIucG5nXCIgOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZlWDJ5N3haZnM3YzYteVBHLWVaZWEyNE94SEdNdWtiL3ByZXZpZXdcIixcclxuICAgIFwid2hlbiBhbGwgc3RhciBhbGlnbl90aHVtYi5wbmdcIiA6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xclZua0pjSXgyRHdHd3VyY3ZaNUpFYmY5NE5ENUdXelQvcHJldmlld1wiLFxyXG4gICAgXCJ5b3V0dWJlIHZlcl90aHVtYi5wbmdcIiA6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xM1NUelZqSVlfYkhsdGZ0X2JIOEZCUlBjWmFOMlNRUVQvcHJldmlld1wiIFxyXG59O1xyXG5cclxubGFzdEltZ051bSA9IGZpbGVzLmxlbmd0aDtcclxuY29uc29sZS5sb2coZmlsZXMpO1xyXG5cclxuXHJcbnNob3dTbGlkZXMoc2xpZGVJbmRleCk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJldlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtwbHVzU2xpZGVzKC0xKX0sIGZhbHNlKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe3BsdXNTbGlkZXMoMSl9LCBmYWxzZSk7XHJcblxyXG5mb3IgKGkgPSAxOyBpIDwgNjsgaSsrKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsb3QwXCIgKyBpLnRvU3RyaW5nKCkpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe29uSW1nQ2xpY2sodGhpcyl9LCBmYWxzZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uSW1nQ2xpY2soZWxlbWVudCkge1xyXG4gICAgbGV0IG4gPSBlbGVtZW50LmlkLnNsaWNlKC0xKTtcclxuICAgIGxldCB0aHVtYkltZyA9ICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic21hbGxfaW1nXCIpO1xyXG4gICAgbGV0IGltZ051bSA9ICh0aHVtYkltZ1tuLTFdLnNyYy5zbGljZSgtNSkpLmNoYXJBdCgwKTtcclxuICAgIHRodW1iSW1nWzJdLnNyYyA9IHRodW1iSW1nW24tMV0uc3JjO1xyXG4gICAgcGx1c1NsaWRlcyhuLTMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbHVzU2xpZGVzKG4pIHtcclxuICAgIHNsaWRlSW5kZXggPSBzbGlkZUluZGV4ICs9IG47XHJcbiAgICBpZiAoc2xpZGVJbmRleCA8PSAwKSB7XHJcbiAgICAgICAgc2xpZGVJbmRleCA9IGxhc3RJbWdOdW07XHJcbiAgICB9XHJcbiAgICBpZiAoc2xpZGVJbmRleCA+IGxhc3RJbWdOdW0pIHtcclxuICAgICAgICBzbGlkZUluZGV4ID0gMTtcclxuICAgIH1cclxuICAgIG51bSArPSBuO1xyXG4gICAgaWYgKG51bSA+IGxhc3RJbWdOdW0gJiYgbiA+IDEpIHtcclxuICAgICAgICBudW0gPSBuO1xyXG4gICAgfSBlbHNlIGlmIChudW0gPiBsYXN0SW1nTnVtKSB7XHJcbiAgICAgICAgbnVtID0gMVxyXG4gICAgfVxyXG4gICAgaWYgKG51bSA8IDEgJiYgbiA8IC0xKSB7XHJcbiAgICAgICAgbnVtID0gbGFzdEltZ051bSArIChuICsgMSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobik7XHJcbiAgICB9IGVsc2UgaWYgKG51bSA8IDEpIHtcclxuICAgICAgICBudW0gPSBsYXN0SW1nTnVtO1xyXG4gICAgfVxyXG4gICAgc2hvd1NsaWRlcyhzbGlkZUluZGV4LCBudW0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93U2xpZGVzKG4pIHtcclxuICAgIGxldCBpO1xyXG4gICAgbGV0IG9yZGVyO1xyXG4gICAgbGV0IGltZ1NyYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0dWFsX2ltZ1wiKTtcclxuICAgIGxldCBkb3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNtYWxsX2ltZ1wiKTtcclxuICAgIGxldCB2bGlua3MgPSBuZXcgQXJyYXkoNSk7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgZG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGRvdHNbaV0uY2xhc3NOYW1lID0gZG90c1tpXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XHJcbiAgICAgICAgb3JkZXIgPSBpICsgbnVtO1xyXG4gICAgICAgIGlmIChvcmRlciA+IGxhc3RJbWdOdW0pIHtcclxuICAgICAgICAgICAgb3JkZXIgPSBvcmRlciAtIGxhc3RJbWdOdW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbGVuYW1lID0gZmlsZXNbb3JkZXItMV0udG9TdHJpbmcoKTtcclxuICAgICAgICB2bGlua3NbaV0gPSBmaWxlc1tvcmRlci0xXS50b1N0cmluZygpO1xyXG4gICAgICAgIGRvdHNbaV0uc3JjID0gXCIvY29udGVudC90aHVtYm5haWwvXCIgKyBmaWxlbmFtZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhvcmRlci0xKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhmaWxlc1sxMF0pO1xyXG4gICAgfVxyXG4gICAgZmlsZW5hbWUgPSBkb3RzWzJdLnNyYy5yZXBsYWNlKFwidGh1bWJuYWlsXCIsIFwidmlkZW9zXCIpO1xyXG4gICAgY29uc29sZS5sb2codmxpbmtzWzJdKVxyXG4gICAgaW1nU3JjLnNyYyA9IHZkaWN0W3ZsaW5rc1syXS50b1N0cmluZygpXTtcclxufVxyXG4iXX0=

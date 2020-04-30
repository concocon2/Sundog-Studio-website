(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let slideIndex = 2;
let num = 1;
let lastImgNum;

var files = ["Cocobay_2_TVC-YouTube.MP4","MrGift_LPL.mp4","Volkath_final_video.mp4"];

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
        videoName = dots[i].src.match(/\("[^"]+"|[^"\/_%:s]+/g);
        descr = document.getElementById(videoName[6].toLowerCase());
        console.log(videoName[6]);
        console.log(videoName);
        descr.style.display = "none";
    }
    imgSrc.setAttribute('poster', dots[1].src);
    videoName = dots[1].src.match(/\("[^"]+"|[^"\/_%s]+/g);
    descr = document.getElementById(videoName[7].toLowerCase());
    descr.style.display = "block";
    console.log(descr);
    filename = dots[1].src.replace("thumbnail", "feature_work");
    imgSrc.src = filename.replace("_thumb.jpg", ".mp4");
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FkbWluaXN0cmF0b3IvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIkY6L0pPQiBXRUJTSVRFL1N1bmRvZy1TdHVkaW8td2Vic2l0ZS9qcy9mZWF0dXJld29yay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUksYUFBYSxDQUFDLENBQUM7QUFDbkIsSUFBSSxNQUFNLENBQUMsQ0FBQztBQUNaLElBQUksVUFBVSxDQUFDO0FBQ2YsQUFBdUI7QUFDdkIsSUFBSSxRQUFRLHdFQUFzQyxDQUFDOztBQUVuRCxhQUFhLEtBQUssT0FBTyxDQUFDOzs7QUFHMUIsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3ZCLFFBQVEsZUFBZSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDN0YsUUFBUSxlQUFlLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7O0FBRTVGLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUNwQixRQUFRLGVBQWUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQ2xIOztBQUVELDZCQUE2QjtJQUN6QixJQUFJLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdCLElBQUksWUFBWSxRQUFRLHVCQUF1QixD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dUJBQXVCLENBQUMsQ0FBQztJQUN2RCxRQUFRLFFBQVEsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUM1RCxLQUFLLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUM5QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQixXQUFXLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzVELE1BQU0sSUFBSSxHQUFHLFFBQVEsUUFBUSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztDQUN2RCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImxldCBzbGlkZUluZGV4ID0gMjtcclxubGV0IG51bSA9IDE7XHJcbmxldCBsYXN0SW1nTnVtO1xyXG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xyXG52YXIgZmlsZXMgPSBmcy5yZWFkZGlyU3luYygndmlkZW9zL2ZlYXR1cmVfd29yay8nKTtcclxuXHJcbmxhc3RJbWdOdW0gPSBmaWxlcy5sZW5ndGg7XHJcblxyXG5cclxuc2hvd1NsaWRlcyhzbGlkZUluZGV4KTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmV2XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe3BsdXNTbGlkZXMoLTEpfSwgZmFsc2UpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7cGx1c1NsaWRlcygxKX0sIGZhbHNlKTtcclxuXHJcbmZvciAoaSA9IDE7IGkgPCA0OyBpKyspIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xvdDBcIiArIGkudG9TdHJpbmcoKSkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7b25JbWdDbGljayh0aGlzKX0sIGZhbHNlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25JbWdDbGljayhlbGVtZW50KSB7XHJcbiAgICBsZXQgbiA9IGVsZW1lbnQuaWQuc2xpY2UoLTEpO1xyXG4gICAgbGV0IHRodW1iSW1nID0gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzbWFsbF9pbWdcIik7XHJcbiAgICBsZXQgaW1nTnVtID0gKHRodW1iSW1nW24tMV0uc3JjLnNsaWNlKC01KSkuY2hhckF0KDApO1xyXG4gICAgdGh1bWJJbWdbMV0uc3JjID0gdGh1bWJJbWdbbi0xXS5zcmM7XHJcbiAgICBwbHVzU2xpZGVzKG4tMik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsdXNTbGlkZXMobikge1xyXG4gICAgc2xpZGVJbmRleCA9IHNsaWRlSW5kZXggKz0gbjtcclxuICAgIGlmIChzbGlkZUluZGV4IDw9IDApIHtcclxuICAgICAgICBzbGlkZUluZGV4ID0gbGFzdEltZ051bTtcclxuICAgIH1cclxuICAgIGlmIChzbGlkZUluZGV4ID4gbGFzdEltZ051bSkge1xyXG4gICAgICAgIHNsaWRlSW5kZXggPSAxO1xyXG4gICAgfVxyXG4gICAgbnVtICs9IG47XHJcbiAgICBpZiAobnVtID4gbGFzdEltZ051bSAmJiBuID4gMSkge1xyXG4gICAgICAgIG51bSA9IG47XHJcbiAgICB9IGVsc2UgaWYgKG51bSA+IGxhc3RJbWdOdW0pIHtcclxuICAgICAgICBudW0gPSAxXHJcbiAgICB9XHJcbiAgICBpZiAobnVtIDwgMSAmJiBuIDwgLTEpIHtcclxuICAgICAgICBudW0gPSBsYXN0SW1nTnVtICsgKG4gKyAxKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuKTtcclxuICAgIH0gZWxzZSBpZiAobnVtIDwgMSkge1xyXG4gICAgICAgIG51bSA9IGxhc3RJbWdOdW07XHJcbiAgICB9XHJcbiAgICBzaG93U2xpZGVzKHNsaWRlSW5kZXgsIG51bSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dTbGlkZXMobikge1xyXG4gICAgbGV0IGk7XHJcbiAgICBsZXQgb3JkZXI7XHJcbiAgICBsZXQgZmlsZW5hbWU7XHJcbiAgICBsZXQgaW1nU3JjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3R1YWxfaW1nXCIpO1xyXG4gICAgbGV0IGRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic21hbGxfaW1nXCIpO1xyXG4gICAgbGV0IHZpZGVvTmFtZTtcclxuICAgIGxldCBkZXNjcjtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBkb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZG90c1tpXS5jbGFzc05hbWUgPSBkb3RzW2ldLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcclxuICAgICAgICBvcmRlciA9IGkgKyBudW07XHJcbiAgICAgICAgaWYgKG9yZGVyID4gbGFzdEltZ051bSkge1xyXG4gICAgICAgICAgICBvcmRlciA9IG9yZGVyIC0gbGFzdEltZ051bTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmlsZW5hbWUgPSBmaWxlc1tvcmRlci0xXS50b1N0cmluZygpO1xyXG4gICAgICAgIGRvdHNbaV0uc3JjID0gXCIuLi92aWRlb3MvdGh1bWJuYWlsL1wiICsgZmlsZW5hbWUuc3Vic3RyaW5nKDAsIGZpbGVuYW1lLmxlbmd0aCAtIDQpICsgXCJfdGh1bWIuanBnXCI7XHJcbiAgICAgICAgdmlkZW9OYW1lID0gZG90c1tpXS5zcmMubWF0Y2goL1xcKFwiW15cIl0rXCJ8W15cIlxcL18lOnNdKy9nKTtcclxuICAgICAgICBkZXNjciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZpZGVvTmFtZVs2XS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh2aWRlb05hbWVbNl0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZpZGVvTmFtZSk7XHJcbiAgICAgICAgZGVzY3Iuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG4gICAgaW1nU3JjLnNldEF0dHJpYnV0ZSgncG9zdGVyJywgZG90c1sxXS5zcmMpO1xyXG4gICAgdmlkZW9OYW1lID0gZG90c1sxXS5zcmMubWF0Y2goL1xcKFwiW15cIl0rXCJ8W15cIlxcL18lc10rL2cpO1xyXG4gICAgZGVzY3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2aWRlb05hbWVbN10udG9Mb3dlckNhc2UoKSk7XHJcbiAgICBkZXNjci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgY29uc29sZS5sb2coZGVzY3IpO1xyXG4gICAgZmlsZW5hbWUgPSBkb3RzWzFdLnNyYy5yZXBsYWNlKFwidGh1bWJuYWlsXCIsIFwiZmVhdHVyZV93b3JrXCIpO1xyXG4gICAgaW1nU3JjLnNyYyA9IGZpbGVuYW1lLnJlcGxhY2UoXCJfdGh1bWIuanBnXCIsIFwiLm1wNFwiKTtcclxufVxyXG4iXX0=

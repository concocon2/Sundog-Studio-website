(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let slideIndex = 2;
let num = 1;
let lastImgNum;

var files = ["Cocobay 2 TVC - YouTube.MP4","MrGift_LPL.mp4","Volkath_final_video.mp4"];

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
        videoName = dots[i].src.match(/\("[^"]+"|[^"\/_%s]+/g);
        descr = document.getElementById(videoName[4].toLowerCase());
        console.log(videoName);
        //descr.style.display = "none";
    }
    imgSrc.setAttribute('poster', dots[1].src);
    videoName = dots[1].src.match(/\("[^"]+"|[^"\/_%s]+/g);
    descr = document.getElementById(videoName[4].toLowerCase());
    //descr.style.display = "block";
    console.log(descr);
    filename = dots[1].src.replace("thumbnail", "feature_work");
    imgSrc.src = filename.replace("_thumb.jpg", ".mp4");
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FkbWluaXN0cmF0b3IvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIkY6L0pPQiBXRUJTSVRFL1N1bmRvZy1TdHVkaW8td2Vic2l0ZS9qcy9mZWF0dXJld29yay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUksYUFBYSxDQUFDLENBQUM7QUFDbkIsSUFBSSxNQUFNLENBQUMsQ0FBQztBQUNaLElBQUksVUFBVSxDQUFDO0FBQ2YsQUFBdUI7QUFDdkIsSUFBSSxRQUFRLDBFQUFzQyxDQUFDOztBQUVuRCxhQUFhLEtBQUssT0FBTyxDQUFDOzs7QUFHMUIsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3ZCLFFBQVEsZUFBZSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDN0YsUUFBUSxlQUFlLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7O0FBRTVGLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUNwQixRQUFRLGVBQWUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQ2xIOztBQUVELDZCQUE2QjtJQUN6QixJQUFJLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdCLElBQUksWUFBWSxRQUFRLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdELElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRCxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDcEMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNuQjs7QUFFRCx1QkFBdUI7SUFDbkIsYUFBYSxjQUFjLENBQUMsQ0FBQztJQUM3QixJQUFJLFVBQVUsSUFBSSxDQUFDLEVBQUU7UUFDakIsYUFBYSxVQUFVLENBQUM7S0FDM0I7SUFDRCxJQUFJLFVBQVUsR0FBRyxVQUFVLEVBQUU7UUFDekIsYUFBYSxDQUFDLENBQUM7S0FDbEI7SUFDRCxPQUFPLENBQUMsQ0FBQztJQUNULElBQUksR0FBRyxHQUFHLFVBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQzNCLE1BQU0sQ0FBQyxDQUFDO0tBQ1gsTUFBTSxJQUFJLEdBQUcsR0FBRyxVQUFVLEVBQUU7UUFDekIsTUFBTSxDQUFDO0tBQ1Y7SUFDRCxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ25CLE1BQU0sVUFBVSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNsQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtRQUNoQixNQUFNLFVBQVUsQ0FBQztLQUNwQjtJQUNELFVBQVUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7Q0FDL0I7O0FBRUQsdUJBQXVCO0lBQ25CLElBQUksQ0FBQyxDQUFDO0lBQ04sSUFBSSxLQUFLLENBQUM7SUFDVixJQUFJLFFBQVEsQ0FBQztJQUNiLElBQUksU0FBUyxRQUFRLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuRCxJQUFJLE9BQU8sUUFBUSx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RCxJQUFJLFNBQVMsQ0FBQztJQUNkLElBQUksS0FBSyxDQUFDO0lBQ1YsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDOUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLFFBQVEsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDN0QsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLElBQUksS0FBSyxHQUFHLFVBQVUsRUFBRTtZQUNwQixRQUFRLEtBQUssR0FBRyxVQUFVLENBQUM7U0FDOUI7UUFDRCxXQUFXLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLHNCQUFzQixHQUFHLFFBQVEsVUFBVSxDQUFDLENBQUMsRUFBRSxRQUFRLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUM7UUFDakcsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDdkQsUUFBUSxRQUFRLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDNUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7O0tBRTFCO0lBQ0QsTUFBTSxhQUFhLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDdkQsUUFBUSxRQUFRLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7O0lBRTVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25CLFdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDNUQsTUFBTSxJQUFJLEdBQUcsUUFBUSxRQUFRLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBQ3ZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwibGV0IHNsaWRlSW5kZXggPSAyO1xyXG5sZXQgbnVtID0gMTtcclxubGV0IGxhc3RJbWdOdW07XHJcbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7XHJcbnZhciBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKCd2aWRlb3MvZmVhdHVyZV93b3JrLycpO1xyXG5cclxubGFzdEltZ051bSA9IGZpbGVzLmxlbmd0aDtcclxuXHJcblxyXG5zaG93U2xpZGVzKHNsaWRlSW5kZXgpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7cGx1c1NsaWRlcygtMSl9LCBmYWxzZSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtwbHVzU2xpZGVzKDEpfSwgZmFsc2UpO1xyXG5cclxuZm9yIChpID0gMTsgaSA8IDQ7IGkrKykge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbG90MFwiICsgaS50b1N0cmluZygpKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtvbkltZ0NsaWNrKHRoaXMpfSwgZmFsc2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkltZ0NsaWNrKGVsZW1lbnQpIHtcclxuICAgIGxldCBuID0gZWxlbWVudC5pZC5zbGljZSgtMSk7XHJcbiAgICBsZXQgdGh1bWJJbWcgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNtYWxsX2ltZ1wiKTtcclxuICAgIGxldCBpbWdOdW0gPSAodGh1bWJJbWdbbi0xXS5zcmMuc2xpY2UoLTUpKS5jaGFyQXQoMCk7XHJcbiAgICB0aHVtYkltZ1sxXS5zcmMgPSB0aHVtYkltZ1tuLTFdLnNyYztcclxuICAgIHBsdXNTbGlkZXMobi0yKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGx1c1NsaWRlcyhuKSB7XHJcbiAgICBzbGlkZUluZGV4ID0gc2xpZGVJbmRleCArPSBuO1xyXG4gICAgaWYgKHNsaWRlSW5kZXggPD0gMCkge1xyXG4gICAgICAgIHNsaWRlSW5kZXggPSBsYXN0SW1nTnVtO1xyXG4gICAgfVxyXG4gICAgaWYgKHNsaWRlSW5kZXggPiBsYXN0SW1nTnVtKSB7XHJcbiAgICAgICAgc2xpZGVJbmRleCA9IDE7XHJcbiAgICB9XHJcbiAgICBudW0gKz0gbjtcclxuICAgIGlmIChudW0gPiBsYXN0SW1nTnVtICYmIG4gPiAxKSB7XHJcbiAgICAgICAgbnVtID0gbjtcclxuICAgIH0gZWxzZSBpZiAobnVtID4gbGFzdEltZ051bSkge1xyXG4gICAgICAgIG51bSA9IDFcclxuICAgIH1cclxuICAgIGlmIChudW0gPCAxICYmIG4gPCAtMSkge1xyXG4gICAgICAgIG51bSA9IGxhc3RJbWdOdW0gKyAobiArIDEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG4pO1xyXG4gICAgfSBlbHNlIGlmIChudW0gPCAxKSB7XHJcbiAgICAgICAgbnVtID0gbGFzdEltZ051bTtcclxuICAgIH1cclxuICAgIHNob3dTbGlkZXMoc2xpZGVJbmRleCwgbnVtKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1NsaWRlcyhuKSB7XHJcbiAgICBsZXQgaTtcclxuICAgIGxldCBvcmRlcjtcclxuICAgIGxldCBmaWxlbmFtZTtcclxuICAgIGxldCBpbWdTcmMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdHVhbF9pbWdcIik7XHJcbiAgICBsZXQgZG90cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzbWFsbF9pbWdcIik7XHJcbiAgICBsZXQgdmlkZW9OYW1lO1xyXG4gICAgbGV0IGRlc2NyO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IGRvdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBkb3RzW2ldLmNsYXNzTmFtZSA9IGRvdHNbaV0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xyXG4gICAgICAgIG9yZGVyID0gaSArIG51bTtcclxuICAgICAgICBpZiAob3JkZXIgPiBsYXN0SW1nTnVtKSB7XHJcbiAgICAgICAgICAgIG9yZGVyID0gb3JkZXIgLSBsYXN0SW1nTnVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaWxlbmFtZSA9IGZpbGVzW29yZGVyLTFdLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgZG90c1tpXS5zcmMgPSBcIi4uL3ZpZGVvcy90aHVtYm5haWwvXCIgKyBmaWxlbmFtZS5zdWJzdHJpbmcoMCwgZmlsZW5hbWUubGVuZ3RoIC0gNCkgKyBcIl90aHVtYi5qcGdcIjtcclxuICAgICAgICB2aWRlb05hbWUgPSBkb3RzW2ldLnNyYy5tYXRjaCgvXFwoXCJbXlwiXStcInxbXlwiXFwvXyVzXSsvZyk7XHJcbiAgICAgICAgZGVzY3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2aWRlb05hbWVbNF0udG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codmlkZW9OYW1lKTtcclxuICAgICAgICAvL2Rlc2NyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuICAgIGltZ1NyYy5zZXRBdHRyaWJ1dGUoJ3Bvc3RlcicsIGRvdHNbMV0uc3JjKTtcclxuICAgIHZpZGVvTmFtZSA9IGRvdHNbMV0uc3JjLm1hdGNoKC9cXChcIlteXCJdK1wifFteXCJcXC9fJXNdKy9nKTtcclxuICAgIGRlc2NyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmlkZW9OYW1lWzRdLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgLy9kZXNjci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgY29uc29sZS5sb2coZGVzY3IpO1xyXG4gICAgZmlsZW5hbWUgPSBkb3RzWzFdLnNyYy5yZXBsYWNlKFwidGh1bWJuYWlsXCIsIFwiZmVhdHVyZV93b3JrXCIpO1xyXG4gICAgaW1nU3JjLnNyYyA9IGZpbGVuYW1lLnJlcGxhY2UoXCJfdGh1bWIuanBnXCIsIFwiLm1wNFwiKTtcclxufVxyXG4iXX0=

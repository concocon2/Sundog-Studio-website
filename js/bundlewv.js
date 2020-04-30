(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let slideIndex = 3;
let num = 1;
let lastImgNum;

var files = ["Another (x3) Love story - YouTube (360p).mp4","Another love story_(1080p).mp4","Cocobay 2 TVC - YouTube.MP4","Cocobay TVC - YouTube.MP4","H&P.mp4","Hiruscar Campaign Clip 1 - YouTube (360p).mp4","Hiruscar Campaign Clip 2 - YouTube (360p).mp4","Marineboys_final_30s.mp4","Mecha_LuBu_youtube1080p_noVO.mp4","MrGift_LPL.mp4","quillen_final_music_vfx.mp4","Symphony of Love_(1080p).mp4","The Love Story_(1080p).mp4","Volkath_final_video.mp4","We will be Happy_final cut.mp4","when all star align.mp4","youtube ver.mp4","[Phim hoạt hình] Cô Tấm cao lớn và những chuyện chưa kể - YouTube.MP4","[Phim Hoạt Hình ] 7 Chú Cao và nàng Bạch Tuyết - YouTube.MP4","[Phim hoạt hình] Alice lạc vào xứ sở cao lớn - YouTube.MP4"];

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
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        order = i + num;
        if (order > lastImgNum) {
            order = order - lastImgNum;
        }
        filename = files[order-1].toString();
        dots[i].src = "/content/thumbnail/" + filename.substring(0, filename.length - 4) + "_thumb.png";
        console.log(order-1);
        console.log(files[10]);
    }
    filename = dots[2].src.replace("thumbnail", "videos");
    imgSrc.src = filename.replace("_thumb.png", ".mp4");
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL3VzZXIvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIkY6L0xBTS93ZWJzaXRlL0dpdEh1Yi9TdW5kb2ctU3R1ZGlvLVdlYnNpdGUvanMvd29ya3ZpZGVvcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUksYUFBYSxDQUFDLENBQUM7QUFDbkIsSUFBSSxNQUFNLENBQUMsQ0FBQztBQUNaLElBQUksVUFBVSxDQUFDO0FBQ2YsQUFBdUI7QUFDdkIsSUFBSSxRQUFRLGl0QkFBbUMsQ0FBQzs7QUFFaEQsYUFBYSxLQUFLLE9BQU8sQ0FBQztBQUMxQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7O0FBR25CLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN2QixRQUFRLGVBQWUsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzdGLFFBQVEsZUFBZSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDOztBQUU1RixLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDcEIsUUFBUSxlQUFlLENBQUMsT0FBTyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztDQUNsSDs7QUFFRCw2QkFBNkI7SUFDekIsSUFBSSxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QixJQUFJLFlBQVksUUFBUSx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3RCxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckQsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3BDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDbkI7O0FBRUQsdUJBQXVCO0lBQ25CLGFBQWEsY0FBYyxDQUFDLENBQUM7SUFDN0IsSUFBSSxVQUFVLElBQUksQ0FBQyxFQUFFO1FBQ2pCLGFBQWEsVUFBVSxDQUFDO0tBQzNCO0lBQ0QsSUFBSSxVQUFVLEdBQUcsVUFBVSxFQUFFO1FBQ3pCLGFBQWEsQ0FBQyxDQUFDO0tBQ2xCO0lBQ0QsT0FBTyxDQUFDLENBQUM7SUFDVCxJQUFJLEdBQUcsR0FBRyxVQUFVLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUMzQixNQUFNLENBQUMsQ0FBQztLQUNYLE1BQU0sSUFBSSxHQUFHLEdBQUcsVUFBVSxFQUFFO1FBQ3pCLE1BQU0sQ0FBQztLQUNWO0lBQ0QsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUNuQixNQUFNLFVBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEIsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7UUFDaEIsTUFBTSxVQUFVLENBQUM7S0FDcEI7SUFDRCxVQUFVLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0NBQy9COztBQUVELHVCQUF1QjtJQUNuQixJQUFJLENBQUMsQ0FBQztJQUNOLElBQUksS0FBSyxDQUFDO0lBQ1YsSUFBSSxTQUFTLFFBQVEsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25ELElBQUksT0FBTyxRQUFRLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hELEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzlCLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxRQUFRLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdELFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNoQixJQUFJLEtBQUssR0FBRyxVQUFVLEVBQUU7WUFDcEIsUUFBUSxLQUFLLEdBQUcsVUFBVSxDQUFDO1NBQzlCO1FBQ0QsV0FBVyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxxQkFBcUIsR0FBRyxRQUFRLFVBQVUsQ0FBQyxDQUFDLEVBQUUsUUFBUSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDO1FBQ2hHLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUMxQjtJQUNELFdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEQsTUFBTSxJQUFJLEdBQUcsUUFBUSxRQUFRLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBQ3ZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwibGV0IHNsaWRlSW5kZXggPSAzO1xyXG5sZXQgbnVtID0gMTtcclxubGV0IGxhc3RJbWdOdW07XHJcbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7XHJcbnZhciBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKCcuL2NvbnRlbnQvdmlkZW9zLycpO1xyXG5cclxubGFzdEltZ051bSA9IGZpbGVzLmxlbmd0aDtcclxuY29uc29sZS5sb2coZmlsZXMpO1xyXG5cclxuXHJcbnNob3dTbGlkZXMoc2xpZGVJbmRleCk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJldlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtwbHVzU2xpZGVzKC0xKX0sIGZhbHNlKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe3BsdXNTbGlkZXMoMSl9LCBmYWxzZSk7XHJcblxyXG5mb3IgKGkgPSAxOyBpIDwgNjsgaSsrKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsb3QwXCIgKyBpLnRvU3RyaW5nKCkpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe29uSW1nQ2xpY2sodGhpcyl9LCBmYWxzZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uSW1nQ2xpY2soZWxlbWVudCkge1xyXG4gICAgbGV0IG4gPSBlbGVtZW50LmlkLnNsaWNlKC0xKTtcclxuICAgIGxldCB0aHVtYkltZyA9ICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic21hbGxfaW1nXCIpO1xyXG4gICAgbGV0IGltZ051bSA9ICh0aHVtYkltZ1tuLTFdLnNyYy5zbGljZSgtNSkpLmNoYXJBdCgwKTtcclxuICAgIHRodW1iSW1nWzJdLnNyYyA9IHRodW1iSW1nW24tMV0uc3JjO1xyXG4gICAgcGx1c1NsaWRlcyhuLTMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbHVzU2xpZGVzKG4pIHtcclxuICAgIHNsaWRlSW5kZXggPSBzbGlkZUluZGV4ICs9IG47XHJcbiAgICBpZiAoc2xpZGVJbmRleCA8PSAwKSB7XHJcbiAgICAgICAgc2xpZGVJbmRleCA9IGxhc3RJbWdOdW07XHJcbiAgICB9XHJcbiAgICBpZiAoc2xpZGVJbmRleCA+IGxhc3RJbWdOdW0pIHtcclxuICAgICAgICBzbGlkZUluZGV4ID0gMTtcclxuICAgIH1cclxuICAgIG51bSArPSBuO1xyXG4gICAgaWYgKG51bSA+IGxhc3RJbWdOdW0gJiYgbiA+IDEpIHtcclxuICAgICAgICBudW0gPSBuO1xyXG4gICAgfSBlbHNlIGlmIChudW0gPiBsYXN0SW1nTnVtKSB7XHJcbiAgICAgICAgbnVtID0gMVxyXG4gICAgfVxyXG4gICAgaWYgKG51bSA8IDEgJiYgbiA8IC0xKSB7XHJcbiAgICAgICAgbnVtID0gbGFzdEltZ051bSArIChuICsgMSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobik7XHJcbiAgICB9IGVsc2UgaWYgKG51bSA8IDEpIHtcclxuICAgICAgICBudW0gPSBsYXN0SW1nTnVtO1xyXG4gICAgfVxyXG4gICAgc2hvd1NsaWRlcyhzbGlkZUluZGV4LCBudW0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93U2xpZGVzKG4pIHtcclxuICAgIGxldCBpO1xyXG4gICAgbGV0IG9yZGVyO1xyXG4gICAgbGV0IGltZ1NyYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0dWFsX2ltZ1wiKTtcclxuICAgIGxldCBkb3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNtYWxsX2ltZ1wiKTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBkb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZG90c1tpXS5jbGFzc05hbWUgPSBkb3RzW2ldLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcclxuICAgICAgICBvcmRlciA9IGkgKyBudW07XHJcbiAgICAgICAgaWYgKG9yZGVyID4gbGFzdEltZ051bSkge1xyXG4gICAgICAgICAgICBvcmRlciA9IG9yZGVyIC0gbGFzdEltZ051bTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmlsZW5hbWUgPSBmaWxlc1tvcmRlci0xXS50b1N0cmluZygpO1xyXG4gICAgICAgIGRvdHNbaV0uc3JjID0gXCIvY29udGVudC90aHVtYm5haWwvXCIgKyBmaWxlbmFtZS5zdWJzdHJpbmcoMCwgZmlsZW5hbWUubGVuZ3RoIC0gNCkgKyBcIl90aHVtYi5wbmdcIjtcclxuICAgICAgICBjb25zb2xlLmxvZyhvcmRlci0xKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhmaWxlc1sxMF0pO1xyXG4gICAgfVxyXG4gICAgZmlsZW5hbWUgPSBkb3RzWzJdLnNyYy5yZXBsYWNlKFwidGh1bWJuYWlsXCIsIFwidmlkZW9zXCIpO1xyXG4gICAgaW1nU3JjLnNyYyA9IGZpbGVuYW1lLnJlcGxhY2UoXCJfdGh1bWIucG5nXCIsIFwiLm1wNFwiKTtcclxufVxyXG4iXX0=

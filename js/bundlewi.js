(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let slideIndex = 3;
let num = 1;
let lastImgNum;

var files = ["1b.jpg","21_MB.jpg","33972d40444579.578c4f4edf399.jpg","36_MB.jpg","37_MB.jpg","3a.jpg","4d7df540444579.578c4cbc926c3.jpg","5 _ restaurant.png","586e0040444579.578c4cbc8fb29.jpg","59169f40444579.577f778322d58.jpg","5c184040444579.577f70ea74e46.jpg","6 _ boxing ring.png","8 _ hotel.png","aa90d340444579.577f7783234a9.jpg","afc16b40444579.577f790558d87.jpg","char.jpg","character design.jpg","f1502040444579.577f70ea75430.jpg","f266e140444579.577f7783227d6.jpg","full board.jpg","phan tich net.jpg","riot idea 1.jpg","riot idea 2.jpg","storyboard.jpg","styleframe.jpg","waterparkCSsp.jpg"];

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
        dots[i].src = "/content/images/" + files[order-1].toString();
        console.log(order-1);
        console.log(files[10]);
    }
    imgSrc.src = dots[2].src;
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL3VzZXIvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIkY6L0xBTS93ZWJzaXRlL0dpdEh1Yi9TdW5kb2ctU3R1ZGlvLVdlYnNpdGUvanMvd29ya2ltYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBSSxhQUFhLENBQUMsQ0FBQztBQUNuQixJQUFJLE1BQU0sQ0FBQyxDQUFDO0FBQ1osSUFBSSxVQUFVLENBQUM7QUFDZixBQUF1QjtBQUN2QixJQUFJLFFBQVEsOGtCQUFtQyxDQUFDOztBQUVoRCxhQUFhLEtBQUssT0FBTyxDQUFDO0FBQzFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7QUFHbkIsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3ZCLFFBQVEsZUFBZSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDN0YsUUFBUSxlQUFlLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7O0FBRTVGLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUNwQixRQUFRLGVBQWUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQ2xIOztBQUVELDZCQUE2QjtJQUN6QixJQUFJLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdCLElBQUksWUFBWSxRQUFRLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdELElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRCxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDcEMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNuQjs7QUFFRCx1QkFBdUI7SUFDbkIsYUFBYSxjQUFjLENBQUMsQ0FBQztJQUM3QixJQUFJLFVBQVUsSUFBSSxDQUFDLEVBQUU7UUFDakIsYUFBYSxVQUFVLENBQUM7S0FDM0I7SUFDRCxJQUFJLFVBQVUsR0FBRyxVQUFVLEVBQUU7UUFDekIsYUFBYSxDQUFDLENBQUM7S0FDbEI7SUFDRCxPQUFPLENBQUMsQ0FBQztJQUNULElBQUksR0FBRyxHQUFHLFVBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQzNCLE1BQU0sQ0FBQyxDQUFDO0tBQ1gsTUFBTSxJQUFJLEdBQUcsR0FBRyxVQUFVLEVBQUU7UUFDekIsTUFBTSxDQUFDO0tBQ1Y7SUFDRCxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ25CLE1BQU0sVUFBVSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNsQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtRQUNoQixNQUFNLFVBQVUsQ0FBQztLQUNwQjtJQUNELFVBQVUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7Q0FDL0I7O0FBRUQsdUJBQXVCO0lBQ25CLElBQUksQ0FBQyxDQUFDO0lBQ04sSUFBSSxLQUFLLENBQUM7SUFDVixJQUFJLFNBQVMsUUFBUSxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbkQsSUFBSSxPQUFPLFFBQVEsdUJBQXVCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEQsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDOUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLFFBQVEsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDN0QsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLElBQUksS0FBSyxHQUFHLFVBQVUsRUFBRTtZQUNwQixRQUFRLEtBQUssR0FBRyxVQUFVLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM3RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDMUI7SUFDRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztDQUM1QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImxldCBzbGlkZUluZGV4ID0gMztcclxubGV0IG51bSA9IDE7XHJcbmxldCBsYXN0SW1nTnVtO1xyXG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xyXG52YXIgZmlsZXMgPSBmcy5yZWFkZGlyU3luYygnLi9jb250ZW50L2ltYWdlcy8nKTtcclxuXHJcbmxhc3RJbWdOdW0gPSBmaWxlcy5sZW5ndGg7XHJcbmNvbnNvbGUubG9nKGZpbGVzKTtcclxuXHJcblxyXG5zaG93U2xpZGVzKHNsaWRlSW5kZXgpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7cGx1c1NsaWRlcygtMSl9LCBmYWxzZSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtwbHVzU2xpZGVzKDEpfSwgZmFsc2UpO1xyXG5cclxuZm9yIChpID0gMTsgaSA8IDY7IGkrKykge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbG90MFwiICsgaS50b1N0cmluZygpKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtvbkltZ0NsaWNrKHRoaXMpfSwgZmFsc2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkltZ0NsaWNrKGVsZW1lbnQpIHtcclxuICAgIGxldCBuID0gZWxlbWVudC5pZC5zbGljZSgtMSk7XHJcbiAgICBsZXQgdGh1bWJJbWcgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNtYWxsX2ltZ1wiKTtcclxuICAgIGxldCBpbWdOdW0gPSAodGh1bWJJbWdbbi0xXS5zcmMuc2xpY2UoLTUpKS5jaGFyQXQoMCk7XHJcbiAgICB0aHVtYkltZ1syXS5zcmMgPSB0aHVtYkltZ1tuLTFdLnNyYztcclxuICAgIHBsdXNTbGlkZXMobi0zKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGx1c1NsaWRlcyhuKSB7XHJcbiAgICBzbGlkZUluZGV4ID0gc2xpZGVJbmRleCArPSBuO1xyXG4gICAgaWYgKHNsaWRlSW5kZXggPD0gMCkge1xyXG4gICAgICAgIHNsaWRlSW5kZXggPSBsYXN0SW1nTnVtO1xyXG4gICAgfVxyXG4gICAgaWYgKHNsaWRlSW5kZXggPiBsYXN0SW1nTnVtKSB7XHJcbiAgICAgICAgc2xpZGVJbmRleCA9IDE7XHJcbiAgICB9XHJcbiAgICBudW0gKz0gbjtcclxuICAgIGlmIChudW0gPiBsYXN0SW1nTnVtICYmIG4gPiAxKSB7XHJcbiAgICAgICAgbnVtID0gbjtcclxuICAgIH0gZWxzZSBpZiAobnVtID4gbGFzdEltZ051bSkge1xyXG4gICAgICAgIG51bSA9IDFcclxuICAgIH1cclxuICAgIGlmIChudW0gPCAxICYmIG4gPCAtMSkge1xyXG4gICAgICAgIG51bSA9IGxhc3RJbWdOdW0gKyAobiArIDEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG4pO1xyXG4gICAgfSBlbHNlIGlmIChudW0gPCAxKSB7XHJcbiAgICAgICAgbnVtID0gbGFzdEltZ051bTtcclxuICAgIH1cclxuICAgIHNob3dTbGlkZXMoc2xpZGVJbmRleCwgbnVtKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1NsaWRlcyhuKSB7XHJcbiAgICBsZXQgaTtcclxuICAgIGxldCBvcmRlcjtcclxuICAgIGxldCBpbWdTcmMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdHVhbF9pbWdcIik7XHJcbiAgICBsZXQgZG90cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzbWFsbF9pbWdcIik7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgZG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGRvdHNbaV0uY2xhc3NOYW1lID0gZG90c1tpXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XHJcbiAgICAgICAgb3JkZXIgPSBpICsgbnVtO1xyXG4gICAgICAgIGlmIChvcmRlciA+IGxhc3RJbWdOdW0pIHtcclxuICAgICAgICAgICAgb3JkZXIgPSBvcmRlciAtIGxhc3RJbWdOdW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvdHNbaV0uc3JjID0gXCIvY29udGVudC9pbWFnZXMvXCIgKyBmaWxlc1tvcmRlci0xXS50b1N0cmluZygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG9yZGVyLTEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGVzWzEwXSk7XHJcbiAgICB9XHJcbiAgICBpbWdTcmMuc3JjID0gZG90c1syXS5zcmM7XHJcbn1cclxuIl19

(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            // docEl.style.fontSize = 15 * (clientWidth / 320) + 'px';
            docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';// 320 代表设计稿尺寸
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

// iphone4宽度是320px，那么font-size就是100px, 100px就是1rem             rem值=设计稿实际尺寸/font-size
// iphone6宽度是375px

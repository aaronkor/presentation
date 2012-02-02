impress.steps = {
    "introduction": {
        x: -300, y: -600, scale: 6 },
    "nodejs-is": {
        x: 3200, y: -1200, scale: 3 },
    "io-expensive": {
        x: 3000, y: 0, scale: 1.5 },
    "deal": {
        x: 3000, y: 600, scale: 1 },
    "rocky-vs-drago": {
        x: 5900, y: -1650, scale: 0.5  },
    "graphs": {
        x: 5100, y: -800, scale: 1 },
    "difference": {
        x: 5100, y: -1650, scale: 2  },
    "threads-wrong": {
        x: 5600, y: 400, scale: 1  },
    "in-node": {
        x: -200, y: 2500, scale: 4  },
    "king": {
        x: 3700, y: 500, scale: 1  },
    "conventional-query": {
        x: -600, y: 600, scale: 1 },
    "node-query": {
        x: -200, y: 1400, scale: 4  },
    "timeout-example": {
        x: 5900, y: -1000, scale: 1  },
    "write-code": {
        x: 2050, y: 1900, scale: 2.5, rotate: -90  },
    "npm": {
        x: 3500, y: 2350, scale: 1.5  },
    "packages": {
        x: 3450, y: 1300, scale: 1.5  },
    "sum-up": {
        x: 4000, y: -100, scale: 1, rotate: -90  },

    "thanks": {
        x: 5500, y: 2150, scale: 3.5 },




    "what-is-deferred": {
        x: 100, y: 1270, scale: 4 },
    "deferred": {
        x: -800, y: 2000, scale: 1.5 },
    "deferred-example": {
        x: 700, y: 2000, scale: 1.5 },

    "what-is-a-promise": {
        x: 2800, y: 1000, scale: 4 },
    "promise": {
        x: 2200, y: 1650, scale: 1.5 },
    "attaching-observers": {
        x: 3500, y: 1550, scale: 1.5 },
    "chaining-promises": {
        x: 2200, y: 2600, scale: 1.5 },
    "chaining-promises-cont": {
        x: 2200, y: 3500, scale: 1.5 },
    "nesting-promises": {
        x: 2200, y: 4300, scale: 1.5 },
    "error-handling": {
        x: 3500, y: 2600, scale: 1.5 },
    "end": {
        x: 3500, y: 3800, scale: 1.5 },

    "promisify": {
        x: -800, y: 3100, scale: 1.5 },
    "promisify-cont": {
        x: -800, y: 4000, scale: 1.5 },
    "grouping-promises": {
        x: 700, y: 2950, scale: 1.5 },
    "processing-collections": {
        x: 700, y: 3850, scale: 1.5 },
    "promise-extensions": {
        x: -800, y: 4800, scale: 1.5 },
    "invoke": {
        x: 700, y: 5000, scale: 1.5 },

    "match": {
        x: 2200, y: 5100, scale: 1.5 },
    "example-promises": {
        x: 3500, y: 5000, scale: 1.5 },

    "future": {
        x: 4900, y: 3800, scale: 1.5 },
    "coroutines": {
        x: 6200, y: 3800, scale: 1.5 },
    "proxies": {
        x: 7500, y: 3700, scale: 1.5 },
    "example-proxies": {
        x: 7500, y: 4650, scale: 1.5 },

    "questions": {
        x: 8000, y: 2000, rotate: { y: 65, z: -90 }, scale: 5 },

    "thank-you": {
        x: 6400, y: 1600, scale: 5 }
};
//if (location.pathname.match(/\/3d\/(?:index\.html)?$/)) {
//    document.getElementById('fm1').className = 'fallback-message';
//    document.getElementById('fm2').className = 'fallback-message hidden';
    impress.init();
//}

hljs.initHighlightingOnLoad();

(function () {
    if (!document.querySelector || !Array.prototype.forEach) {
        return;
    }
    var forEach = Array.prototype.forEach
      , keys = Object.keys
      , steps = document.querySelectorAll("div.step")

    forEach.call(steps, function (dom, index) {
        if (dom.id !== 'overview') {
            var wrap = document.createElement("div");
            wrap.className = 'wrap';
            while (dom.firstChild) {
                wrap.appendChild(dom.firstChild);
            }
            dom.appendChild(wrap);
            var counter = wrap.appendChild(document.createElement('div'));
            counter.className = "counter";
            counter.innerHTML = (index + 1) + " / " + steps.length;
        }
    });

    var start = Date.now();
    var timerDom = document.getElementById('timer')
      , log = window.TIMELOG = [];

    var durationToStr = function () {
        var now = Date.now()
          , min = String(Math.floor((now - start)/(1000*60)))
          , sec = String(Math.floor((now - start)/(1000))%60);
        return ((min.length > 1) ? min : ('0' + min)) + ':' +
            ((sec.length > 1) ? sec : ('0' + sec));
    };
    // setInterval(function () {
    //     timerDom.innerHTML = durationToStr();
    // }, 1000);


    window.addEventListener("hashchange", function () {
        console.log("HASH CHANGE", location.hash);
        log.push([location.hash, durationToStr()]);
    }, false);

}());

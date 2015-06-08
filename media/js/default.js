impress.steps = {
    "introduction": { x: 0, y: 700, scale: 5},
    "nodejs-is": { x: 2700, y: 200, scale: 3},
    "io-expensive": { x: 4200, y: 0, scale: 1.5},
    "deal": {x: 4200, y: 1000, scale: 1.6},
    "graphs": {x: 5500, y: 0, scale: 1.2},
    "difference": {x: 5300, y: 1000, scale: 1.5},
    "threads-wrong": {x: 5000, y: 2000, scale: 2.5},
    "in-node": {x: 2800, y:1500, scale: 3.5},
    "king": {x: -500, y:2500, scale: 1.5},
    "event-loop": {x: 900, y:2500, scale: 2, rotate: -90},
    "node-query": {x: 2400, y:2300, scale: 1.5},
    "timeout-example": {x: 4600, y:2900, scale: 3},
    "write-code": {x: 2400, y: 2900, scale: 1.5},
    "npm": {x: -500, y: 3600, scale: 1},
    "packages": {x: 900, y: 3600, scale: 1},
    "usecases": {x: -650, y:4400, scale: 1},
    "advantages": {x: 2300, y: 3900, scale: 2},
    "disadvantages": {x: 2300, y: 4700, scale: 1.5, rotate: 180},
    "more": {x: 250, y:4300, scale: 1.5},
    "blocks": {x: 1200, y:4500, scale: 1},
    "twospeed": {x: 300, y:4700, scale: 1},
    "microservices": {x: 300, y:4700, scale: 1},
    "zerodowntime": {x: 300, y:4700, scale: 1},
    "realtime": {x: 300, y:4700, scale: 1},
    "further": {x: 3500, y: 4000, scale: 1},
    "thanks": {x: 4650, y: 4400, scale: 2.5},
    //
    "overview": { x:2600, y:2000, scale:8, rotate: -10 }
}

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

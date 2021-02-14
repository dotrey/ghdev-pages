let cells = cellular({
    gradient : [
        {
            stop : 0,
            color : "#ff0000"
        },
        {
            stop : 0.5,
            color : "#00ff00"
        },
        {
            stop : 1,
            color : "#0000ff"
        }
    ],
    defaultOpacity : 0.5
});

let processing = false;
window.addEventListener("scroll", function() {
    if (!processing) {
        processing = true;
        requestAnimationFrame(function() {
            let gradient = -360 * (
                document.scrollingElement.scrollTop / 
                (document.scrollingElement.scrollHeight - document.body.offsetHeight));
            document.body.setAttribute("style", "--gradient-hue:" + gradient.toFixed(1));
            processing = false;
        });
    }
});
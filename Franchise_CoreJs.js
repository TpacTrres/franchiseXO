// JavaScript to update the img src attribute
var GIFimage = document.getElementById("GIF_MC");
// Switch between GIF_MIC_1.png and GIF_MIC_14.png
var isLinePath1 = 1;

function switchPath() {
    GIFimage.setAttribute("src", "file:///C:/Users/Tupac/Pictures/GIF%20Frames/GIF%20Frames%20Monochrome/GIF_MIC_" + isLinePath1 + ".png");
    isLinePath1 = (isLinePath1 % 14) + 1;
}

// Call the switchPath function after a delay (for demonstration)
setInterval(switchPath, 62.5); // Switch every 1.2 seconds


// Allow scrolling with mouse wheel or touchpad
document.addEventListener("wheel", function (event) {
    window.scrollBy(0, event.deltaY);
});

// ascii.js

var interval;
var frameIndex = 0;
var animationFrames;
var animationSpeed = 250; // default speed

document.addEventListener("DOMContentLoaded", function() {
    var startButton = document.getElementById("start");
    var stopButton = document.getElementById("stop");
    var animationSelect = document.getElementById("animation");
    var textArea = document.getElementById("text-area");
    var fontSizeSelect = document.getElementById("fontsize");
    var turboCheckbox = document.getElementById("turbo");

    startButton.addEventListener("click", startAnimation);
    stopButton.addEventListener("click", stopAnimation);
    animationSelect.addEventListener("change", updateAnimation);
    fontSizeSelect.addEventListener("change", updateFontSize);
    turboCheckbox.addEventListener("change", updateSpeed);

    function startAnimation() {
        frameIndex = 0;
        startButton.disabled = true;
        stopButton.disabled = false;
        interval = setInterval(playAnimation, animationSpeed);
    }

    function stopAnimation() {
        startButton.disabled = false;
        stopButton.disabled = true;
        clearInterval(interval);
    }

    function updateAnimation() {
        var selectedAnimation = animationSelect.value.toUpperCase();
        animationFrames = ANIMATIONS[selectedAnimation].split("=====\n");
        textArea.value = ANIMATIONS[selectedAnimation];
    }

    function updateFontSize() {
        var selectedSize = fontSizeSelect.value;
        textArea.style.fontSize = selectedSize;
    }

    function updateSpeed() {
        animationSpeed = turboCheckbox.checked ? 50 : 250;
        if (!startButton.disabled) {
            clearInterval(interval);
            interval = setInterval(playAnimation, animationSpeed);
        }
    }

    function playAnimation() {
        textArea.value = animationFrames[frameIndex];
        frameIndex = (frameIndex + 1) % animationFrames.length;
    }

    updateAnimation();
    updateFontSize();
});

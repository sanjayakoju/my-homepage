$(document).ready(function () {
    $('#start').click(function () {
        let width = parseInt($('#width').val());
        let growthAmount = parseInt($('#growthAmount').val());
        let interval = parseInt($('#interval').val());
        let numberCircles = parseInt($('#numberCircles').val());

        let circles = [];
        for (let i = 0; i < numberCircles; i++) {
            let circle = $('<div>', {
                class: 'circle',
                css: {
                    width: width,
                    height: width,
                    backgroundColor: getRandomColor(),
                    top: getRandomPosition().top,
                    left: getRandomPosition().left
                },
                click: function () {
                    clearInterval(circle.data('timer'));
                    $(this).remove();
                },
                mouseenter: function () {
                    $(this).css('opacity', 0.5);
                },
                mouseleave: function () {
                    $(this).css('opacity', 1);
                }
            });

            circles.push(circle);
            growCircle(circle, growthAmount, interval);
        }

        $('body').append(circles);
    });

    function growCircle(circle, growthAmount, interval) {
        let timer = setInterval(function () {
            let newSize = circle.width() + growthAmount;
            circle.css({
                width: newSize,
                height: newSize
            });
        }, interval);

        circle.data('timer', timer);
    }

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function getRandomPosition() {
        let top = Math.floor(Math.random() * ($(window).height() - 100));
        let left = Math.floor(Math.random() * ($(window).width() - 100));
        return { top: top, left: left };
    }
});

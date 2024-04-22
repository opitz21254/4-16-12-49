

document.addEventListener('DOMContentLoaded', function () {
    // Function to set opacity of .inner.start elements to 1
    function setOpacityToOne() {
        var elements = document.querySelectorAll('.line .inner.start');
        elements.forEach(function (element) {
            element.style.opacity = '1';
        });
    }

    // Add event listener for 'scroll' events on the window object
    window.addEventListener('scroll', setOpacityToOne);
     window.addEventListener('click', setOpacityToOne);
});

document.addEventListener('DOMContentLoaded', () => {


    const rootElement = document.querySelector('#root');
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;
    let isThrottled = false;

    document.addEventListener('swipeUp', () => {
        console.log('up');
    })
    document.addEventListener('swipeDown', () => {
        console.log('down');
    })

    document.addEventListener('swipeLeft', () => {
        console.log('left');
    })

    document.addEventListener('swipeRight', () => {
        console.log('right');
    })




    document.addEventListener('mousewheel', function(event) {

        if (isThrottled) return;
        isThrottled = true;

        setTimeout(function() {
            isThrottled = false;
        }, 1000)

        const direction = event.wheelDelta < 0 ? 1 : -1;






        scroll(direction);
        scrollToCurrentSection();
    })

    function scroll(direction) {

        if (direction === 1) {
            const isLastSection = currentSectionIndex === sections.length - 1;
            if (isLastSection) return;


        } else if (direction === -1) {
            const firstSection = currentSectionIndex === 0;
            if (firstSection) return;

        }

        currentSectionIndex = currentSectionIndex + direction;
    }

    function scrollToCurrentSection() {
        sections[currentSectionIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }
})
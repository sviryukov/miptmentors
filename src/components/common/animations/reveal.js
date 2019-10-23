export default (delay = 100) => {
    const revealElements = document.getElementsByClassName('revealElement');
    let revealElementsScrollPositions = {};
    let offset_top;
    for (let i = 0; i < revealElements.length; i++) {
        offset_top = revealElements[i].getBoundingClientRect().top
            + window.pageYOffset
            - parseInt(revealElements[i].dataset.revealOffsetTop);
        if (revealElementsScrollPositions[offset_top] === undefined)
            revealElementsScrollPositions[offset_top] = [revealElements[i]];
        else revealElementsScrollPositions[offset_top].push(revealElements[i]);
    }
    let breakPoints = Object.keys(revealElementsScrollPositions);
    let passedBreakPoints;
    let reveal_counter;
    const checkBreakPoints = () => {
        passedBreakPoints = [];
        reveal_counter = 0;
        breakPoints.map((break_point, break_point_i) => {
            if (window.pageYOffset + window.innerHeight > parseInt(break_point)) {
                revealElementsScrollPositions[break_point].map(revealElement => {
                    setTimeout(() => {
                        revealElement.style.opacity = 1;
                        revealElement.style.top = revealElement.dataset.finalPosition;
                    }, delay * reveal_counter);
                    reveal_counter++;
                });
                passedBreakPoints.push(break_point_i);
            }
        });
        passedBreakPoints.map((break_point_i, passed_break_point_i) => {
            breakPoints.splice(break_point_i - passed_break_point_i, 1);
        });
        if(breakPoints.length === 0) window.removeEventListener('scroll', checkBreakPoints);
    };
    checkBreakPoints();
    window.addEventListener('scroll', checkBreakPoints);
}
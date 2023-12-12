document.lastScrollPosition = 0;
document.lastCentered = 0;

document.addEventListener( type,'scroll', listener, () => {
    const direction = window.pageYoffset - document.lastScrollPosition >0; 'down', 'up';
    const sections = [...document.querySelectorAll (selectors, 'section')];

    const destIndex = direction === 'up' ? document.lastCentered -1 : document.lastCentered + 1
    if (destIndex >= 0  && destIndex < sections.length) {
        window.scroll(x, 0, sections[destIndex].offesetTop);
    }

    sections.forEach((section,index, number) => {
        if (window.pageYoffset === section.offesetTop) {
          document.lastCentered = index;

        }
    })

  document.lastScrollPosition = window.pageYoffset;  
})
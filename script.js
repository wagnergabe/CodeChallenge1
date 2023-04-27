const panels = document.querySelectorAll('.panel');//puts all panals into an array [];

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active') //
    })
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    }) 
}
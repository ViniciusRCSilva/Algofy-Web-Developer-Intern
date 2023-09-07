/* When the window is scrolled, it's gonna add a class to make the topbar darker */
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        document.getElementById('topbar').classList.add('scrolled');
    } else {
        document.getElementById('topbar').classList.remove('scrolled');
    }
});

/* When the 'aboutBtn' element is clicked, it will change the class from 'none' to 'active', same way in reverse */
document.getElementById('aboutBtn').addEventListener('click', () => {
    if(document.getElementById('content').classList.contains('none')) {
        document.getElementById('arrow').classList.add('active')
        document.getElementById('content').classList.remove('none')
        document.getElementById('content').classList.add('active')
    } else {
        document.getElementById('arrow').classList.remove('active')
        document.getElementById('content').classList.remove('active')
        document.getElementById('content').classList.add('none')
    }
});
const popupNav = document.getElementById('popupNav');

document.addEventListener('mousemove', function(e) {
    const mouseY = e.clientY;

    if (mouseY < 50) {
        popupNav.style.display = 'block';
    } else if (mouseY > popupNav.clientHeight) {
        popupNav.style.display = 'none';
    }
});

popupNav.addEventListener('mouseleave', function() {
    popupNav.style.display = 'none';
});

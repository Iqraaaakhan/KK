const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    // Toggle the nav-links class to display/hide the navigation links
    navLinks.classList.toggle('active');

    // Animate the burger icon
    burger.classList.toggle('toggle');
});

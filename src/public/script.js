document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('active'); // Alternar la clase 'active' para mostrar/ocultar el menú
    });

    document.addEventListener('click', function (event) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnMenuIcon = menuIcon.contains(event.target);
        if (!isClickInsideMenu && !isClickOnMenuIcon) {
            menu.classList.remove('active'); // Ocultar el menú cuando se hace clic fuera de él
        }
    });
});

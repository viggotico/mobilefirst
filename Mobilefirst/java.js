document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('menu-icon').addEventListener('click', function() {
        const mobilMenu = document.getElementById('menu-list');
        mobilMenu.classList.toggle('show');
    });
});
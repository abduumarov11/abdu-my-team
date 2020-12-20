var openbtn = document.querySelector ('#open-btn');
var asidebar1 = document.querySelector('.asidebar1');
var close1 = document.querySelector('.button-x');


openbtn.addEventListener('click', function() {
    asidebar1.classList.add('opened');
});

close1.addEventListener('click', function() {
    asidebar1.classList.remove('opened');
});
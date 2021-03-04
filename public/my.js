var icon = document.querySelector('.icon');

icon.addEventListener('click', responsive);

function responsive() {
    var nav = document.querySelector('#my-right-nav');
    if(nav.className === 'right-nav') {
        nav.className += ' responsive';
    } else {
        nav.className = 'right-nav';
    }
}
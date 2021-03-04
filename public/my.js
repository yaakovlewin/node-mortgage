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


var navBtns = document.querySelectorAll('.right-nav>button');

navBtns.forEach(changeNodeName)

function changeNodeName(el){
    var elNodeName = el.nodeName.toLowerCase();

    var newString = el.outerHTML.trim()
    .replace('<'+ elNodeName,'<div');

    // To replace the end tag, we can't simply use replace()
    // which means if our element has a child element with the
    // same node name the end tag of the *child element* will be 
    // replaced, not the parent element. So,
    
    newString = newString
    .slice(0,newString.lastIndexOf('</div>'));    
    //now newString = "<div id='element'>Text" 'without closing tag'
    
    newString = newString + "</div>";
    //replace the html!
    el.outerHTML = newString;
    console.log(el)

    //
    //el.className = 'nav-btn';
    
}

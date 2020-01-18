

var menus = document.getElementsByClassName("menu")
for (var i=0; i<menus.length; i++) {
    menus[i].onclick = toggleMenu;
}

function toggleMenu(event) {
    var el = event.target;
    if ( -1 !== el.className.indexOf( "active" ) ) {
        el.className = el.className.replace( " active", "" );
    } else {
        el.className += " active"
    }
    event.preventDefault();
}


function onLoad() {
    var path = getPath(window.location.href)
    console.log(path)
    var menuItems = Array.from(document.querySelectorAll('a.menu-item')).filter(v => isDomEntity(v))
    console.log(menuItems)
    for (key in menuItems) {
        item = menuItems[key]
        p = getPath(item.href)
        console.log(p)
        if(p == path) {
            item.style.textDecoration = "none"
        } else {
            item.style.textDecoration = "underline" 
        }
    }
}

function isDomEntity(entity) {
    if (typeof entity === 'object' && entity.nodeType !== undefined) {
        return true;
    }
    else {
        return false;
    }
}

function getPath(url) {
    p = url.replace(window.location.origin, '')
    if(p[p.length - 1] !== '/') {
        p += '/'
    }
    return p
}

// if (window.addEventListener) {
    // window.addEventListener('load', onLoad, false); //W3C
// } else {
    // window.attachEvent('onload', onLoad); //IE
// }

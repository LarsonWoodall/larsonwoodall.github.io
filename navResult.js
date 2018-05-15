window.addEventListener("load", link_events);

function link_events() {
    document.getElementById('me').onclick = me;
    document.getElementById('stuff').onclick = stuff;
    document.getElementById('contact').onclick = contact;
    me();
}

function me() {
    var outarea = document.getElementById("outarea");
    outarea.innerHTML = "<object type='text/html' data='mystuff.html' ></object>";
    resetSidebarButtonClasses ();
    var me = document.getElementById("me");
    me.setAttribute("class", "sideBarbuttonSelected");
}

function stuff() {
    var outarea = document.getElementById("outarea");
    outarea.innerHTML = "<iframe src='mystuff.html'></iframe>";    
    resetSidebarButtonClasses ()
    var stuff = document.getElementById('stuff');
    stuff.setAttribute('class', 'sideBarbuttonSelected')
}

function contact() {
    var outarea = document.getElementById("outarea");
    outarea.innerHTML = "<iframe src='contact.html'></iframe>";    
    resetSidebarButtonClasses ()
    var contact = document.getElementById('contact');
    contact.setAttribute('class', 'sideBarbuttonSelected')
}

function resetSidebarButtonClasses () {
    var me = document.getElementById('me');
    var stuff = document.getElementById("stuff");
    var contact = document.getElementById("contact");
    me.setAttribute("class", "sideBarbutton");
    stuff.setAttribute("class", "sideBarbutton");
    contact.setAttribute("class", "sideBarbutton");
}
window.addEventListener("load", link_events);

function link_events() {
    document.getElementById('me').onclick = me;
    document.getElementById('stuff').onclick = stuff;
    document.getElementById('contact').onclick = contact;
    me();
}

function me() {
    var outarea = document.getElementById("outarea");
    outarea.innerHTML = "<iframe src='aboutme.html' height='300' width ='500'></iframe>";
}

function stuff() {
    var outarea = document.getElementById("outarea");
    outarea.innerHTML = "<iframe src='mystuff.html'height='300' width ='500'></iframe>";    
}

function contact() {
    var outarea = document.getElementById("outarea");
    outarea.innerHTML = "<iframe src='contact.html'height='300' width ='500'></iframe>";    
}

function loadPage (pageName)
{
    var outarea = document.getElementById("outarea");
    outarea.innerHTML = "<iframe src='" + pageName + "'height='300' width ='500'></iframe>";    
}
function collapseNavBar() {
    nv = document.getElementById('bs-navbar-collapse');
    nv.classList.remove('in');
    nv.setAttribute('aria-expanded', 'false');
}

function replaceText(idname) {
    mt = document.getElementById('maintext');
    txtarget = document.getElementById(idname);    
    mt.innerHTML = txtarget.innerHTML;    
    navEL = document.getElementById('navEl');
    for (kk = 0; kk < navEL.childElementCount; kk++) { navEL.children[kk].className = ""; }
    targetnav = document.getElementById('nav' + idname);
    targetnav.className = "active";

    collapseNavBar();
}

document.addEventListener("DOMContentLoaded", function () { replaceText('HOME') });
document.getElementById('navHOME').addEventListener("click", function () { replaceText('HOME') });
document.getElementById('navABOUT').addEventListener("click", function () { replaceText('ABOUT') });
document.getElementById('navCONTACT').addEventListener("click", function () { replaceText('CONTACT') });
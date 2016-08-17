window.onload(replaceText('HOME'));
function replaceText(idname) {
    mt = document.getElementById('maintext');
    txtarget = document.getElementById(idname);    
    mt.innerHTML = txtarget.innerHTML;    
    navEL = document.getElementById('navEl');
    for (kk = 0; kk < navEL.childElementCount; kk++) { navEL.children[kk].className = ""; }
    targetnav = document.getElementById('nav' + idname);
    targetnav.className = "active";
}
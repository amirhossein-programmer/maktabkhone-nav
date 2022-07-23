var menuBtn=document.getElementById('menu-btn');
var menuItem=document.getElementById('menu-items');

function loadEvent(){
    menuBtn.addEventListener('click',eventMenu);
}
loadEvent();
function eventMenu(){
    if(menuItem.classList.contains('close-menu')){
        menuItem.classList.add('opem-menu');
        menuItem.classList.remove('close-menu');
    }else{
        menuItem.classList.remove('opem-menu');
        menuItem.classList.add('close-menu');
    }
}
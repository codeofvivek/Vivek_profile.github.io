console.log("its working")
function TOGGLE(){
    let sidenav=document.getElementById('sidenav');
    let change=document.getElementById('change');
    let close=document.getElementById('close')
    sidenav.style.width="230px";  
    close.style.visibility="visible";
    close.style.position="fixed";
    change.style.display="none";
}
function toggleclose(){
    let sidenav=document.getElementById('sidenav');
    let change=document.getElementById('change');
    let close=document.getElementById('close')
    sidenav.style.width="0px";  
    close.style.visibility="hidden";
    change.style.display="block";  
}

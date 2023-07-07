let menu=document.getElementById('menu_id')
let nav=document.getElementById('nav_id')
let close=document.getElementById('close_id')
let search=document.getElementById('search_div_id')
let search_icon=document.getElementById('search_icon_id')
let search_icon_in_id=document.getElementById('search_icon_in_id')

menu.addEventListener("click", function(){
    nav.style.position="absolute"
    nav.style.top="0px"
    close.style.display="flex"
})
close.addEventListener("click", function(){
    close
    nav.style.position="absolute"
    nav.style.top="-200px"
    close.style.display="none"
})
search_icon.addEventListener("click", function(){
    search.style.display="flex"
    search.style.width="185px"
})
search_icon_in_id.addEventListener("click", function(){
    search.style.display="none"
    search.style.width="1px"
})
const navBtn = document.getElementById("navigation__button");
const navItems = document.getElementById("navigation__items");

navBtn.addEventListener("click", ()=> {
    const currentNavStatus = navItems.getAttribute("data-visible");
    
    if(currentNavStatus === "false"){
        navItems.setAttribute("data-visible", true);
        navBtn.setAttribute("data-visible", true);
    }
    else{
        navItems.setAttribute("data-visible", false);
        navBtn.setAttribute("data-visible", false);
    }

})
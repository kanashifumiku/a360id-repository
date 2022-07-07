function setMenu(menu){
  if(menu){
    document.body.setAttribute("id", "menuMobile")
  }
  else{
    document.body.setAttribute("id", "")
}
}

/*var lastScrollTop = 0;
  navbar = document.getElementById("navbar");
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
      navbar.style.top="-78px";
    } else{
      navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
})*/

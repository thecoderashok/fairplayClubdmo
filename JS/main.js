$(document).ready(function() {
 
    $(".hero-carousel").owlCarousel({
        nav:true,
        slideSpeed : 100,
        paginationSpeed : 100,
        items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false,
        loop:true,
        autoplay:true,
        autoplayTimeout: 1000,
        autoplayHoverPause:true
    });

    $(".games_carousel").owlCarousel({
        nav:true,
        slideSpeed : 100,
        paginationSpeed : 100,
        items : 4, 
        margin:10,
        stagePadding: 30,

        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false,
        loop:true,
        autoplay:true,
        autoplayTimeout: 2000,
        autoplayHoverPause:true,
        responsive : {
            
            0 : {
                items : 2, 
                
            },
            570 : {
                items : 2, 
                
            },
            600 : {
                items : 3, 
                
            },
            1000 : {
                items : 4, 
                
            }
        }
    });
    $(".promotion_carousel").owlCarousel({
        nav:true,
        slideSpeed : 100,
        paginationSpeed : 100,
        items : 1, 
        margin:20,
        stagePadding: 30,

        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false,
        loop:true,
        autoplay:true,
        autoplayTimeout: 2000,
        autoplayHoverPause:true
    });
    $(".game_providers_carousel").owlCarousel({
        nav:true,
        slideSpeed : 100,
        paginationSpeed : 100,
        items : 4, 
        margin:10,
        stagePadding: 30,

        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false,
        loop:true,
        autoplay:true,
        autoplayTimeout: 2000,
        autoplayHoverPause:true,
        responsive : {
            
            0 : {
                items : 2, 
                
            },
            600 : {
                items : 2, 
                
            },
            1000 : {
                items : 4, 
                
            }
        }
    });
   
  });

  $(document).ready(function() {
    M.updateTextFields();
  });
      


const menuBtn = document.getElementById("menuBtn");
const menu_closeBtn = document.getElementById("menu_closeBtn");
const mobileMenu = document.querySelector(".mobile_menu_container");

menuBtn.addEventListener("click" , () => {
    mobileMenu.classList.add("active")
})
menu_closeBtn.addEventListener("click" , () => {
    mobileMenu.classList.remove("active")
})


const lightModeBtn = document.getElementById("lightModeBtn")
const darkModeBtn = document.getElementById("darkModeBtn")

lightModeBtn.addEventListener("click", () => {
    lightModeBtn.style.display = "none"
    darkModeBtn.style.display = "block"

    document.body.setAttribute("data-theme", "light");
})
darkModeBtn.addEventListener("click", () => {
    lightModeBtn.style.display = "block"
    darkModeBtn.style.display = "none"

    document.body.setAttribute("data-theme", "dark");
    
})


const scrollRight_btn = document.getElementById("scrollbtn_right")
const scrollLeft_btn = document.getElementById("scrollbtn_left")

const header_tab_carousel = document.getElementById("header_tab_carousel")

// console.log(scrollRight)
// console.log(header_tab_carousel)



scrollRight_btn.addEventListener("click", () => {
    header_tab_carousel.scrollLeft += 2000

})
scrollbtn_left.addEventListener("click", () => {
    header_tab_carousel.scrollLeft -= 2000

    
})


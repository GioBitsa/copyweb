// navigation bar

function toggleNaviagtion() {
    var e = document.getElementsByTagName("body")[0];
    if (e.classList) e.classList.toggle("menu-open");
    else {
        var t = e.className.split(" "),
            i = t.indexOf("menu-open");
        0 <= i ? t.splice(i, 1) : t.push("menu-open"), e.className = t.join(" ")
    }
}
for (var menu_click = document.getElementsByClassName("menu-link"), remove_menu = function(e) {
        var t = document.getElementsByTagName("body")[0];
        setTimeout(function() {
            t.classList.remove("menu-open")
        }, 200)
    }, i = 0; i < menu_click.length; i++) menu_click[i].addEventListener("click", remove_menu, !1);

// end of navigation bar

// swiper

var swiper_about = new Swiper("#about .swiper-container", {
        loop: !0,
        speed: 600,
        parallax: !0,
        autoHeight: !0,
        pagination: {
            el: ".swiper-pagination",
            clickable: !0
        },
        breakpoints: {
            992: {
                pagination: !1,
                navigation: {
                    nextEl: "#about .swiper-button-next",
                    prevEl: "#about .swiper-button-prev"
                },
                autoHeight: !1
            }
        }
    }),
    swiper_testimonials = new Swiper("#testimonials .swiper-container", {
        pagination: {
            el: ".swiper-pagination",
            clickable: !0
        },
        breakpoints: {
            992: {
                pagination: !1,
                navigation: {
                    nextEl: "#testimonials .swiper-button-next",
                    prevEl: "#testimonials .swiper-button-prev"
                }
            }
        }
    }),
    swiper_space = new Swiper("#space .swiper-container", {
        pagination: {
            el: ".swiper-pagination",
            clickable: !0
        },
        breakpoints: {
            992: {
                pagination: !1,
                navigation: {
                    nextEl: "#space .swiper-button-next",
                    prevEl: "#space .swiper-button-prev"
                },
                autoHeight: !1
            }
        }
    }),
    swiper_brains = new Swiper("#brains .testemonials_holder .swiper-container", {
        observer: !0,
        observeParents: !0,
        pagination: {
            el: ".swiper-pagination",
            clickable: !0
        },
        breakpoints: {
            992: {
                pagination: !1,
                navigation: {
                    nextEl: "#brains .testemonials_holder .swiper-button-next",
                    prevEl: "#brains .testemonials_holder .swiper-button-prev"
                }
            }
        }
    }),
    video_author = document.querySelectorAll(".video-author");
for (i = 0; i < video_author.length; i++) video_author[i].addEventListener("click", function(e) {
    return function() {
        Array.from(document.querySelectorAll(".video-author")).forEach(function(e) {
            e.classList.remove("active")
        });
        this.classList.add("active");
        swiper_brains.slideTo(e, 700, !1)
    }
}(i));

// end of swiper

// ------- scroll up ------

//Get the button

mybutton = document.getElementById("myBtn");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

// scroll up button
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// end of scroll up
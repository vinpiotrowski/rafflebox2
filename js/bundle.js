// -> Mobile Nav

var hamburger = document.getElementById("hamburger-menu");
hamburger.addEventListener("click", function(event) {
    event.preventDefault();
    this.classList.toggle("active");
})


// -> Secondary Nav

var menus = document.querySelectorAll(".menu > a");
for (var i=0; i<menus.length; i++) {
    menus[i].addEventListener("click", toggleMenu);
}
function toggleMenu(event) {
    event.preventDefault();
    var isActive = -1 !== this.className.indexOf( "active" );
    var menus = document.querySelectorAll(".menu > a");
    for (var i=0; i<menus.length; i++) {
        menus[i].classList.remove("active");
    }
    if (isActive) {
        this.classList.remove("active");
    } else {
        this.classList.add("active");
    }
}


// -> Video

var vid = document.getElementById("gossVideo");
function playVid() {
    vid.play();
}
function pauseVid() {
    vid.pause();
}


// -> Modal

var modalOverlay = document.querySelector(".overlay");

function closeModal() {
    modalOverlay.classList.remove("active")
}

var modalCta = document.querySelector(".modalCta");
if(modalCta) {
    modalCta.addEventListener("click", function(e) {
        e.preventDefault();
        modalOverlay.classList.add("active")
    });

    var modalClose = document.querySelector(".modalClose");
    modalClose.addEventListener("click", function(e) {
        e.preventDefault();
        closeModal();
    })

    document.addEventListener("keyup", function(e) {
        if (e.keyCode == 27) {
            closeModal();
        }
    });
}


// -> Slider

function collectionHas(a, b) {
    for(var i = 0, len = a.length; i < len; i ++) {
        if(a[i] == b) return true;
    }
    return false;
}

function findParentBySelector(elm, selector) {
    var all = document.querySelectorAll(selector);
    var cur = elm.parentNode;
    while(cur && !collectionHas(all, cur)) {
        cur = cur.parentNode;
    }
    return cur;
}

function shouldShowPrevious(offset, button) {
    if(offset == 0) {
        button.setAttribute('disabled', 'true')
    } else {
        button.removeAttribute('disabled')
    }
}

function shouldShowNext(slidesWrap, button) {
    var allSlides = slidesWrap.querySelectorAll(".slide");
    var lastSlide = allSlides[allSlides.length -1]
    console.log( lastSlide.getBoundingClientRect().right + " > " + slidesWrap.getBoundingClientRect().right  );
    if(lastSlide.getBoundingClientRect().right > slidesWrap.getBoundingClientRect().right) {
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', 'true')
    }
}

function initSlider() {
    var sliders = document.querySelectorAll(".container-slider");
    if(!sliders.length) {
        return;
    }
    for (var i=0; i<sliders.length; i++) {
        var slideWrap = sliders[i];
        var slides = sliders[i].querySelector(".slides");
        var nextOld = sliders[i].querySelector(".slider-next");
        var next = nextOld.cloneNode(true);
        nextOld.parentNode.replaceChild(next, nextOld);
        next.addEventListener("click", function(e) {
            e.preventDefault();
            var slideWrap = findParentBySelector(e.target, ".container-slider");
            var slides = slideWrap.querySelector(".slides");
            var slideWidth = slides.querySelector(".slide").offsetWidth + 1;
            var slidesInViewport = Math.floor(slideWrap.offsetWidth / slideWidth);
            slidesInViewport = slidesInViewport > 3 ? 3 : slidesInViewport;
            var offset=parseInt(slides.getAttribute('data-offset')) + (slideWidth * slidesInViewport);
            slides.setAttribute('style', 'transform: translate3d(' + (-1 * offset) + 'px, 0px, 0px);');
            slides.setAttribute('data-offset', offset);
            shouldShowPrevious(offset, slideWrap.querySelector(".slider-prev"));
            setTimeout(function() {shouldShowNext(slideWrap, e.target)}, 250);
        });
        var prevOld = sliders[i].querySelector(".slider-prev");
        var prev = prevOld.cloneNode(true);
        prevOld.parentNode.replaceChild(prev, prevOld);
        prev.addEventListener("click", function(e) {
            e.preventDefault();
            var slideWrap = findParentBySelector(e.target, ".container-slider");
            var slides = slideWrap.querySelector(".slides");
            var slideWidth = slides.querySelector(".slide").offsetWidth + 1;
            var slidesInViewport = Math.floor(slideWrap.offsetWidth / slideWidth);
            slidesInViewport = slidesInViewport > 3 ? 3 : slidesInViewport;
            var offset=parseInt(slides.getAttribute('data-offset')) - (slideWidth * slidesInViewport);
            slides.setAttribute('style', 'transform: translate3d(' + (-1 * offset) + 'px, 0px, 0px);');
            slides.setAttribute('data-offset', offset);
            shouldShowPrevious(offset, e.target);
            setTimeout(function() {shouldShowNext(slideWrap,  slideWrap.querySelector(".slider-next"))}, 250);
        });
        slides.setAttribute('style', 'transform: translate3d(0px, 0px, 0px);');
        slides.setAttribute('data-offset', 0);
        shouldShowPrevious(parseInt(slides.getAttribute('data-offset')), prev);
        shouldShowNext(slideWrap, next);
    }
}
initSlider();
window.addEventListener("resize", initSlider);



// -> Raffle listings

var showAllButton = document.getElementsByClassName("link-show-all");
if(showAllButton) {
    for(var i=0; i<showAllButton.length; i++) {
        showAllButton[i].onclick = showAll;
    }
}

function showAll(event) {
    var lazy = document.getElementsByClassName("lazy");
    for(var i=0; i<lazy.length; i++){
        lazy[i].src = lazy[i].getAttribute("data-src");
    }
    var el = this;
    if ( -1 !== el.className.indexOf( "active" ) ) {
        el.className = el.className.replace( " active", "" );
    } else {
        el.className += " active"
    }
    event.preventDefault();
}


// -> Raffle update pricing

fetch("https://api.rafflebox-test.ca/raffle-service/raffles", {
    method: 'get',
    mode: 'cors'
}).then(function(response) {
    console.log("success");
}).catch(function() {
    console.log("error");
});




// -> Raffle search

var criteria = document.getElementById("raffle-search-criteria");
var searchButton = document.getElementById("raffle-search");
if(criteria && searchButton) {
    criteria.addEventListener("input", function(e) {
        let filter = e.target.value;
        let css = filter ? '#raffles-list .raffle { display: none; } #raffles-list .raffle[data-tags*="' + filter + '" i] {display: block;}'  : '';
        if(!filter.length) {
            window.rafflesSearchFilter.innerHTML = css;
            let rafflesList = document.getElementById("raffles-list")
            if( filter.length ) {
                rafflesList.classList.add("active");
            } else {
                rafflesList.classList.remove("active");
            }
        }
    });

    searchButton.addEventListener("click", function(e) {
        e.preventDefault();
        let filter = criteria.value;
        let css = filter ? '#raffles-list .raffle { display: none; } #raffles-list .raffle[data-tags*="' + filter + '" i] {display: block;}' : '';
        if(filter.length) {
            window.rafflesSearchFilter.innerHTML = css;
            let rafflesList = document.getElementById("raffles-list")
            if( filter.length ) {
                rafflesList.classList.add("active");
            } else {
                rafflesList.classList.remove("active");
            }
        }
    });
}


// -> Expand & collapse / accordions

var expands = document.querySelectorAll(".container-expand a");
if(expands) {
    for( var i=0; i<expands.length; i++) {
        expands[i].addEventListener("click", function(e) {
            e.preventDefault();
            this.classList.toggle("active");
        })
    }
}


window.onscroll = function() {
    scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.backgroundColor = "#fff"
    document.getElementById("logo-dark").style.display = "block"
    document.getElementById("logo-light").style.display = "none"
    document.querySelectorAll(".site-navigation a").forEach(function(e) {
      e.style.color = "#171717"
    })
  
  } else {
    document.getElementById("logo-dark").style.display = "none"
    document.getElementById("logo-light").style.display = "block"
    document.getElementById("header").style.backgroundColor = "transparent"
    document.querySelectorAll(".site-navigation a").forEach(function(e) {
      e.style.color = "#bfbfbf"
    })
  }
}

let menuVisible = false

let containers = document.querySelector(".containers")
let sidenav = document.querySelector(".site-navigation")

containers.addEventListener('click', function() {
	this.classList.toggle("change")
}) 

containers.addEventListener('click', () => {

  menuVisible = !menuVisible

  if (menuVisible) {
    sidenav.classList.add('visible')
  } else {
    sidenav.classList.remove('visible')
  }
})


// containers.addEventListener('click', () => {

//   containers.classList.toggle("change")
//   sidenav.classList.toggle('visible')
// })


// window.addEventListener('scroll', function() {
//   document.getElementById('scroll').innerHTML = pageYOffset + 'px'
// })

let nextPage = document.getElementById('nextPage')
let about = document.getElementById('about')

nextPage.addEventListener('click', function myFunction() {
  // animate({
  //   duration: 1000,
    
    
  // })
  about.scrollIntoView({
    // block: "center", 
    behavior: "smooth"
  })
})
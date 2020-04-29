
import Flickity from 'flickity'

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

nextPage.addEventListener('click', function scrollIn() {
  // animate({
  //   duration: 1000,
    
    
  // })
  about.scrollIntoView({
    // block: "center", 
    behavior: "smooth"
  })
})

let mainCarousel = new Flickity( '.main-carousel', {
  wrapAround: true,
  prevNextButtons: false,
})

let logoCarousel = new Flickity( '.logo-carousel', {
  wrapAround: true,
  prevNextButtons: false,
  pageDots: false,
  autoPlay: 1500,

})

let blogCarousel = new Flickity( '.blog-carousel', {
  wrapAround: true,
  prevNextButtons: false,
  // groupCells: true,
  // groupCells: 3,
})


const ar = [2, 3, 7, 4, 6, 1, 5, 8, 9]
// ar = [2, 1, 3, 4, 6, 5, 7, 8, 9]
sortOdd(ar)

// function sortOdd(ar) {
//   let sortNumbers = ar.filter(x => x % 2).sort((a, b) => a - b)
//   console.log(sortNumbers)
//   let i = 0
//   return ar.map(x => x % 2 ? sortNumbers[i++] : x)
// }
// console.log(sortOdd(ar))

// const arr = [1, 4, 8, 7, 3, 6, 9, 2, 5]
// function sortOdd(arr) {
//   let sortNumbers = arr.filter(x => x % 2 == 0).sort((a, b) => a - b)
  
//   console.log(sortNumbers)
 
//   let i = 0
//   return arr.map(x => x % 2 == 0 ? sortNumbers[i++] : x)
// }
// console.log(sortOdd(arr))

// const inputSTR = 'AAAABBBCCXYZDDDDEEEFFFAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB'
// function rle(str) {
//   let string = ''
//   let  
// }
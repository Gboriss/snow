
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


// for (let input of inputs) {
//   input.addEventListener('blur', function() {
//     let rule = this.name
//     let value = this.value
//     let check
    
//     switch (rule) {
//       case 'name':
//         check = /^\d+$/.test(value)
//       break;
//       case 'mail':

//       break;
//       case 'title':

//       break;
//     }
//     this.classList.remove('valid')
//     this.classList.remove('invalid')
//     if (check) {
//       this.classList.add('valid')
//     } else {
//       this.classList.add('invalid')
//     }
//   })
// }


let form = document.getElementById('form')
let name = document.getElementById('name')
let title = document.getElementById('title')
let mail = document.getElementById('mail')
let textarea = document.getElementById('textarea')
let button = document.getElementById('button')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  checkInputs()
})

function checkInputs() {
  let nameValue = name.value.trim()
  let titleValue = title.value.trim()
  let mailValue = mail.value.trim() 
  let textareaValue = textarea.value.trim()

  if (nameValue === '') {
    setErrorFor(name)
  } else {
    setSuccessFor(name)
  }

  if (titleValue === '') {
    setErrorFor(title)
  } else {
    setSuccessFor(title)
  }

  if (textareaValue === '') {
    setErrorFor(textarea)
  } else {
    setSuccessFor(textarea)
  }

  let atDot = mailValue.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)
  if (!atDot) {
    setErrorFor(mail)
  } else {
    setSuccessFor(mail)
  }

  if (nameValue === '' || titleValue === '' || textareaValue === '' || !atDot) {
    button.className = 'active'
  }

}

function setErrorFor(input) {
  let formControl = input
  formControl.className ='invalid'
}

function setSuccessFor(input) {
  let formControl = input
  formControl.className = 'valid'
}


const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const logo = document.getElementById('logo')

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick))

// Hamburger button listener
btn.addEventListener('click', navToggle)

function onTabClick(e) {
 // Deactivate all tabs
 tabs.forEach((tab) => {
  tab.children[0].classList.remove(
   'border-softRed',
   'border-b-4',
   'md:border-b-0'
  )
 })

 // Hide all panels
 panels.forEach((panel) => panel.classList.add('hidden'))

 // Activate a new tab and panel based on the target
 e.target.classList.add('border-softRed', 'border-b-4')
 const classString = e.target.getAttribute('data-target')
 document
  .getElementById('panels')
  .getElementsByClassName(classString)[0]
  .classList.remove('hidden')
}

function navToggle() {
 btn.classList.toggle('open')
 menu.classList.toggle('flex')
 menu.classList.toggle('hidden')

 if (menu.classList.contains('flex')) {
  logo.setAttribute('src', './app/image/main-logo.png')
 } else {
  logo.setAttribute('src', './app/image/main-logo.png')
 }
}

// Get the button:
let mybutton = document.getElementById('to-top')

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
 scrollFunction()
}

function scrollFunction() {
 if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = 'block'
 } else {
  mybutton.style.display = 'none'
 }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
 document.body.scrollTop = 0 // For Safari
 document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}

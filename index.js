const wrapperCarousel = document.getElementById('wrapperCarousel')
const wrapperImage = document.querySelector('.wrapperImage')
const Images = document.querySelectorAll('.wrapperImage img')
const body = document.getElementsByTagName('body')
let right = document.createElement('span')
let left = document.createElement('span')

right.classList.add('buttonRight')
left.classList.add('buttonLeft')
body[0].appendChild(right)
body[0].appendChild(left)
right.textContent = '>'
left.textContent = '<'

let rightSide = document.createElement('span')
let leftSide = document.createElement('span')
rightSide.classList.add('buttonRightSide')
leftSide.classList.add('buttonLeftSide')
wrapperCarousel.appendChild(rightSide)
wrapperCarousel.appendChild(leftSide)

let i = 1
let size = Images[0].clientWidth
wrapperImage.style.transform = `translateX(${-size}px)`

const moveRigth = () => {
  wrapperImage.style.transition = 'transform 0.5s'
  i++
  wrapperImage.style.transform = `translateX(${-size * i}px)`
}

const moveLeft = () => {
  wrapperImage.style.transition = 'transform 0.5s'
  i--
  wrapperImage.style.transform = `translateX(${-size * i}px)`
}

const makeInfinity = () => {
  if (Images[i].id === 'last') {
    wrapperImage.style.transition = 'none'
    i = Images.length - 2
    wrapperImage.style.transform = `translateX(${-size * i}px)`
  }
  if (Images[i].id === 'first') {
    wrapperImage.style.transition = 'none'
    i = Images.length - i
    wrapperImage.style.transform = `translateX(${-size * i}px)`
  }
}

right.addEventListener('click', moveRigth)
rightSide.addEventListener('click', moveRigth)

left.addEventListener('click', moveLeft)
leftSide.addEventListener('click', moveLeft)

wrapperImage.addEventListener('transitionend', makeInfinity)

const dragStart = (event) => {
  let shiftX = event.clientX - thumb.getBoundingClientRect().left;
  console.log(shiftX)
}
wrapperCarousel.onmousedown = dragStart

let body = document.querySelector('body')
let buttons = document.querySelectorAll('button')
let h1 = document.querySelector('h1')
let h6 = document.querySelector('h6')
let lis = document.querySelectorAll('li')
buttons[0].addEventListener('click', () => {
    body.style.background = 'rgba(2, 1, 0, 1)'
    h1.style.color = 'white'
    h6.style.color = 'white'
    buttons[0].style.background = ' rgba(196, 181, 165, 1)'
    buttons[1].style.background = 'rgba(251, 152, 47, 1)'
    lis[0].style.color = 'white'
    lis[1].style.color = 'white'
    lis[2].style.color = 'white'
})
buttons[1].addEventListener('click', () => {
    body.style.background = 'rgba(196, 181, 165, 1)'
    h1.style.color = 'black'
    h6.style.color = 'black'
    buttons[0].style.background = 'rgba(251, 152, 47, 1)'
    buttons[1].style.background = 'black'
    lis[0].style.color = 'black'
    lis[1].style.color = 'black'
    lis[2].style.color = 'black'
})

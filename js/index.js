// Your code goes here

// define a function click event handler

function clickEventHandler(event) {
    event.preventDefault(); 
    console.log(event.type + '!!!!!!!!!!'); 
    console.log(event.target);
    console.log(event.currentTarget); 
    
    // you can grab ANY element in the DOM
    // you can do ANYTHING you want with it
    // you can create new elements and attach them to the DOM
    // you can destroy any part of the website
    // you can trigger network requests to send data to the server
    // animations
    // analytics
    
}

console.log(homeLink)
homeLink.addEventListener('click',// string with the name of the event 
clickEventHandler); 
document.querySelector('a').addEventListener('click', event => {
    // we are going to sabotage bubbling
    // event.preventDefault? 

    event.stopPropagation()
    console.log('hahaha, sabotaging propogation !!')
})

// document.querySelector('nav').addEventListener('click', clickEventHandler); 

// document.querySelector('header').addEventListener('click', clickEventHandler); 

// document.body.addEventListener('click', clickEventHandler); 

// window.addEventListener('click', clickEventHandler); 

// examples end here, below starts my actual codes and edits

// style changes bg-color of buttons when clicked -- only works once. 
function random(number) {
    return Math.floor(Math.random() * (number+1));
}

const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';


const btns = document.querySelectorAll('.btn'); 
btns.forEach(el => {
    el.addEventListener('dblclick', () => {
        el.style.backgroundColor = rndCol; 
    })
}); 
//take out addEventListener and just add onclick

// adding style to nav items :  

let navItems = document.querySelectorAll('.nav-link'); 
navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = 'cyan'; 
        item.style.padding = '3%';
        item.style.borderRadius = '12px'; 
        item.style.color = 'white'; 
        item.style.transform = 'scale(1.2)'; 
        item.style.transition = 'all 0.2s'; 
    })
})

navItems.forEach(item => {
    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = ''; 
        item.style.padding = '';
        item.style.borderRadius = ''; 
        item.style.color = 'black'; 
        item.style.transform = 'scale(1)'; 
    })
})

// transforming the image of fun bus with the wheel event 

const funBus = document.querySelector('img'); 
console.log(funBus); 

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    funBus.style.transform = `scale(${scale})`;
}

let scale = 1; 
funBus.addEventListener('wheel', zoom); 

// keydown event used below 

// let keyP = document.querySelector('.keydown-p'); 

const theBod = document.querySelector('body'); 

theBod.addEventListener('keyup', () => {
    theBod.style.backgroundColor = 'yellow'; 
})



// drag/drop event used below


// load event used below 

const log = document.querySelector('.event-log-contents');
const reload = document.querySelector('#reload');

reload.addEventListener('click', () => {
    log.textContent ='';
    window.setTimeout(() => {
        window.location.reload(true);
    }, 400);
});

window.addEventListener('load', () => {
    log.textContent = log.textContent + 'load\n';
});

// focus event used below

const form = document.getElementById('form');

form.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';    
}, true);

form.addEventListener('blur', (event) => {
  event.target.style.background = '';    
}, true);

// blur event inside of dblclick event used below

const header = document.querySelector('header'); 

header.addEventListener('click', event => {
    header.style.backgroundColor = 'red';
    event.stopPropogation(); 
})


// scroll event used below


// select event used below
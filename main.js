let check1 = document.getElementById('1');
let check2 = document.getElementById('2');
let check3 = document.getElementById('3');
let check4 = document.getElementById('4');

check1.addEventListener('click', handleClick);
check2.addEventListener('click', handleClick);
check3.addEventListener('click', handleClick);
check4.addEventListener('click', handleClick);

let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')
let box4 = document.querySelector('.box4')

let box5 = document.getElementById('5');
let box6 = document.getElementById('6');
let box7 = document.getElementById('7');
let box8 = document.getElementById('8');


let inside1 = document.querySelector('.inside1')
let inside2 = document.querySelector('.inside2')
let inside3= document.querySelector('.inside3')
let inside4 = document.querySelector('.inside4')

let insidebox = document.querySelectorAll('.inside')




function handleClick(event) {
    let clickedId = event.target.getAttribute('id');
    
    // URLbox
    let currentUrl = window.location.href;
    let separator = currentUrl.includes('?') ? '&' : '?'; // Check if URL already has query parameters
    let newUrl = currentUrl + separator + 'clicked=' + clickedId;
    window.history.pushState({}, '', newUrl);
    // Save clicked ID to sessionStorage
    let clickedIds = sessionStorage.getItem('clickedIds') ? JSON.parse(sessionStorage.getItem('clickedIds')) : [];
    clickedIds.push(clickedId);
    sessionStorage.setItem('clickedIds', JSON.stringify(clickedIds));
    console.log(sessionStorage,"sessionstorage", "this is a where is all clicked elements",clickedId)
   
   
    if(clickedId === '1'){
        box1.style.border = '3px solid #1FD69F';
        box2.style.border = '0px';
        box3.style.border = '0px';
        box4.style.border = '0px';
        inside1.style.border="none"
        inside1.style.background="#1FD69F"
        inside3.style.border="flex"
        inside3.style.background="white"
        inside2.style.border="flex"
        inside2.style.background="white"
        inside4.style.border="flex"
        inside4.style.background="white"
        
    }else if(clickedId === '2'){
        box2.style.border = '3px solid #1FD69F';
        box1.style.border = '0';
        box3.style.border = '0px';
        box4.style.border = '0px';
        inside2.style.border="none"
        inside2.style.background="#1FD69F"
        inside3.style.border="flex"
        inside3.style.background="white"
        inside4.style.border="flex"
        inside4.style.background="white"
        inside1.style.border="flex"
        inside1.style.background="white"
       
    }else if(clickedId === '3'){
        box3.style.border = '3px solid #1FD69F';
        box2.style.border = '0px';
        box1.style.border = '0px';
        box4.style.border = '0px';
        inside3.style.border="none"
        inside3.style.background="#1FD69F"
        inside4.style.border="flex"
        inside4.style.background="white"
        inside2.style.border="flex"
        inside2.style.background="white"
        inside1.style.border="flex"
        inside1.style.background="white"
    }else if( clickedId === "4"){
        box4.style.border = '3px solid #1FD69F';
        box2.style.border = '0px';
        box3.style.border = '0px';
        box1.style.border = '0px';
        inside4.style.border="none"
        inside4.style.background="#1FD69F"
        inside3.style.border="flex"
        inside3.style.background="white"
        inside2.style.border="flex"
        inside2.style.background="white"
        inside1.style.border="flex"
        inside1.style.background="white"
    }
      
 
}





  
  

  

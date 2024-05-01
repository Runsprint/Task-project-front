const check1 = document.getElementById('1');
const check2 = document.getElementById('2');
const check3 = document.getElementById('3');

check1.addEventListener('click', handleClick);
check2.addEventListener('click', handleClick);
check3.addEventListener('click', handleClick);

const box10 = document.querySelector('.box10')
const box11 = document.querySelector('.box11')
const box12 = document.querySelector('.box12')

const inside1 = document.querySelector('.inside1')
const inside2 = document.querySelector('.inside2')
const inside3= document.querySelector('.inside3')
const input3 = document.querySelector('.input3') //slider
input3.style.background = "linear-gradient(to right, #2CB183 5%, #2CB183 59%, #fff 15%, #fff 10%)";
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
   
    
//meore klasneimit shevucvalo stylebi minichebit
    if(clickedId === '1'){
        box10.style.border = '3px solid #1FD69F';
        box11.style.border = '0px';
        box12.style.border = '0px';  
        inside1.style.border="none"
        inside1.style.background="#1FD69F"
        inside3.style.border="flex"
        inside3.style.background="white"
        inside2.style.border="flex"
        inside2.style.background="white"
        input3.style.background = "linear-gradient(to right, #2CB183 5%, #2CB183 79%, #fff 15%, #fff 10%)";
    }else if ( clickedId === '2'){
        box11.style.border = '3px solid #1FD69F';
        box10.style.border = '0px';
        box12.style.border = '0px';  
        inside2.style.border="none"
        inside2.style.background="#1FD69F"
        inside3.style.border="flex"
        inside3.style.background="white"
        inside1.style.border="flex"
        inside1.style.background="white"
        input3.style.background = "linear-gradient(to right, #2CB183 5%, #2CB183 79%, #fff 15%, #fff 10%)";
    }else if(clickedId === '3'){
        box12.style.border = '3px solid #1FD69F';
        box11.style.border = '0px';
        box10.style.border = '0px'; 
        inside3.style.border="none"
        inside3.style.background="#1FD69F"
        inside1.style.border="flex"
        inside1.style.background="white"
        inside2.style.border="flex"
        inside2.style.background="white" 
        input3.style.background = "linear-gradient(to right, #2CB183 5%, #2CB183 79%, #fff 15%, #fff 10%)";
    }

}
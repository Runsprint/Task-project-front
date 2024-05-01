const check1 = document.getElementById('1');
const check2 = document.getElementById('2');
const check3 = document.getElementById('3');
const check4 = document.getElementById('4');
//amiviget klasneimebit divebi 
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const box4 = document.querySelector('.box4')
//listeners
check1.addEventListener('click', handleClick);
check2.addEventListener('click', handleClick);
check3.addEventListener('click', handleClick);
check4.addEventListener('click', handleClick);
//shevucvaconst am divebs backgroundi
const inside1 = document.querySelector('.inside1')
const inside2 = document.querySelector('.inside2')
const inside3= document.querySelector('.inside3')
const inside4 = document.querySelector('.inside4')
//es ori imistvis aris rom range gavzardot 
const insidebox = document.querySelectorAll('.inside')
const input7 = document.querySelector('.input7')

input7.style.background= "linear-gradient(to right, #2CB183 5%, #2CB183 79%, #fff 15%, #fff 10%)"

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
        input7.style.background= "linear-gradient(to right, #2CB183 5%, #2CB183 100%, #fff 15%, #fff 10%)"
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
        input7.style.background= "linear-gradient(to right, #2CB183 5%, #2CB183 100%, #fff 15%, #fff 10%)"
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
        input7.style.background= "linear-gradient(to right, #2CB183 5%, #2CB183 100%, #fff 15%, #fff 10%)"
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
        input7.style.background= "linear-gradient(to right, #2CB183 5%, #2CB183 100%, #fff 15%, #fff 10%)"
    }
}

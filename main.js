
function handleClick(event) {
    let clickInfo = JSON.parse(localStorage.getItem('clickInfo')) || [];
  
    let clickedId = event.target.getAttribute('id');
    clickInfo.push(clickedId);
    localStorage.setItem('clickInfo', JSON.stringify(clickInfo));
  //url
    let currentUrl = window.location.href;
    let newUrl = currentUrl + '?clicked=' + clickedId;
    window.history.pushState({}, '', newUrl);
  
    if(clickedId){
        console.log(clickedId)
    }

  }
  
  let check1 = document.getElementById('1');
  let check2 = document.getElementById('2');
  let check3 = document.getElementById('3');
  let check4 = document.getElementById('4');
  
  check1.addEventListener('click', handleClick);
  check2.addEventListener('click', handleClick);
  check3.addEventListener('click', handleClick);
  check4.addEventListener('click', handleClick);
  
  

  

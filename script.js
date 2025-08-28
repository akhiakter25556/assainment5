//heard
document.addEventListener("DOMContentLoaded", function () {

    const navbarHeartBtn = document.querySelector(".btn");
    let heartCount = 0;
    const heartIcons = document.querySelectorAll(".fa-heart");

    heartIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            heartCount++;

            navbarHeartBtn.childNodes[0].nodeValue = heartCount;

            icon.classList.toggle("liked");
        });
    });
});


//  call-btn 

const callBtns = document.querySelectorAll('.call-btn');
const coinBtn = document.getElementById('coin-btn');
const callCost = 20;
const callHistoryEl = document.getElementById('call-history');

// Clear history button
const clearBtn = document.querySelector('.clear-btn');
if(clearBtn){
  clearBtn.addEventListener('click', function(){
    callHistoryEl.innerHTML = '';
  });
}
callBtns.forEach(function(callBtn){
  callBtn.addEventListener('click', function(){
    let balance = parseInt(coinBtn.innerText);
    if(balance < callCost){
      alert("X You don't have enough coins to make a call!");
      return;
    }

    // Alert 
    if(confirm("📞 Calling National! Emergency Service 999...")){
      balance -= callCost;
      coinBtn.innerText = balance;
      coinBtn.appendChild(coinBtn.querySelector('.coin'));

      // Add to call history
      const li = document.createElement('li');
      const now = new Date();
      const timeStr = now.toLocaleTimeString();
const clearBtn = document.querySelector('.clear-btn');

    }
  });
});

//  copy buttons
const copyButtons = document.querySelectorAll('.copy-btn1');
const btnGreen = document.querySelector('.btn-green'); 

copyButtons.forEach(button => {
  button.addEventListener('click', function() {

    let count = parseInt(btnGreen.innerText); 
    count += 1; 
    btnGreen.innerText = count + " copy"; 
  });
});
// copy past button

let copyCount = 0;

document.querySelectorAll(".copy-btn1").forEach(button => {
  button.addEventListener("click", function() {
    let number = this.getAttribute("data-number");
    

    navigator.clipboard.writeText(number)
      .then(() => {
    
        alert(`emergency-service.netlify.app says: ${number} copied!`);
        

        copyCount++;
        document.querySelector(".btn-green").innerText = `${copyCount} copy`;
      })
      .catch(err => {
        console.error("Copy failed", err);
      });
  });
});

//date

document.addEventListener("DOMContentLoaded", () => {
  const callButtons = document.querySelectorAll(".call-btn");
  const callHistoryList = document.getElementById("call history"); 

  callButtons.forEach(button => {
    button.addEventListener("click", () => {
      let number = button.closest(".div-btn")
                        .querySelector(".copy-btn1")
                        .getAttribute("data-number");

      let time = getCurrentTime();
      let li = document.createElement("p");
      li.textContent = ` ${number} at ${time}`;
      callHistoryList.appendChild(li);
    });
  });
});

function getCurrentTime() {
  let now = new Date();
  return now.toLocaleTimeString();
}


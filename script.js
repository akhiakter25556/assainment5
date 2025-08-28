








//  call-btn 

const callBtns = document.querySelectorAll('.call-btn');
const coinBtn = document.getElementById('coin-btn');
const callCost = 20;

// Call history ul
const callHistoryEl = document.getElementById('call-history');

// Clear history button
const clearBtn = document.querySelector('.clear-btn');
if(clearBtn){
  clearBtn.addEventListener('click', function(){
    callHistoryEl.innerHTML = '';
  });
}

// Call button event
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

// if (clearBtn) {
//   clearBtn.addEventListener('click', function () {
//     callHistoryEl.innerHTML = ''; 
//     alert("✅ Call history cleared!");
// //   });
// // }

// const callBtns = document.querySelectorAll('.call-btn');
// const coinBtn = document.getElementById('coin-btn'); // Coin balance
// const callHistoryEl = document.getElementById('call-history');
// const clear = document.querySelector('.clear-btn');
// const callCost = 20;

// // Call button click event
// callBtns.forEach(function(callBtn) {
//   callBtn.addEventListener('click', function() {
//     let balance = parseInt(coinBtn.innerText); // Current coin balance

//     if (balance < callCost) {
//       alert("X You don't have enough coins to make a call!");
//       return;
//     }

//     // Confirm alert
//     if (confirm("📞 Calling National! Emergency Service 999...")) {
//       balance -= callCost;
//       coinBtn.innerText = balance;
//       coinBtn.appendChild(coinBtn.querySelector('.coin')); // Keep coin icon

//       // Get service name & number from closest section
//       const copyDiv = callBtn.closest('.copy');
//       const nameEl = copyDiv.querySelector('.text-div h1'); // Service name
//       const numberEl = copyDiv.querySelector('h1:nth-of-type(2)'); // Service number
//       const name = nameEl ? nameEl.innerText : 'Unknown';
//       const number = numberEl ? numberEl.innerText : 'Unknown';

//       // Add to call history
//       const li = document.createElement('li');
//       const now = new Date();
//       const timeStr = now.toLocaleTimeString();
//       li.innerText = `${name} - ${number} (Time: ${timeStr})`;
//       callHistoryEl.appendChild(li);
//     }
//   });
// });

// // Clear History button click
// if (clearBtn) {
//   clearBtn.addEventListener('click', function() {
//     callHistoryEl.innerHTML = '';
//     alert("✅ Call history cleared!");
//   });
// }




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




// let time = Date.now();
// console.log("time",time);

let price;
let time;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function handlePut(event) {
  event.preventDefault();
  let expires = price + 1800000;
  let purchase = `
  <li>
      <p>Time: ${time}</p>
      <p>Price: ${price}</p>
      <p>Type: Put</p>
      <p>Expires: ${expires}</p>
    </li>`;
  $("#purchase-list").append(purchase);
}

function handleCall(event) {
  event.preventDefault();
  let expires = price + 1800000;
  let purchase = `
  <li>
      <p>Time: ${time}</p>
      <p>Price: ${price}</p>
      <p>Type: Call</p>
      <p>Expires: ${expires}</p>
    </li>`;
  $("#purchase-list").append(purchase);
}

function updateClock() {
  // var now = new Date(), // current date
  //     months = ['January', 'February', '...']; // you get the idea
  //     time = now.getHours() + ':' + now.getMinutes(), // again, you get the idea

  //     // a cleaner way than string concatenation
  //     date = [now.getDate(), 
  //             months[now.getMonth()],
  //             now.getFullYear()].join(' ');

  // // set the content of the element with the ID time to the formatted string
  // document.getElementById('time').innerHTML = [date, time].join(' / ');
  price = getRndInteger(850000, 900000);

  document.getElementById("price").innerHTML = price;
  time = Date.now();
  document.getElementById("time").innerHTML = time;
  // call this function again in 1000ms
  setInterval(updateClock, 1000);
}
updateClock();

$("#option-put").on("click", handlePut);
$("#option-call").on("click", handleCall);

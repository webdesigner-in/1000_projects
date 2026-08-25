let clockElement = document.getElementById("clock-div");

function clock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");

  let meridium = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  hours = hours.toString().padStart(2, "0");

  clockElement.innerText = `${hours} : ${minutes} : ${seconds}  ${meridium}`;
}

clock();

setInterval(()=>{
    clock();
},1000)
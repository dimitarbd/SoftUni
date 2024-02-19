window.addEventListener('load', solve);

function solve() {
let formRef = document.querySelector("form");
formRef.addEventListener("submit", onSubmit);

let firstNameRef = document.getElementById("first-name");
let lastNameRef = document.getElementById("last-name");
let peopleCountRef = document.getElementById("people-count");
let formDateRef = document.getElementById("from-date");
let daysCountRef = document.getElementById("days-count");

let infoTicket = document.querySelector(".ticket-info-list");


function onSubmit(e) {
    e.preventDefault();
    let firstName = firstNameRef.value;
    let lastName = lastNameRef.value;
    let peopleCount = peopleCountRef.value;
    let formDate = formDateRef.value;
    let daysCount = daysCountRef.value;
    


   if (!firstName || !lastName || !peopleCount|| !formDateRef || !daysCount) {
    return
   }

   let ticket = createTicket(firstName, lastName, peopleCount, daysCount);

   infoTicket.appendChild(ticket);

   function createTicket(firstName, lastName, peopleCount, daysCount) {
    let li = document.createElement("li");
    li.classList.add("ticket");
    li.innerHTML += "<article>";
    li.innerHTML += `<h3>Name: ${firstName} ${lastName}</h3>`;
    li.innerHTML += `<p>Form date: ${formDate}</p>`;
    li.innerHTML += `<p>For ${daysCount} days</p>`;
    li.innerHTML += `<p>For ${peopleCount} people</p>`
    li.innerHTML += "</article>";
    
    return li;
   }

}
    
}





window.addEventListener('load', solve);

function solve() {
    let formRef = document.querySelector("form");
    formRef.addEventListener("submit", onSubmit);

    let firstNameRef = document.getElementById("first-name");
    let lastNameRef = document.getElementById("last-name");
    let peopleCountRef = document.getElementById("people-count");
    let fromDateRef = document.getElementById("from-date");
    let daysCountRef = document.getElementById("days-count");
    let infoTicketUl = document.getElementById("info-ticket")
    let nextBtnRef = document.getElementById("next-btn")

    let infoTicket = document.querySelector(".ticket-info-list");


    function onSubmit(e) {
        e.preventDefault();
        let firstName = firstNameRef.value;
        let lastName = lastNameRef.value;
        let peopleCount = peopleCountRef.value;
        let fromDate = fromDateRef.value;
        let daysCount = daysCountRef.value;



        if (!firstName || !lastName || !peopleCount || !fromDate || !daysCount) {
            return
        }

        let ticket = createTicket(firstName, lastName, peopleCount, fromDate, daysCount);

        infoTicketUl.appendChild(ticket);
        toggleBtnNext();
        formRef.reset();
    }

    function createTicket(firstName, lastName, peopleCount, fromDate, daysCount) {
        let li = document.createElement("li");
        li.classList.add("ticket");
        li.innerHTML += "<article>";
        li.innerHTML += `<h3>Name: ${firstName} ${lastName}</h3>`;
        li.innerHTML += `<p>Form date: ${fromDate}</p>`;
        li.innerHTML += `<p>For ${daysCount} days</p>`;
        li.innerHTML += `<p>For ${peopleCount} people</p>`
        li.innerHTML += "</article>";

        let editBtn = createBtn("edit-btn", "Edit");
        let continueBtn = createBtn("continue-btn", "Continue");
        li.appendChild(editBtn);
        li.appendChild(continueBtn);

        return li;
    }

    function toggleBtnNext() {

        nextBtnRef.disabled = !nextBtnRef.disabled;
    }

    function createBtn(classes, text) {
        let btn = document.createElement("button");
        btn.classList.add(classes);
        btn.textContent = text;
        return btn;
    }




}





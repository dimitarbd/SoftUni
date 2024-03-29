function ticketsStat(arr, sortCriteria) {
    let result = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination,
            this.price = Number(price),
            this.status = status
        }
    }
    for (let el of arr) {
        let [destination, price, status] = el.split('|');
        let myTicket = new Ticket (destination, price, status);
        result.push(myTicket);
    }
    
    return sortTicket(result, sortCriteria)

    function sortTicket(ticketArr, criteria) {
        return ticketArr.sort ((a, b) => {
            return criteria == "price" ?
            a[criteria] - b[criteria] :
            a[criteria].localeCompare(b[criteria])})
    }
}

let res = ticketsStat(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination')
console.log(res);
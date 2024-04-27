function previousDay(year, month, day) {
    let date = new Date(2024,0,10);
    date.setDate(date.getDate() - 1);
    console.log(date);

}
previousDay(2016, 9, 30);
console.log('===========');
previousDay(2015, 5, 10);

function stringSubstring(word, text) {
    text.toLowerCase().split(' ').forEach(element => {
       if (element == word) {
            console.log(word);
            return;
        }
    });;

    console.log(`${word} not found!`);
}
stringSubstring('javascript',
'JavaScript is the best programming language');
console.log('=========================');
stringSubstring('python',
'JavaScript is the best programming language');

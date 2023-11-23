function secretChat(input) {
    let concealedMessage = input.shift();

    let command = input.shift();

    while (command != 'Reveal') {
        let [action, index1, index2] = command.split(':|:')

        switch (action) {
            case 'InsertSpace':

                let message = concealedMessage.split('')
                message.splice(index1, 0, ' ')
                concealedMessage = message.join('');
                
                break;
            case 'Reverse':

                break;
            case 'ChangeAll':

                break;
        }

        console.log(concealedMessage);

        command = input.shift();
    }

    console.log(`You have a new text message: ${concealedMessage}`);
}
secretChat([
    'heVVodar!gniV',
    // 'ChangeAll:|:V:|:l',
    // 'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
console.log('==============');
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
])

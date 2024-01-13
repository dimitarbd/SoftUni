function wordsUppercase(str) {
    console.log(
        str.split(/[^a-zA-Z0-9]+/)
        .join(' ')
        .trim()
        .split(' ')
        .map(x => x.toUpperCase())
        .join(', ')
        );
}
wordsUppercase('Hi, how are you?');
console.log('------------------');
wordsUppercase('hello');

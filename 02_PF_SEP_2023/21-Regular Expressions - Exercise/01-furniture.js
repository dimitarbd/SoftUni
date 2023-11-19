function furniture(arr) {
    let items = [];
    let totalPrice = 0;
    
    let command = arr.shift();
    
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;
    
    while (command != 'Purchase') {
        let match = command.match(pattern);
        
        if (match) {
            let {name, price, qty} = match.groups;

            let furniturePrice = Number(qty) * Number(price);

            items.push(name);
            totalPrice += furniturePrice;
        }
        
        command = arr.shift();
        
    }
    console.log('Bought furniture:');
    if (items.length > 0) {
        console.log(items.join('\n'));
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);

}
furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']);
console.log('----------------');
furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']);
console.log('----------------');
furniture (['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase']
);


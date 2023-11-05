function catalogue(arr) {
    let catalogue = {};
    let products = arr.sort();
    
    for (let el of products) {
        let [name, price] = el.split(' : ');
        catalogue[name] = price;
    }
    let entries = Object.entries(catalogue);

    
    for (let i = 1; i< entries.length; i++) {
        let [key, entry] = entries[i];
        let [key1, entry1] = entries[i-1];
        if (i == 1) {
            console.log(`${key1[0]}`);
            console.log(`  ${key1}: ${entry1}`);
            if (key[0] !== key1[0]){
                console.log(`${key[0]}`);
                console.log(`  ${key}: ${entry}`);
            } else {
                console.log(`  ${key}: ${entry}`);
            }
        } else if (key[0] == key1[0]) {
            console.log(`  ${key}: ${entry}`);
        } else {
            console.log(`${key[0]}`);
            console.log(`  ${key}: ${entry}`);
        }
        
    }
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]);
// catalogue([
//     'Omlet : 5.4',
//     'Shirt : 15',
//     'Cake : 59'
//     ]);
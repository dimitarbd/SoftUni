function solve() {
  let resultRef = document.getElementById('result');
  let textValue = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  
  textValue = textValue.toLowerCase();
  let result = '';

  switch(convention) {
    case 'Camel Case':
      textArr = textValue.split(' ');
      result = textArr.shift();
      textArr.forEach(word => {
        result += word[0].toUpperCase() + word.substring(1);
      });
      resultRef.textContent = result;
      break;
      case 'Pascal Case':
        textValue.split(' ').forEach(el => {
          result += el[0].toUpperCase() + el.substring(1)
        })
        resultRef.textContent = result;
        break;
        default: result = 'Error!'
  }
}
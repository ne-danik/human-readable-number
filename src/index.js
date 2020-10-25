module.exports = function toReadable (number) {
    let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let str = '';
  
    if (number === 0) return 'zero';
  
    number = number.toString(); 
  
    function getTens(number, str) {
        let substr = number.substr(0, 1);
        switch (substr) {
            case '2':
                str += `${tens[0]}`;
                break;
            case '3':
                str += `${tens[1]}`;
                break;
            case '4':
                str += `${tens[2]}`;
                break;
            case '5':
                str += `${tens[3]}`;
                break;
            case '6':
                str += `${tens[4]}`;
                break;
            case '7':
                str += `${tens[5]}`;
                break;
            case '8':
                str += `${tens[6]}`;
                break;
            case '9':
                str += `${tens[7]}`;
                break;
        }
        return str;
    }
  
    function getTeen(number, str) {
        let substr = number.substr(-2);
        if (+substr > 0 && +substr < 10) str += ones[number[2]];
        switch (substr) {
            case '10':
                str += `${teen[0]}`;
                break;
            case '11':
                str += `${teen[1]}`;
                break;
            case '12':
                str += `${teen[2]}`;
                break;
            case '13':
                str += `${teen[3]}`;
                break;
            case '14':
                str += `${teen[4]}`;
                break;
            case '15':
                str += `${teen[5]}`;
                break;
            case '16':
                str += `${teen[6]}`;
                break;
            case '17':
                str += `${teen[7]}`;
                break;
            case '18':
                str += `${teen[8]}`;
                break;
            case '19':
                str += `${teen[9]}`;
                break;
        }
        if (+substr >= 20) {
            if (+substr.substr(-1) === 0) {
                return `${getTens(substr, str)}`;
            } else {
                return `${getTens(substr, str)} ${ones[number[2]]}`;
            }
        }
        return str;
    }
    
    if (number.length === 3) {
        if (number.substr(-2) === '00') {
            return str = `${ones[number[0]]} hundred`;;
        } else {
            str = `${ones[number[0]]} hundred `;
            return getTeen(number, str);
        }
    }
    
    if (number.length === 2) {
        if(+number >= 10 && +number < 20) {
            return getTeen(number, str);
        } else if (+number >= 20) {
            let substr = number.substr(0, 1);
            if (+number.substr(-1) === 0) {
                return `${getTens(substr, str)}`;
            } else {
                return `${getTens(substr, str)} ${ones[number[1]]}`;
            }
        } else if (+number.substr(-1) === 0) {
            return str;
        }
      }
  
    if (number.length === 1) {
        return `${ones[number[0]]}`;
    }
}

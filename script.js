function nextPalindrome(num) {
    let option  = num + 1;
    const isPalindrome = (str) => {
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    }

    while (true) {
        if(isPalindrome(option.toString())) {
            return option;
        }
        option++;
    }
}
 
const input = prompt("Enter a number");
alert(nextPalindrome(parseInt(input)));
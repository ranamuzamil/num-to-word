function numToWord(num) {
    let onceArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sisteen", "seventeen", "eighteen", "nineteen", "twenty"];
    let after20 = ["zero", "ten", "twenty", "thrty", "forty", "fifty", "sisty", "seventy", "eighty", "ninty"]
    let millions = ["", "", "", "hundered", "thousand", "million", "billion", "trillion", "quadrillion", "quintrillion", "sextillion", "septillion", "octillion", "nonillion", "decillion"]


    let ans = '';
    if (num >= 100000) {                                      // In case of lakh
        //  if (num >= 11000) {
        //     ans += onceArr[Math.floor(num / 1000)]
        // num %= 1000;
        // } 
        if (num >= 100000) {
            ans += onceArr[Math.floor(num / 100000)]
            num %= 100000;
        }
        ans += " lakh "
    }
    if (num >= 1000) {                                        // in case of thousands

        if (num >= 21000) {
            ans += after20[Math.floor(num / 10000)] + " "
            num %= 10000;
        } if (num >= 11000) {
            ans += onceArr[Math.floor(num / 1000)]
            num %= 1000;
        } if (num >= 10000) {
            ans += after20[Math.floor(num / 10000)]
            num %= 10000;
        } if (num >= 1000) {
            ans += onceArr[Math.floor(num / 1000)]
            num %= 1000;
        }
        ans += " thousand "

    } if (num >= 100) {                                       // In case of hundereds
        ans += onceArr[Math.floor(num / 100)] + " hundered "
        num %= 100;
    } if (num >= 20) {
        ans += after20[Math.floor(num / 10)] + " ";
        num %= 10;
    } if (num > 0) {
        ans += onceArr[num] + " ";
    }
    return ans;
}
console.log(numToWord(21001));
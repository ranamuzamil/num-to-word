let display = document.getElementById("display");
function numToWord(num) {
    let onceArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sisteen", "seventeen", "eighteen", "nineteen", "twenty"];
    let after20 = ["zero", "ten", "twenty", "thrty", "forty", "fifty", "sisty", "seventy", "eighty", "ninty"]

    let ans = '';
    if (num < 1) {
        ans = onceArr[num]  
    }

    if (num >= 1000000000) {                                    // In case of arab
        if (num >= 21000000000) {
            ans += after20[Math.floor(num / 10000000000)] + " "
            num %= 10000000000;
        }
        if (num >= 1000000000) {
            ans += onceArr[Math.floor(num / 1000000000)]
            num %= 1000000000;
        }
        ans += " arab "
    }
    if (num >= 10000000) {                                    // In case of crore's
        if (num >= 210000000) {
            ans += after20[Math.floor(num / 100000000)] + " "
            num %= 100000000;
        }
        if (num >= 10000000) {
            ans += onceArr[Math.floor(num / 10000000)]
            num %= 10000000;
        }
        ans += " crore "
    }
    if (num >= 100000) {                                      // In case of lakh's
        if (num >= 2100000) {
            ans += after20[Math.floor(num / 1000000)] + " "
            num %= 1000000;
        }
        if (num >= 100000) {
            ans += onceArr[Math.floor(num / 100000)]
            num %= 100000;
        }
        ans += " lakh "
    }
    if (num >= 1000) {                                        // in case of thousand's

        if (num >= 21000) {
            ans += after20[Math.floor(num / 10000)] + " "
            num %= 10000;
        } if (num >= 1000) {
            ans += onceArr[Math.floor(num / 1000)]
            num %= 1000;
        }
        ans += " thousand "

    } if (num >= 100) {                                       // In case of hundered's
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
function myFunction() {
    let userData = document.getElementById("myInput").value;
    display.textContent = numToWord(userData)
}

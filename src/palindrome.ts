class Palindrome {
    str: string;

    constructor(input: string) {
        this.str = input;
    }

    main() {
        // Validation from input string, check if input string is empty
        if (this.str === "") {
            console.log("insert the string, please");
            return false;
        }

        let strTemp: string;

        // Use Regex for removing unwanted character
        var re = /[^A-Za-z0-9]/g;

        // Use lowercase
        strTemp = this.str.toLowerCase().replace(re, '');

        var len = strTemp.length;

        // Use half-indexing then compare each iteration side-by-side with index that pointed as half-indexing is a central point
        for (var i = 0; i < len/2; i++) {
            if (strTemp[i] !== strTemp[len - 1 - i]) {
                // if character doesn't match, then return false
                return false;
            }
        }

        return true;
    }
}

// Input the string here
let inputString = "Dogma I am God";

const p = new Palindrome(inputString);
console.log("Is " + inputString + " palindrome? So, it's " + p.main())
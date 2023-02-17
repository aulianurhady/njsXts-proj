class Fizzbuzz {
    numArray: number;

    constructor(input: number) {
        this.numArray = input;
    }

    main() {
        let newArr: string[] = [];

        // if input number of array is 0, then return with warning
        if (this.numArray <= 0) {
            console.log("Insert number length of array from 1, please");
            return newArr;
        }

        // looping as many as number of array that input by user
        for (let counter = 1; counter <= this.numArray; counter++) {
            if ((counter%3 == 0) && (counter%5 == 0)) {
                // if the counter of iteration divisible by 3 and 5, then write FIZZBUZZ
                newArr.push("FIZZBUZZ");
            } else if (counter%3 == 0) {
                // if the counter of iteration divisible by 3, then write FIZZ
                newArr.push("FIZZ");
            } else if (counter%5 == 0) {
                // if the counter of iteration divisible by 5, then write BUZZ
                newArr.push("BUZZ");
            } else {
                // if the counter of iteration cannot divided by 3 or 5, then write that counter
                newArr.push(String(counter));
            }
        }

        return newArr
    }
}

// Input the number of array here
let inputNumberOfArray = 0;

const f = new Fizzbuzz(inputNumberOfArray);
console.log("Here the result: \n", f.main());
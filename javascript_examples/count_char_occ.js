let arr = ['a', 'ab', 'abc'];

function countChar(arr){

    let count={a:0,b:0,c:0,z:0};

    for (let word of arr) {  // Loop through each word
        for (let char of word) {  // Loop through each character
            if (char in count) {  // Check if it's 'a', 'b', or 'c'
                count[char]++;
            }
        }
    }
    return count;

}

let res=countChar(arr);
console.log('re',res);
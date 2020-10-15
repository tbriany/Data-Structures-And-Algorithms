// Given a List of words, return the words that can be typed using letters of alphabet on only 
// one row's of American keyboard like the image below.

// Note:
// You may use one character in the keyboard more than once.
// You may assume the input string will only contain letters of alphabet.

// Example:
// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]

var findWords = function (words) {
    let output = []

    let row1 = {
        q: "q",
        w: "w",
        e: "e",
        r: "r",
        t: "t",
        y: "y",
        u: "u",
        i: "i",
        o: "o",
        p: "p",
        Q: "Q",
        W: "W",
        E: "E",
        R: "R",
        T: "T",
        Y: "Y",
        U: "U",
        I: "I",
        O: "O",
        P: "P"
    }

    let row2 = {
        a: "a",
        s: "s",
        d: "d",
        f: "f",
        g: "g",
        h: "h",
        j: "j",
        k: "k",
        l: "l",
        A: "A",
        S: "S",
        D: "D",
        F: "F",
        G: "G",
        H: "H",
        J: "J",
        K: "K",
        L: "L"
    }

    let row3 = {
        z: "z",
        x: "x",
        c: "c",
        v: "v",
        b: "b",
        n: "n",
        m: "m",
        Z: "Z",
        X: "X",
        C: "C",
        V: "V",
        B: "B",
        N: "N",
        M: "M"
    }

    for (let i = 0; i < words.length; i++) {
        let bool = true
        let word = words[i]

        if (row1[word[0]]) {
            for (let j = 0; j < word.length; j++) {
                let curr = word[j]
                if (!row1[curr]) {
                    bool = false
                }
            }
        }

        if (row2[word[0]]) {
            for (let j = 0; j < word.length; j++) {
                let curr = word[j]
                if (!row2[curr]) {
                    bool = false
                }
            }
        }

        if (row3[word[0]]) {
            for (let j = 0; j < word.length; j++) {
                let curr = word[j]
                if (!row3[curr]) {
                    bool = false
                }
            }
        }

        if (bool) {
            output.push(word)
        }
    }
    return output
};

let input = ["Hello", "Alaska", "Dad", "Peace"]

console.log(findWords(input))
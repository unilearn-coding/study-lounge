// Complete the my_for_loop_function below so that given a number, n, you repeat the phrase given that number of times.
// You should also increment the count variable so that we can properly check your code.
function myWhileLoopFunction(n) {
    let output = [];

    // WRITE WHILE LOOP ON THIS LINE
    while (false) {
        let phrase;
        if (i === 0 || i >= 4) {
        phrase = `Hello for the ${i}th time`;
        } else if (i === 1) {
        phrase = `Hello for the ${i}st time`;
        } else if (i === 2) {
        phrase = `Hello for the ${i}nd time`;
        } else if (i === 3) {
        phrase = `Hello for the ${i}rd time`;
        }

        output.push(phrase); // Appending phrase to list here
    }

    return output;
}
 
module.exports = myWhileLoopFunction;
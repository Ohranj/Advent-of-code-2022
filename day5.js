const movesString = "move 1 from 4 to 1 move 2 from 4 to 8 move 5 from 9 to 6 move 1 from 1 to 3 move 5 from 8 to 3 move 1 from 1 to 5 move 4 from 3 to 6 move 14 from 6 to 2 move 5 from 4 to 5 move 7 from 7 to 2 move 24 from 2 to 3 move 13 from 3 to 2 move 1 from 7 to 9 move 1 from 9 to 5 move 7 from 2 to 6 move 3 from 1 to 7 move 3 from 6 to 3 move 2 from 7 to 1 move 1 from 7 to 5 move 2 from 2 to 6 move 2 from 1 to 4 move 9 from 5 to 1 move 1 from 6 to 3 move 4 from 5 to 4 move 1 from 2 to 7 move 4 from 6 to 2 move 7 from 2 to 3 move 2 from 2 to 6 move 2 from 2 to 3 move 2 from 5 to 4 move 1 from 7 to 3 move 4 from 6 to 7 move 19 from 3 to 6 move 3 from 7 to 4 move 1 from 7 to 8 move 1 from 8 to 1 move 2 from 1 to 3 move 10 from 3 to 2 move 3 from 3 to 8 move 1 from 3 to 9 move 1 from 9 to 6 move 11 from 6 to 8 move 2 from 3 to 8 move 6 from 4 to 3 move 3 from 4 to 1 move 7 from 2 to 8 move 1 from 3 to 6 move 6 from 8 to 5 move 1 from 4 to 6 move 9 from 6 to 9 move 6 from 3 to 8 move 1 from 3 to 5 move 10 from 1 to 3 move 11 from 8 to 7 move 1 from 3 to 5 move 1 from 1 to 8 move 5 from 9 to 2 move 1 from 6 to 3 move 5 from 3 to 6 move 1 from 3 to 5 move 4 from 6 to 4 move 1 from 5 to 9 move 6 from 2 to 4 move 2 from 2 to 9 move 5 from 5 to 1 move 2 from 1 to 7 move 10 from 8 to 3 move 1 from 8 to 6 move 3 from 6 to 3 move 6 from 4 to 2 move 8 from 3 to 8 move 3 from 4 to 8 move 4 from 2 to 1 move 3 from 5 to 3 move 4 from 7 to 6 move 2 from 9 to 3 move 1 from 2 to 9 move 1 from 2 to 3 move 2 from 4 to 8 move 1 from 7 to 9 move 5 from 7 to 8 move 2 from 7 to 3 move 14 from 3 to 2 move 3 from 9 to 5 move 1 from 3 to 1 move 1 from 7 to 4 move 3 from 9 to 8 move 7 from 8 to 9 move 7 from 2 to 5 move 2 from 3 to 7 move 2 from 7 to 6 move 16 from 8 to 9 move 4 from 6 to 5 move 1 from 2 to 5 move 21 from 9 to 5 move 3 from 9 to 3 move 6 from 1 to 4 move 1 from 1 to 9 move 1 from 1 to 4 move 2 from 6 to 3 move 3 from 4 to 6 move 3 from 4 to 8 move 1 from 9 to 4 move 2 from 4 to 6 move 4 from 3 to 6 move 1 from 3 to 4 move 1 from 4 to 9 move 1 from 9 to 8 move 1 from 8 to 6 move 6 from 2 to 1 move 2 from 8 to 4 move 6 from 1 to 8 move 23 from 5 to 9 move 1 from 4 to 7 move 1 from 7 to 1 move 22 from 9 to 7 move 4 from 8 to 7 move 1 from 5 to 2 move 1 from 1 to 9 move 2 from 8 to 4 move 6 from 6 to 3 move 2 from 9 to 5 move 18 from 7 to 4 move 18 from 4 to 5 move 1 from 2 to 7 move 1 from 8 to 4 move 6 from 7 to 2 move 5 from 4 to 5 move 1 from 3 to 1 move 1 from 7 to 2 move 4 from 3 to 4 move 1 from 3 to 4 move 1 from 1 to 7 move 1 from 5 to 8 move 3 from 4 to 3 move 3 from 3 to 8 move 2 from 8 to 3 move 2 from 4 to 8 move 2 from 7 to 5 move 1 from 7 to 9 move 2 from 3 to 1 move 1 from 9 to 7 move 4 from 2 to 3 move 1 from 8 to 9 move 2 from 1 to 8 move 2 from 2 to 4 move 1 from 9 to 1 move 4 from 6 to 8 move 1 from 2 to 7 move 1 from 4 to 7 move 4 from 8 to 2 move 1 from 4 to 3 move 1 from 1 to 9 move 4 from 8 to 1 move 2 from 2 to 1 move 3 from 3 to 9 move 2 from 7 to 1 move 32 from 5 to 1 move 1 from 8 to 7 move 6 from 5 to 1 move 2 from 7 to 6 move 1 from 9 to 5 move 1 from 3 to 2 move 1 from 5 to 9 move 2 from 6 to 1 move 1 from 3 to 7 move 1 from 9 to 8 move 36 from 1 to 4 move 1 from 8 to 9 move 5 from 4 to 9 move 6 from 9 to 3 move 2 from 2 to 9 move 3 from 1 to 9 move 1 from 3 to 2 move 30 from 4 to 8 move 1 from 7 to 5 move 1 from 3 to 5 move 3 from 3 to 4 move 2 from 8 to 5 move 3 from 9 to 8 move 3 from 9 to 3 move 19 from 8 to 6 move 2 from 3 to 5 move 3 from 4 to 3 move 1 from 4 to 7 move 8 from 1 to 8 move 1 from 3 to 2 move 1 from 7 to 6 move 4 from 5 to 3 move 1 from 1 to 7 move 2 from 5 to 4 move 1 from 9 to 4 move 12 from 6 to 2 move 1 from 7 to 8 move 6 from 2 to 9 move 3 from 6 to 7 move 2 from 7 to 5 move 6 from 2 to 3 move 8 from 3 to 5 move 5 from 6 to 8 move 5 from 3 to 6 move 1 from 9 to 4 move 1 from 9 to 8 move 5 from 5 to 9 move 3 from 4 to 6 move 1 from 4 to 9 move 1 from 7 to 5 move 1 from 3 to 5 move 8 from 9 to 2 move 3 from 9 to 6 move 27 from 8 to 2 move 10 from 6 to 9 move 1 from 6 to 4 move 1 from 4 to 9 move 2 from 5 to 6 move 5 from 5 to 3 move 2 from 6 to 9 move 5 from 3 to 2 move 12 from 9 to 3 move 5 from 3 to 1 move 3 from 1 to 5 move 1 from 9 to 8 move 1 from 5 to 2 move 1 from 2 to 1 move 1 from 1 to 6 move 1 from 5 to 3 move 34 from 2 to 4 move 8 from 3 to 9 move 1 from 6 to 1 move 1 from 8 to 5 move 4 from 2 to 8 move 3 from 8 to 7 move 1 from 7 to 2 move 7 from 9 to 8 move 1 from 9 to 6 move 2 from 5 to 1 move 1 from 6 to 9 move 1 from 9 to 5 move 2 from 2 to 5 move 5 from 8 to 6 move 2 from 8 to 5 move 1 from 1 to 3 move 12 from 4 to 6 move 2 from 7 to 1 move 4 from 1 to 6 move 3 from 2 to 3 move 1 from 8 to 5 move 1 from 2 to 6 move 1 from 1 to 9 move 1 from 9 to 5 move 16 from 4 to 1 move 4 from 3 to 1 move 8 from 1 to 8 move 1 from 4 to 1 move 6 from 5 to 8 move 1 from 5 to 7 move 12 from 6 to 9 move 7 from 1 to 5 move 2 from 1 to 7 move 1 from 7 to 1 move 9 from 9 to 6 move 15 from 6 to 2 move 2 from 9 to 7 move 4 from 4 to 5 move 2 from 2 to 9 move 3 from 7 to 5 move 2 from 1 to 3 move 1 from 7 to 1 move 10 from 2 to 3 move 6 from 8 to 6 move 3 from 9 to 2 move 14 from 5 to 6 move 1 from 8 to 4 move 5 from 8 to 2 move 2 from 2 to 3 move 24 from 6 to 1 move 3 from 1 to 2 move 9 from 2 to 9 move 1 from 4 to 3 move 1 from 4 to 2 move 1 from 8 to 4 move 23 from 1 to 4 move 3 from 2 to 4 move 2 from 1 to 2 move 1 from 8 to 4 move 3 from 3 to 5 move 3 from 3 to 4 move 3 from 5 to 8 move 3 from 2 to 7 move 2 from 3 to 8 move 15 from 4 to 3 move 2 from 4 to 1 move 19 from 3 to 9 move 1 from 7 to 2 move 1 from 2 to 5 move 1 from 5 to 4 move 1 from 7 to 6 move 1 from 7 to 4 move 3 from 8 to 3 move 1 from 8 to 4 move 5 from 3 to 8 move 1 from 3 to 6 move 22 from 9 to 2 move 17 from 2 to 6 move 3 from 9 to 3 move 9 from 4 to 9 move 6 from 4 to 9 move 5 from 2 to 6 move 1 from 4 to 2 move 1 from 4 to 9 move 1 from 1 to 6 move 19 from 9 to 2 move 4 from 8 to 7 move 1 from 1 to 5 move 1 from 5 to 3 move 1 from 8 to 1 move 1 from 8 to 2 move 4 from 3 to 7 move 12 from 6 to 1 move 3 from 7 to 3 move 7 from 2 to 7 move 9 from 2 to 6 move 4 from 2 to 6 move 13 from 1 to 4 move 8 from 6 to 4 move 16 from 4 to 8 move 12 from 7 to 6 move 3 from 8 to 3 move 1 from 1 to 2 move 4 from 3 to 8 move 5 from 8 to 9 move 27 from 6 to 8 move 2 from 3 to 7 move 2 from 2 to 8 move 2 from 7 to 5 move 1 from 5 to 9 move 1 from 5 to 1 move 1 from 6 to 9 move 2 from 6 to 2 move 2 from 2 to 6 move 2 from 9 to 2 move 3 from 4 to 3 move 1 from 1 to 9 move 5 from 9 to 8 move 1 from 9 to 5 move 2 from 2 to 6 move 2 from 4 to 6 move 1 from 3 to 7 move 1 from 5 to 6 move 1 from 6 to 7 move 6 from 6 to 8 move 2 from 7 to 5 move 2 from 3 to 2 move 34 from 8 to 1 move 1 from 5 to 6 move 1 from 5 to 3 move 1 from 6 to 1 move 32 from 1 to 8 move 23 from 8 to 4 move 1 from 2 to 1 move 24 from 8 to 4 move 1 from 3 to 6 move 47 from 4 to 6 move 2 from 6 to 1 move 3 from 1 to 5 move 1 from 2 to 1 move 3 from 5 to 7 move 21 from 6 to 2 move 3 from 7 to 8 move 2 from 1 to 6 move 8 from 6 to 4 move 4 from 8 to 9 move 3 from 2 to 8 move 4 from 4 to 2 move 2 from 2 to 5 move 4 from 9 to 8 move 2 from 1 to 5 move 11 from 6 to 1 move 14 from 2 to 6 move 2 from 4 to 3 move 1 from 2 to 9 move 3 from 2 to 9 move 20 from 6 to 5 move 2 from 4 to 2 move 4 from 9 to 1 move 8 from 8 to 9 move 1 from 6 to 9 move 14 from 5 to 2 move 10 from 2 to 7 move 7 from 9 to 6 move 1 from 6 to 8 move 6 from 2 to 6 move 1 from 2 to 5 move 1 from 3 to 5 move 9 from 6 to 3 move 1 from 5 to 2 move 9 from 7 to 3 move 12 from 3 to 2 move 9 from 5 to 9 move 1 from 8 to 6 move 3 from 3 to 5 move 1 from 7 to 6 move 14 from 2 to 6 move 3 from 9 to 7 move 6 from 1 to 2 move 5 from 1 to 8 move 10 from 6 to 9 move 4 from 5 to 6 move 3 from 2 to 4 move 9 from 9 to 7 move 1 from 8 to 7 move 3 from 9 to 6 move 3 from 3 to 7 move 1 from 5 to 1 move 15 from 7 to 1 move 2 from 8 to 5 move 2 from 5 to 4 move 1 from 7 to 4 move 1 from 3 to 1 move 15 from 6 to 7 move 2 from 4 to 9 move 3 from 4 to 7 move 18 from 1 to 6 move 1 from 8 to 9 move 6 from 9 to 7 move 3 from 6 to 8 move 1 from 1 to 2 move 2 from 9 to 5 move 2 from 2 to 9 move 16 from 6 to 3 move 15 from 3 to 7 move 2 from 8 to 4 move 1 from 3 to 7 move 3 from 4 to 9 move 2 from 1 to 9 move 26 from 7 to 4 move 1 from 2 to 1 move 7 from 9 to 8 move 1 from 2 to 5 move 2 from 5 to 2 move 8 from 7 to 5 move 1 from 7 to 3 move 1 from 3 to 9 move 2 from 2 to 7 move 1 from 6 to 4 move 4 from 8 to 9 move 1 from 1 to 3 move 1 from 5 to 6 move 2 from 5 to 7 move 17 from 4 to 9 move 6 from 4 to 9 move 1 from 3 to 4 move 6 from 7 to 9 move 3 from 5 to 6 move 2 from 7 to 9 move 4 from 8 to 9 move 4 from 6 to 4 move 8 from 4 to 6 move 1 from 8 to 4 move 3 from 5 to 2 move 2 from 4 to 3 move 1 from 7 to 9 move 2 from 3 to 5 move 4 from 6 to 9 move 1 from 6 to 1 move 36 from 9 to 4 move 2 from 5 to 3 move 3 from 2 to 1 move 3 from 1 to 4 move 14 from 4 to 1 move 1 from 8 to 5 move 4 from 1 to 3 move 5 from 9 to 5 move 2 from 5 to 8 move 1 from 8 to 9 move 4 from 9 to 6 move 3 from 5 to 8 move 1 from 5 to 6 move 2 from 1 to 6 move 2 from 9 to 7 move 6 from 6 to 4 move 1 from 1 to 3 move 29 from 4 to 6 move 7 from 3 to 4 move 1 from 8 to 9 move 3 from 1 to 6 move 4 from 1 to 4 move 1 from 8 to 4 move 4 from 4 to 3 move 15 from 6 to 8 move 9 from 4 to 9 move 1 from 7 to 9 move 8 from 8 to 3 move 3 from 6 to 7 move 1 from 1 to 2 move 4 from 7 to 6 move 7 from 8 to 5 move 1 from 8 to 4 move 2 from 5 to 7 move 1 from 2 to 4 move 5 from 6 to 1 move 4 from 3 to 2"

const moves = movesString.split(' ');

const data = {
    1: ['D', 'B', 'J', 'V'],
    2: ['P', 'V', 'B', 'W', 'R', 'D', 'F'],
    3: ['R', 'G', 'F', 'L', 'D', 'C', 'W', 'Q'],
    4: ['W', 'J', 'P', 'M', 'L', 'N', 'D', 'B'],
    5: ['H', 'N', 'B', 'P', 'C', 'S', 'Q'],
    6: ['R', 'D', 'B', 'S', 'N', 'G'],
    7: ['Z', 'B', 'P', 'M', 'Q', 'F', 'S', 'H'],
    8: ['W', 'L', 'F'],
    9: ['S', 'V', 'F', 'M', 'R'], 
    moves: []
}

while (moves.length) {
    data.moves.push(moves.splice(0, 6).join(' '));
}


/**
 * Question 1
 */
// for (let i = 0; i < data.moves.length; i++) {
//     const str = data.moves[i].split(' ')
//     const fromCol = str[3];
//     const amount = str[1];
//     const toCol = str[5]
//     const took = data[fromCol].splice(- amount)
//     data[toCol].push(...took.reverse());
// }

// let answer = '';
// delete(data.moves)
// const stacks = Object.keys(data).length;
// for (let i = 1; i <= stacks; i++) {
//     answer += data[i].pop();
// }
// console.log(answer)


/**
 * Question 2
 * Comment out question 1 when running to prevent it changing the initial data object
 */
for (let i = 0; i < data.moves.length; i++) {
    const str = data.moves[i].split(' ')
    const fromCol = str[3];
    const amount = str[1];
    const toCol = str[5]
    const took = data[fromCol].splice(- amount)
    data[toCol].push(...took);
}

let answer = '';
delete(data.moves)
const stacks = Object.keys(data).length;
for (let i = 1; i <= stacks; i++) {
    answer += data[i].pop();
}
console.log(answer)
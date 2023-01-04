const cycles = `addx 1
addx 4
addx 1
noop
noop
addx 4
addx 1
addx 4
noop
noop
addx 5
noop
noop
noop
addx -3
addx 9
addx -1
addx 5
addx -28
addx 29
addx 2
addx -28
addx -7
addx 10
noop
noop
noop
noop
noop
addx -2
addx 2
addx 25
addx -18
addx 3
addx -2
addx 2
noop
addx 3
addx 2
addx 5
addx 2
addx 2
addx 3
noop
addx -15
addx 8
addx -28
noop
noop
noop
addx 7
addx -2
noop
addx 5
noop
noop
noop
addx 3
noop
addx 3
addx 2
addx 5
addx 2
addx 3
addx -2
addx 3
addx -31
addx 37
addx -28
addx -9
noop
noop
noop
addx 37
addx -29
addx 4
noop
addx -2
noop
noop
noop
addx 7
noop
noop
noop
addx 5
noop
noop
noop
addx 4
addx 2
addx 4
addx 2
addx 3
addx -2
noop
noop
addx -34
addx 6
noop
noop
noop
addx -4
addx 9
noop
addx 5
noop
noop
addx -2
noop
addx 7
noop
addx 2
addx 15
addx -14
addx 5
addx 2
addx 2
addx -32
addx 33
addx -31
addx -2
noop
noop
addx 1
addx 3
addx 2
noop
addx 2
noop
addx 7
noop
addx 5
addx -6
addx 4
addx 5
addx 2
addx -14
addx 15
addx 2
noop
addx 3
addx 4
noop
addx 1
noop
noop`.split('\n');

/**
 * Question 1
 * Uncomment in order to run
 */
// let x = 1;
// let curCycle = 0;
// let i = 0;
// let signalBreaks = [20, 60, 100, 140, 180, 220]
// let curBreak = 0;
// let signalStrengths = [];

// while (curCycle <= signalBreaks[signalBreaks.length - 1]) {
//     curCycle++;
//     checkCycle();
//     if (cycles[i] == 'noop') {
//         i++;
//         continue;
//     }
//     curCycle++;
//     checkCycle();
//     x += Number(cycles[i].split(' ')[1])
//     i++;
// }

// function checkCycle() {
//     if (curCycle == signalBreaks[curBreak]) {
//         signalStrengths.push(signalBreaks[curBreak] * x)
//         curBreak++;
//     }
// }

// const sumOfStrengths = signalStrengths.reduce((acc, c) => acc += c, 0);
// console.log(sumOfStrengths)


/**
 * Question 2
 */
let rows = [];
for (let i = 0; i < 6; i++) {
    rows.push(new Array(40).fill('.'))
}
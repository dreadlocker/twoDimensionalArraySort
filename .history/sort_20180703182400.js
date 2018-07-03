let twoDimensionalArray = [
    [0, 11],
    [1, 11],
    [2, 1],
    [3, 1],
    [4, 11],
    [5, 1],
    [6, 1],
    [7, 1],
    [8, 1],
    [9, 1],
    [10, 11],
    [11, 12],
    [12, 42],
    [13, 14],
    [14, 42],
    [15, 42],
    [16, 17],
    [17, 18],
    [18, 19],
    [19, 20],
    [20, 13],
    [21, 22],
    [22, 14],
    [23, 24],
    [24, 25],
    [25, 11],
    [26, 42],
    [27, 42],
    [28, 29],
    [29, 30],
    [30, 22],
    [31, 22],
    [32, 22],
    [33, 22],
    [34, 22]
];

twoDimensionalArray.sort((a, b) => {
    // // version 1
    // if (b[1] > a[1]) {
    //     return 1;
    // } else if (b[1] < a[1]) {
    //     return -1;
    // } else {
    //     if (b[0] > a[0]) {
    //         return 1;
    //     } else if (b[0] < a[0]) {
    //         return -1;
    //     } else {
    //         return 0;
    //     }
    // }

    // version 2
    return b[1] - a[1] || b[0] - a[0];
});

for (let i = 0; i < twoDimensionalArray.length; i++) {
    console.log(twoDimensionalArray[i]);
}
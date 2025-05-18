const dataList = [
    {
        title: 'Basic start (1x1)',
        grid: [[0]], /* ~11000 steps to highway */
        posX: 0,
        posY: 0,
        dir: 0,
        step: 0
    },
    {
        title: 'White square (3x3)',
        grid: new Array(3).fill(new Array(3).fill(1)), /* ~1800 steps to highway */
        posX: 1,
        posY: 1,
        dir: 0,
        step: 0
    },
    {
        title: 'White square (5x5)',
        grid: new Array(5).fill(new Array(5).fill(1)), /* ~4000 steps to highway */
        posX: 2,
        posY: 2,
        dir: 0,
        step: 0
    },
    {
        title: 'Small chessboard (5x5)',
        grid: new Array(5).fill(new Array(5).fill(0)).map((row, i) => row.map((_, j) => !(i % 2) && !(j % 2) || i % 2 && j % 2 ? 1 : 0)), /* ~8200 steps to highway */
        posX: 2,
        posY: 2,
        dir: 0,
        step: 0
    },
    {
        title: 'Big chessboard (21x21)',
        grid: new Array(21).fill(new Array(21).fill(0)).map((row, i) => row.map((_, j) => !(i % 2) && !(j % 2) || i % 2 && j % 2 ? 1 : 0)), /* ~6200 steps to highway */
        posX: 10,
        posY: 10,
        dir: 0,
        step: 0
    },
    {
        title: 'Inside the highway (6x6)',
        grid: [
            [0, 0, 0, 0, 1, 1],
            [0, 0, 0, 1, 1, 1],
            [0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1],
            [1, 1, 1, 0, 0, 1],
            [1, 1, 1, 1, 1, 0]
        ],
        posX: 2,
        posY: 3,
        dir: 0,
        step: 0
    },
    {
        title: 'Break the wall (27x27)',
        grid: [ /* ~700 steps to first highway, ~2800 steps to second highway */
            new Array(27).fill(1),
            ...new Array(13).fill([1, ...new Array(25).fill(0), 1]),
            [1, ...new Array(7).fill(0), 1, 1, 1, 1, 1, ...new Array(13).fill(0), 1],
            [1, ...new Array(7).fill(0), 1, 0, 0, 0, 1, ...new Array(13).fill(0), 1],
            [1, ...new Array(7).fill(0), 1, 0, 1, 0, 1, ...new Array(13).fill(0), 1],
            [1, ...new Array(7).fill(0), 1, 0, 0, 0, 1, ...new Array(13).fill(0), 1],
            [1, ...new Array(7).fill(0), 1, 1, 1, 1, 1, ...new Array(13).fill(0), 1],
            ...new Array(7).fill([1, ...new Array(25).fill(0), 1]),
            new Array(27).fill(1),
        ],
        posX: 10,
        posY: 16,
        dir: 0,
        step: 0
    },
    {
        title: 'Double break the wall (33x33)',
        grid: [ /* ~1800 steps to first highway, ~4800 steps to second highway, ~8700 steps to third highway */
            new Array(33).fill(1),
            ...new Array(14).fill([1, ...new Array(31).fill(0), 1]),
            ...new Array(3).fill([1, ...new Array(16).fill(0), 1, 1, 1, ...new Array(12).fill(0), 1]),
            ...new Array(14).fill([1, ...new Array(31).fill(0), 1]),
            new Array(33).fill(1),
        ],
        posX: 18,
        posY: 16,
        dir: 0,
        step: 0
    }
];

export default dataList;

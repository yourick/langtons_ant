function move({ grid, posX, posY, dir, step }) {
    grid = grid.map(row => [...row]);

    if (grid[posY][posX] === 1) {
        dir = dir === 3 ? 0 : dir + 1;
        grid[posY][posX] = 0;
    } else {
        dir = dir === 0 ? 3 : dir - 1;
        grid[posY][posX] = 1;
    }

    switch (dir) {
        case 0:
            if (posY === 0) {
                grid.unshift(new Array(grid[0].length).fill(0));
            } else {
                posY -= 1;
            }
            break;
        case 1:
            if (posX === grid[0].length - 1) {
                grid.forEach(row => row.push(0));
            }
            posX += 1;
            break;
        case 2:
            if (posY === grid.length - 1) {
                grid.push(new Array(grid[0].length).fill(0));
            }
            posY += 1;
            break;
        case 3:
            if (posX === 0) {
                grid.forEach(row => row.unshift(0));
            } else {
                posX -= 1;
            }
            break;
    }

    step += 1;

    return { grid, posX, posY, dir, step };
}

export default move;

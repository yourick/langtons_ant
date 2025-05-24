import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import { Stage, Layer, Rect, Image } from 'react-konva';
import useImage from 'use-image';
import ladybug from '/ladybug.svg';

const URLImage = ({ src, ...rest }) => {
    const [image] = useImage(src, 'anonymous');
    return <Image image={image} {...rest} />;
};

function Grid({ size, gap, isFocused }) {
    const {data, dummyCells} = useContext(DataContext);

    let {grid, posX, posY, dir} = data;

    if (dummyCells > 0) {
        grid = grid.map(row => [...new Array(dummyCells).fill(0), ...row, ...new Array(dummyCells).fill(0)]);
        grid.unshift(...new Array(dummyCells).fill(new Array(grid[0].length).fill(0)));
        grid.push(...new Array(dummyCells).fill(new Array(grid[0].length).fill(0)));

        posX += dummyCells;
        posY += dummyCells;
    }

    const width = grid[0].length * (size + gap) + gap;
    const height = grid.length * (size + gap) + gap;

    return (
        <Stage width={width} height={height}>
            <Layer>
                <Rect x={0} y={0} width={width} height={height} fill="#ced4da"/>
                {grid.map((row, y) =>
                    row.map((cell, x) => (
                        <Rect
                            key={`${y}-${x}`}
                            x={x * (size + gap) + gap}
                            y={y * (size + gap) + gap}
                            width={size}
                            height={size}
                            fill={cell === 1 ? '#ffffff' : '#6c757d'}
                        />
                    ))
                )}
                <URLImage 
                    src={ladybug}
                    x={posX * (size + gap) + gap + size / 2}
                    y={posY * (size + gap) + gap + size / 2}
                    width={size * 0.9}
                    height={size * 0.9}
                    rotation={dir * 90}
                    offset={{
                        x: size * 0.9 / 2,
                        y: size * 0.9 / 2
                    }}
                />
            </Layer>
        </Stage>
    );
}

export default Grid;

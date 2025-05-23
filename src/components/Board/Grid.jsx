import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import './Grid.css';
import ladybug from '/ladybug.svg';

function Grid({ runnerRef }) {
    const {data, dummyCells} = useContext(DataContext);

    let {grid, posX, posY, dir} = data;

    if (dummyCells > 0) {
        grid = grid.map(row => [...new Array(dummyCells).fill(0), ...row, ...new Array(dummyCells).fill(0)]);
        grid.unshift(...new Array(dummyCells).fill(new Array(grid[0].length).fill(0)));
        grid.push(...new Array(dummyCells).fill(new Array(grid[0].length).fill(0)));

        posX += dummyCells;
        posY += dummyCells;
    }

    return (
        <div className="ant-grid">
            {grid.map((row, y) => {
                return (
                    <div key={y} className="ant-grid-row">
                        {row.map((cell, x) => {
                            return (
                                <div key={x} className={'ant-grid-cell' + (cell === 1 ? ' ant-grid-cell-inverted' : '')}>
                                    {y === posY && x === posX ? (
                                        <div ref={runnerRef} className="ant-runner-icon" style={{transform: `rotate(${dir * 90}deg)`}}>
                                            <img src={ladybug} alt="Ladybug"/>
                                            <span className="ant-runner-icon-mark"></span>
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

export default Grid;

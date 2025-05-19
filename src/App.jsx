import { useState, useRef } from 'react';
import Layout from './components/Layout/Layout';
import dataList from './data';
import './App.css';
import ladybug from '/ladybug.svg';

function App() {
    const [defaultData, setDefaultData] = useState(0);
    const [data, setData] = useState(dataList[defaultData]);
    const ant = useRef(null);

    let {grid, posX, posY, dir, step} = data;

    const dummyCells = 4;

    if (dummyCells > 0) {
        grid = grid.map(row => [...new Array(dummyCells).fill(0), ...row, ...new Array(dummyCells).fill(0)]);
        grid.unshift(...new Array(dummyCells).fill(new Array(grid[0].length).fill(0)));
        grid.push(...new Array(dummyCells).fill(new Array(grid[0].length).fill(0)));

        posX += dummyCells;
        posY += dummyCells;
    }

    const gridOutput = (
        <div className="ant-grid">
            {grid.map((row, y) => {
                return (
                    <div key={y} className="ant-grid-row">
                        {row.map((cell, x) => {
                            return (
                                <div key={x} className={'ant-grid-cell' + (cell === 1 ? ' ant-grid-cell-inverted' : '')}>
                                    {y === posY && x === posX ? (
                                        <div ref={ant} className="ant-icon" style={{transform: `rotate(${dir * 90}deg)`}}>
                                            <img src={ladybug} alt="Ladybug"/>
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

    return (
        <Layout onSetData={setData} defaultData={defaultData} onSetDefaultData={setDefaultData} step={step} gridOutput={gridOutput} dummyCells={dummyCells} ant={ant}/>
    );
}

export default App;

import { useState, useRef, useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import BoardPanel from './BoardPanel/BoardPanel';
import Grid from './Grid';
import './Board.css';

function Board() {
    const [scale, setScale] = useState(1);
    const [isFocused, setIsFocused] = useState(false);
    const viewportRef = useRef(null);

    const {data, dummyCells} = useContext(DataContext);

    let {posX, posY} = data;

    if (dummyCells > 0) {
        posX += dummyCells;
        posY += dummyCells;
    }

    const size = 20 * scale;
    const gap = 1 * scale;
    const offsetX = posX * (size + gap) + gap;
    const offsetY = posY * (size + gap) + gap;

    const boardClassName = 'ant-board' + (dummyCells > 0 ? ' ant-board-dummy-cells' : '') + (isFocused ? ' ant-board-focused' : '');

    return (
        <>
            <BoardPanel scale={scale} onSetScale={setScale} onSetIsFocused={setIsFocused} viewportRef={viewportRef} offsetX={offsetX} offsetY={offsetY}/>

            <div ref={viewportRef} className="ant-viewport">
                <div className="ant-holder">
                    <div className={boardClassName} style={{fontSize: scale + 'em'}}>
                        <Grid size={size} gap={gap} isFocused={isFocused}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Board;

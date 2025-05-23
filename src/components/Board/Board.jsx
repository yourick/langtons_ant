import { useState, useRef, useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import BoardPanel from './BoardPanel/BoardPanel';
import './Board.css';

function Board({ runnerRef, children }) {
    const [scale, setScale] = useState(1);
    const [isFocused, setIsFocused] = useState(false);
    const viewportRef = useRef(null);

    const {dummyCells} = useContext(DataContext);

    const boardClassName = 'ant-board' + (dummyCells > 0 ? ' ant-board-dummy-cells' : '') + (isFocused ? ' ant-board-focused' : '');

    return (
        <>
            <BoardPanel scale={scale} onSetScale={setScale} onSetIsFocused={setIsFocused} viewportRef={viewportRef} runnerRef={runnerRef}/>

            <div ref={viewportRef} className="ant-viewport">
                <div className="ant-holder">
                    <div className={boardClassName} style={{fontSize: scale + 'em'}}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Board;

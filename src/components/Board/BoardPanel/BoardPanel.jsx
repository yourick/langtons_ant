import ScalePanel from './ScalePanel';
import FocusPanel from './FocusPanel';
import './BoardPanel.css';

function BoardPanel({ scale, onSetScale, onSetIsFocused, viewportRef, offsetX, offsetY }) {
    return (
        <div className="ant-board-panel">
            <ScalePanel scale={scale} onSetScale={onSetScale}/>
            <FocusPanel onSetIsFocused={onSetIsFocused} viewportRef={viewportRef} offsetX={offsetX} offsetY={offsetY}/>
        </div>
    );
}

export default BoardPanel;

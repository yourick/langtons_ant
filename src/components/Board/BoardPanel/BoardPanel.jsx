import ScalePanel from './ScalePanel';
import FocusPanel from './FocusPanel';
import './BoardPanel.css';

function BoardPanel({ scale, onSetScale, viewportRef, runnerRef }) {
    return (
        <div className="ant-board-panel">
            <ScalePanel scale={scale} onSetScale={onSetScale}/>
            <FocusPanel viewportRef={viewportRef} runnerRef={runnerRef}/>
        </div>
    );
}

export default BoardPanel;

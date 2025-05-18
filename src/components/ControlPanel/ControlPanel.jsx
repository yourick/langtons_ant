import { useState } from 'react';
import { Stack } from 'react-bootstrap';
import ModePanel from './ModePanel';
import ScalePanel from './ScalePanel';
import FocusPanel from './FocusPanel';
import DefaultDataPanel from './DefaultDataPanel';
import ResetPanel from './ResetPanel';
import RunStopPanel from './RunStopPanel';
import MoveToStepPanel from './MoveToStepPanel';
import AddStepPanel from './AddStepPanel';
import move from './../../utils/move';
import './ControlPanel.css';

function ControlPanel({ onSetData, defaultData, onSetDefaultData, step, scale, onSetScale, viewport, ant }) {
    const [isHidden, setIsHidden] = useState(false);
    const [isReduced, setIsReduced] = useState(false);
    const [isRunning, setIsRunning] = useState(false);

    const panelClassName = 'ant-panel' + (isReduced ? ' ant-panel-reduced' : '') + (isHidden ? ' ant-panel-hidden' : '');

    function handleMove(steps) {
        onSetData(d => {
            let tempData = d;
            for (let i = 0; i < steps; i++) tempData = move(tempData);
            return tempData;
        });
    }

    return (
        <div className={panelClassName}>
            <ModePanel isHidden={isHidden} onSetIsHidden={setIsHidden} isReduced={isReduced} onSetIsReduced={setIsReduced}/>
            <ScalePanel scale={scale} onSetScale={onSetScale}/>
            <FocusPanel viewport={viewport} ant={ant}/>
            <hr/>
            <DefaultDataPanel onSetData={onSetData} defaultData={defaultData} onSetDefaultData={onSetDefaultData} isRunning={isRunning}/>
            <hr/>
            <Stack direction="horizontal" gap={3} className="ant-action-panel">
                <Stack direction="horizontal" gap={3} className="ant-main-panel">
                    <Stack direction="horizontal" gap={3} className="ant-info-panel">
                        <div className="flex-shrink-0 ant-step-number">Step: {step}</div>
                        <ResetPanel onSetData={onSetData} defaultData={defaultData} step={step} isRunning={isRunning}/>
                    </Stack>
                    <div className="vr"/>
                    <RunStopPanel onHandleMove={handleMove} isRunning={isRunning} onSetIsRunning={setIsRunning}/>
                </Stack>
                <div className="vr"/>
                <Stack direction="horizontal" gap={3} className="ant-step-panel">
                    <MoveToStepPanel onSetData={onSetData} defaultData={defaultData} onHandleMove={handleMove} isRunning={isRunning}/>
                    <div className="vr"/>
                    <AddStepPanel onHandleMove={handleMove} isRunning={isRunning}/>
                </Stack>
            </Stack>
        </div>
    );
}

export default ControlPanel;

import { useRef } from 'react';
import { Stack, ButtonGroup, Button } from 'react-bootstrap';

function RunStopPanel({ onHandleMove, isRunning, onSetIsRunning }) {
    const timerId = useRef(null);

    function handleRunClick() {
        onSetIsRunning(true);
        onHandleMove(1);
        timerId.current = setInterval(() => {
            onHandleMove(1);
        }, 500);
    }

    function handleStopClick() {
        clearInterval(timerId.current);
        onSetIsRunning(false);
    }

    return (
        <Stack direction="horizontal" className="ant-run-stop-panel">
            <ButtonGroup>
                <Button variant="danger" onClick={handleRunClick} disabled={isRunning}>Run</Button>
                <Button variant="danger" onClick={handleStopClick} disabled={!isRunning}>Stop</Button>
            </ButtonGroup>
        </Stack>
    );
}

export default RunStopPanel;

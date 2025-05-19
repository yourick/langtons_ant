import { Button } from 'react-bootstrap';
import dataList from '../../data';

function ResetPanel({ onSetData, defaultData, step, isRunning }) {
    function handleClick() {
        onSetData(dataList[defaultData]);
    }

    return (
        <Button variant="dark" onClick={handleClick} disabled={step === 0 || isRunning}>Reset</Button>
    );
}

export default ResetPanel;

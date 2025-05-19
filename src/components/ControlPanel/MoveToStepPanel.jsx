import { useState, useContext } from 'react';
import { Stack, Form, Button } from 'react-bootstrap';
import { DataContext } from '../../DataContext';
import dataList from '../../data';

function MoveToStepPanel({ onHandleMove, isRunning }) {
    const [stepNumber, setStepNumber] = useState('');

    const {setData, defaultData} = useContext(DataContext);

    function handleSubmit(e) {
        e.preventDefault();
        if (stepNumber !== '') {
            setStepNumber('');
            setData(dataList[defaultData]);
            onHandleMove(Number(stepNumber));
        }
    }

    return (
        <Stack as={Form} direction="horizontal" gap={2} className="ant-move-step-panel" onSubmit={handleSubmit}>
            <Stack as={Form.Group} direction="horizontal" gap={2} className="form-field" controlId="moveToStepInput">
                <Form.Label className="mb-0">Move to step:</Form.Label>
                <Form.Control type="text" maxLength="5" placeholder="number..." disabled={isRunning} style={{width: '6rem'}} value={stepNumber} onChange={(e) => {
                    let value = e.target.value.trim();
                    if (value === '' || value.match(/^\d+$/)) setStepNumber(value);
                }}/>
            </Stack>
            <Button type="submit" disabled={stepNumber === '' || isRunning}>Go</Button>
        </Stack>
    );
}

export default MoveToStepPanel;

import { useState } from 'react';
import { Stack, Form, Button } from 'react-bootstrap';

function AddStepPanel({ onHandleMove, isRunning }) {
    const [stepNumber, setStepNumber] = useState('');

    function handleClick(steps) {
        onHandleMove(steps);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (stepNumber !== '') {
            onHandleMove(Number(stepNumber));
        }
    }

    return (
        <Stack direction="horizontal" gap={3} className="ant-add-step-panel">
            <Stack as={Form} direction="horizontal" gap={2} onSubmit={handleSubmit}>
                <Stack as={Form.Group} direction="horizontal" gap={2} className="form-field" controlId="addStepInput">
                    <Form.Label className="mb-0">Add steps:</Form.Label>
                    <Form.Control type="text" maxLength="5" placeholder="number..." disabled={isRunning} style={{width: '6rem'}} value={stepNumber} onChange={(e) => {
                        let value = e.target.value.trim();
                        if (value === '' || value.match(/^\d+$/)) setStepNumber(value);
                    }}/>
                </Stack>
                <Button type="submit" disabled={stepNumber === '' || isRunning}>Add</Button>
            </Stack>
            <div className="vr"/>
            <Stack direction="horizontal" gap={2} className="ant-add-step-buttons-panel">
                <Button onClick={() => handleClick(1)} disabled={isRunning}>+1 step</Button>
                <Button onClick={() => handleClick(100)} disabled={isRunning}>+100 steps</Button>
                <Button onClick={() => handleClick(1000)} disabled={isRunning}>+1000 steps</Button>
            </Stack>
        </Stack>
    );
}

export default AddStepPanel;

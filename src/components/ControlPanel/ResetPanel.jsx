import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { DataContext } from '../../DataContext';
import dataList from '../../data';

function ResetPanel({ isRunning }) {
    const {data, setData, defaultData} = useContext(DataContext);

    const {step} = data;

    function handleClick() {
        setData(dataList[defaultData]);
    }

    return (
        <Button variant="dark" onClick={handleClick} disabled={step === 0 || isRunning}>Reset</Button>
    );
}

export default ResetPanel;

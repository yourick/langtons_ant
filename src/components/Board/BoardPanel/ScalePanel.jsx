import { Stack, Button } from 'react-bootstrap';

function ScalePanel({ scale, onSetScale }) {
    return (
        <Stack direction="horizontal" gap="3" className="ant-scale-panel">
            <Stack direction="horizontal" gap="3" className="ant-scale-buttons-panel">
                <Button variant="light" onClick={() => onSetScale(Math.round((scale - 0.25) * 100) / 100)} disabled={scale <= 0.25}>-</Button>
                <Button variant="light" onClick={() => onSetScale(Math.round((scale + 0.25) * 100) / 100)} disabled={scale >= 2}>+</Button>
            </Stack>
            {scale !== 1 ? (
                <Stack direction="horizontal" gap="3" className="ant-scale-number-panel">
                    <div className="ant-scale-number">{scale * 100 + '%'}</div>
                    <Button variant="dark" onClick={() => onSetScale(1)}>Reset</Button>
                </Stack>
            ) : (
                ''
            )}
        </Stack>
    );
}

export default ScalePanel;

import { Stack, Button } from 'react-bootstrap';

function ModePanel({ isHidden, onSetIsHidden, isReduced, onSetIsReduced }) {
    return (
        <Stack direction="horizontal" gap="3" className="ant-mode-panel">
            {isHidden ? (
                <Button variant="light" onClick={() => onSetIsHidden(false)}>Show panel</Button>
            ) : (
                <>
                    <Button variant="secondary" onClick={() => onSetIsHidden(true)}>Hide panel</Button>
                    {isReduced ? (
                        <Button variant="secondary" onClick={() => onSetIsReduced(false)}>Expand panel</Button>
                    ) : (
                        <Button variant="secondary" onClick={() => onSetIsReduced(true)}>Reduce panel</Button>
                    )}
                </>
            )}
        </Stack>
    );
}

export default ModePanel;

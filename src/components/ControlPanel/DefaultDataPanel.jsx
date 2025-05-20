import { useState, useContext } from 'react';
import { Stack, Modal, Form, Button } from 'react-bootstrap';
import { DataContext } from '../../contexts/DataContext';
import dataList from '../../data';

function DefaultDataPanel({ isRunning }) {
    const [showAbout, setShowAbout] = useState(false);

    const {setData, defaultData, setDefaultData} = useContext(DataContext);

    function handleCloseAbout() {
        setShowAbout(false);
    }

    function handleShowAbout() {
        setShowAbout(true);
    }

    return (
        <>
            <Stack direction="horizontal" gap={3} className="mb-3 ant-data-panel">
                <Stack as={Form.Group} direction="horizontal" gap={2} className="form-field flex-wrap ant-config-panel" controlId="defaultDataSelect">
                    <Form.Label className="mb-0">Initial configuration:</Form.Label>
                    <Form.Select disabled={isRunning} value={defaultData} onChange={(e) => {
                        let value = e.target.value;
                        setDefaultData(value);
                        setData(dataList[value]);
                    }}>
                        {dataList.map((data, i) => {
                            return (
                                <option key={i} value={i}>{data.title}</option>
                            );
                        })}
                    </Form.Select>
                </Stack>
                <Stack direction="horizontal" className="ant-about-panel">
                    <Button variant="link" className="p-0" onClick={handleShowAbout}>About Langton's ant</Button>
                </Stack>
            </Stack>

            <Modal show={showAbout} onHide={handleCloseAbout}>
                <Modal.Header closeButton style={{background: 'var(--bs-light)'}}>
                    <Modal.Title>Langton's ant</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Langton's ant is a two-dimensional Turing machine with a very simple set of rules but complex emergent behavior.</p>

                    <h4>Rules</h4>
                    <p className="mb-2">Squares on a plane are colored variously either black or white. We arbitrarily identify one square as the "ant". The "ant" can travel in any of the four cardinal directions at each step it takes. The "ant" moves according to the rules below:</p>
                    <ul>
                        <li className="mb-1">at a white square, turn 90° clockwise, flip the color of the square, move forward one unit</li>
                        <li className="mb-1">at a black square, turn 90° counter-clockwise, flip the color of the square, move forward one unit</li>
                    </ul>

                    <h4>Modes of behavior</h4>
                    <p className="mb-2">Three distinct modes of behavior are apparent, when starting on a single color grid.</p>
                    <ol>
                        <li className="mb-1">Simplicity. During the first few hundred moves it creates very simple patterns which are often symmetric.</li>
                        <li className="mb-1">Chaos. After a few hundred moves, a large, irregular pattern of black and white squares appears. The ant traces a pseudo-random path until around 10,000 steps.</li>
                        <li className="mb-1">Emergent order. Finally the ant starts building a recurrent "highway" pattern of 104 steps that repeats indefinitely.</li>
                    </ol>

                    <p className="mb-2">
                        <a href="https://en.wikipedia.org/wiki/Langton%27s_ant">Read more on Wikipedia</a>
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default DefaultDataPanel;

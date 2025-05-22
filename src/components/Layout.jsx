import { useRef } from 'react';
import ControlPanel from './ControlPanel/ControlPanel';
import Board from './Board/Board';
import Grid from './Board/Grid';
import './Layout.css';

function Layout() {
    const runnerRef = useRef(null);

    return (
        <div className="ant-base">
            <ControlPanel/>

            <Board runnerRef={runnerRef}>
                <Grid runnerRef={runnerRef}/>
            </Board>
        </div>
    );
}

export default Layout;

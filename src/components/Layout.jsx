import { useRef, useContext } from 'react';
import { DataContext } from '../contexts/DataContext';
import { ScaleContext } from '../contexts/ScaleContext';
import ControlPanel from './ControlPanel/ControlPanel';
import './Layout.css';

function Layout({ runnerRef, children }) {
    const viewportRef = useRef(null);

    const {dummyCells} = useContext(DataContext);
    const {scale} = useContext(ScaleContext);

    return (
        <div className="ant-base">
            <ControlPanel viewportRef={viewportRef} runnerRef={runnerRef}/>

            <div ref={viewportRef} className="ant-viewport">
                <div className="ant-holder">
                    <div className={'ant-board' + (dummyCells > 0 ? ' ant-board-dummy-cells' : '')} style={{fontSize: scale + 'em'}}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;

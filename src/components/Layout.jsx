import { useState, useRef } from 'react';
import ControlPanel from './ControlPanel/ControlPanel';
import './Layout.css';

function Layout({ onSetData, defaultData, onSetDefaultData, step, dummyCells, ant, children }) {
    const [scale, setScale] = useState(1);
    const viewport = useRef(null);

    return (
        <div className="ant-base">
            <ControlPanel onSetData={onSetData} defaultData={defaultData} onSetDefaultData={onSetDefaultData} step={step} scale={scale} onSetScale={setScale} viewport={viewport} ant={ant}/>

            <div ref={viewport} className="ant-viewport">
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

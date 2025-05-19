import { useState, useRef } from 'react';
import ControlPanel from './../ControlPanel/ControlPanel';

function Layout({ onSetData, defaultData, onSetDefaultData, step, gridOutput, dummyCells, ant }) {
    const [scale, setScale] = useState(1);
    const viewport = useRef(null);

    return (
        <div className="ant-base">
            <ControlPanel onSetData={onSetData} defaultData={defaultData} onSetDefaultData={onSetDefaultData} step={step} scale={scale} onSetScale={setScale} viewport={viewport} ant={ant}/>

            <div ref={viewport} className="ant-viewport">
                <div className="ant-holder">
                    <div className={'ant-board' + (dummyCells > 0 ? ' ant-board-dummy-cells' : '')} style={{fontSize: scale + 'em'}}>
                        {gridOutput}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;

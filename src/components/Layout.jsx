import { useState, useRef } from 'react';
import ControlPanel from './ControlPanel/ControlPanel';
import './Layout.css';

function Layout({ dummyCells, ant, children }) {
    const [scale, setScale] = useState(1);
    const viewport = useRef(null);

    return (
        <div className="ant-base">
            <ControlPanel scale={scale} onSetScale={setScale} viewport={viewport} ant={ant}/>

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

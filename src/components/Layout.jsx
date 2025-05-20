import { useRef, useContext } from 'react';
import { DataContext } from '../contexts/DataContext';
import { ScaleContext } from '../contexts/ScaleContext';
import ControlPanel from './ControlPanel/ControlPanel';
import './Layout.css';

function Layout({ ant, children }) {
    const viewport = useRef(null);

    const {dummyCells} = useContext(DataContext);
    const {scale} = useContext(ScaleContext);

    return (
        <div className="ant-base">
            <ControlPanel viewport={viewport} ant={ant}/>

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

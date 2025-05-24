import ControlPanel from './ControlPanel/ControlPanel';
import Board from './Board/Board';
import './Layout.css';

function Layout() {
    return (
        <div className="ant-base">
            <ControlPanel/>
            <Board/>
        </div>
    );
}

export default Layout;

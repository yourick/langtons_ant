import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import ladybug from '/ladybug.svg';
import crosshair from './../../assets/images/crosshair.svg';

function FocusPanel({ viewport, ant }) {
    const [offset, setOffset] = useState(0);

    useEffect(function() {
        const el = viewport.current;

        const resizeObserver = new ResizeObserver(() => {
            const newOffset = el.offsetWidth - el.clientWidth;
            setOffset(newOffset);
        });

        resizeObserver.observe(el);

        return function() {
            resizeObserver.unobserve(el);
        };
    }, [viewport]);

    function handleClick() {
        ant.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }

    return (
        <div className="ant-focus-panel" style={{marginRight: offset}}>
            <Button variant="light" onClick={handleClick}>
                <span className="ant-crosshair-icon">
                    <img src={crosshair} alt="Crosshair"/>
                </span>
                <span className="ant-runner-icon">
                    <img src={ladybug} alt="Ladybug"/>
                </span>
            </Button>
        </div>
    );
}

export default FocusPanel;

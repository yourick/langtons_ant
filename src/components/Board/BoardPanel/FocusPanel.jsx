import { useState, useRef, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import ladybug from '/ladybug.svg';
import crosshair from '../../../assets/images/crosshair.svg';

function FocusPanel({ onSetIsFocused, viewportRef, runnerRef }) {
    const [offset, setOffset] = useState(0);
    const timerId = useRef(null);

    useEffect(function() {
        const el = viewportRef.current;

        const resizeObserver = new ResizeObserver(() => {
            const newOffset = el.offsetWidth - el.clientWidth;
            setOffset(newOffset);
        });

        resizeObserver.observe(el);

        return function() {
            resizeObserver.unobserve(el);
        };
    }, [viewportRef.current]);

    function handleClick() {
        runnerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        clearTimeout(timerId.current);
        onSetIsFocused(true);
        timerId.current = setTimeout(function() {
            onSetIsFocused(false);
        }, 1500);
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

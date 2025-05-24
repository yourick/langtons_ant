import { useState, useRef, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import ladybug from '/ladybug.svg';
import crosshair from '../../../assets/images/crosshair.svg';

function FocusPanel({ onSetIsFocused, viewportRef, offsetX, offsetY }) {
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
        const el = viewportRef.current;
        el.scrollTo({ top: offsetY - el.clientHeight / 2, left: offsetX - el.clientWidth / 2, behavior: 'smooth' });
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

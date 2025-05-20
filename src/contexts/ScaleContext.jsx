import { useState, createContext } from 'react';

export const ScaleContext = createContext();

export function ScaleProvider({ children }) {
    const [scale, setScale] = useState(1);

    return (
        <ScaleContext value={{scale, setScale}}>
            {children}
        </ScaleContext>
    );
}

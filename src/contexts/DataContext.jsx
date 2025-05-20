import { useState, createContext } from 'react';
import dataList from '../data';

export const DataContext = createContext();

export function DataProvider({ children }) {
    const [defaultData, setDefaultData] = useState(0);
    const [data, setData] = useState(dataList[defaultData]);
    const dummyCells = 4;

    return (
        <DataContext value={{data, setData, defaultData, setDefaultData, dummyCells}}>
            {children}
        </DataContext>
    );
}

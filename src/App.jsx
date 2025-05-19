import { useState, useRef } from 'react';
import { DataContext } from './DataContext';
import Layout from './components/Layout';
import Grid from './components/Grid';
import dataList from './data';

function App() {
    const [defaultData, setDefaultData] = useState(0);
    const [data, setData] = useState(dataList[defaultData]);
    const ant = useRef(null);
    const dummyCells = 4;

    return (
        <DataContext value={{data, setData, defaultData, setDefaultData}}>
            <Layout dummyCells={dummyCells} ant={ant}>
                <Grid dummyCells={dummyCells} ant={ant}/>
            </Layout>
        </DataContext>
    );
}

export default App;

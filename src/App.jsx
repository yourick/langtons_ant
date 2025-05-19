import { useState, useRef } from 'react';
import Layout from './components/Layout';
import Grid from './components/Grid';
import dataList from './data';

function App() {
    const [defaultData, setDefaultData] = useState(0);
    const [data, setData] = useState(dataList[defaultData]);
    const ant = useRef(null);
    const dummyCells = 4;

    return (
        <Layout onSetData={setData} defaultData={defaultData} onSetDefaultData={setDefaultData} step={data.step} dummyCells={dummyCells} ant={ant}>
            <Grid data={data} dummyCells={dummyCells} ant={ant}/>
        </Layout>
    );
}

export default App;

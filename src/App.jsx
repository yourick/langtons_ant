import { useRef } from 'react';
import { DataProvider } from './contexts/DataContext';
import { ScaleProvider } from './contexts/ScaleContext';
import Layout from './components/Layout';
import Grid from './components/Grid';

function App() {
    const ant = useRef(null);

    return (
        <DataProvider>
            <ScaleProvider>
                <Layout ant={ant}>
                    <Grid ant={ant}/>
                </Layout>
            </ScaleProvider>
        </DataProvider>
    );
}

export default App;

import { useRef } from 'react';
import { DataProvider } from './contexts/DataContext';
import { ScaleProvider } from './contexts/ScaleContext';
import Layout from './components/Layout';
import Grid from './components/Grid';

function App() {
    const runnerRef = useRef(null);

    return (
        <DataProvider>
            <ScaleProvider>
                <Layout runnerRef={runnerRef}>
                    <Grid runnerRef={runnerRef}/>
                </Layout>
            </ScaleProvider>
        </DataProvider>
    );
}

export default App;

import { DataProvider } from './contexts/DataContext';
import Layout from './components/Layout';

function App() {
    return (
        <DataProvider>
            <Layout/>
        </DataProvider>
    );
}

export default App;

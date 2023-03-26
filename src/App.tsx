import { MantineProvider } from '@mantine/core';
import SearchBar from './components/Searchbar';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <SearchBar />
    </MantineProvider>
  );
}

export default App;

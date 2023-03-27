import { MantineProvider } from '@mantine/core';
import SearchBar from './components/Searchbar';
import Library from './components/Library';
import Footer from './components/Footer';

function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={
        {
          // colorScheme: 'dark',
        }
      }
    >
      <SearchBar />
      <Library />
      <Footer />
    </MantineProvider>
  );
}

export default App;

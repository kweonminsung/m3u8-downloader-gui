import { MantineProvider } from '@mantine/core';
import SearchBar from './components/Searchbar';
import Content from './components/Content';
import Footer from './components/Footer';
import { useState } from 'react';
import { Notifications } from '@mantine/notifications';

function App() {
  const [fetchString, setFetchString] = useState<string>('');

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
      <SearchBar fetchString={fetchString} setFetchString={setFetchString} />
      <Content fetchString={fetchString} setFetchString={setFetchString} />
      <Footer />
      <Notifications
        limit={1}
        autoClose={500}
        position="top-center"
        zIndex={2077}
      />
    </MantineProvider>
  );
}

export default App;

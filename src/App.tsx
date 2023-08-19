import { MantineProvider } from '@mantine/core';
import SearchBar from './components/Searchbar';
import Content from './components/Content';
import Footer from './components/Footer';
import { useState } from 'react';
import { Notifications } from '@mantine/notifications';
import { ParsedFetchString } from './types/parsedFetchString';

function App() {
  const [fetchString, setFetchString] = useState<string>('');
  const [parsedFetchString, setParsedFetchString] =
    useState<ParsedFetchString | null>(null);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

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
      <SearchBar
        fetchString={fetchString}
        setFetchString={setFetchString}
        isDownloading={isDownloading}
      />
      <Content
        fetchString={fetchString}
        parsedFetchString={parsedFetchString}
        setParsedFetchString={setParsedFetchString}
        isDownloading={isDownloading}
        setIsDownloading={setIsDownloading}
      />

      <Footer />
      <Notifications
        limit={1}
        autoClose={1000}
        position="top-center"
        zIndex={2077}
      />
    </MantineProvider>
  );
}

export default App;

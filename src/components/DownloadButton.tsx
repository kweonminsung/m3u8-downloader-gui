import { Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { IconDownload, IconTransform } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { ParsedFetchString } from '../types/parsedFetchString';
import { IPC } from '../utils/IPC';

interface Props {
  toggle: () => void;
  fetchString: string;
  setFetchString: React.Dispatch<React.SetStateAction<string>>;
  parsedFetchString: ParsedFetchString | null;
  setParsedFetchString: React.Dispatch<
    React.SetStateAction<ParsedFetchString | null>
  >;
}

export function DownloadButton({
  fetchString,
  setFetchString,
  toggle,
  parsedFetchString,
  setParsedFetchString,
}: Props) {
  const [canDownload, setCanDownload] = useState<boolean>(false);

  useEffect(() => {
    setCanDownload(false);
  }, [fetchString]);

  const parseFetchString = (fetchString: string): ParsedFetchString => {
    try {
      const parsed = JSON.parse(
        '[' +
          fetchString
            .slice(6)
            .slice(0, -2)
            .split('\n')
            .reduce((acc: string[], cur: string) => {
              if (!cur.includes('""')) acc.push(cur);
              return acc;
            }, [])
            .join('') +
          ']'
      );

      return {
        url: parsed[0],
        headers: parsed[1].headers,
        method: parsed[1].method,
      };
    } catch (err) {
      console.error(err);
      throw new Error('Invalid Node.js fetch string');
    }
  };

  const convertToJson = () => {
    try {
      setParsedFetchString(parseFetchString(fetchString));
      setCanDownload(true);
      toggle();
    } catch (err) {
      showNotification({
        color: 'red',
        title: 'Parsing Failed',
        message: 'Invalid Node.js fetch string',
      });
    }
  };

  const download = async () => {
    const temp = await IPC.send('download', parsedFetchString);
    console.log(temp);

    setCanDownload(false);
  };

  return (
    <Button
      style={{
        width: '100%',
      }}
      onClick={() => {
        if (canDownload) download();
        else convertToJson();
      }}
    >
      {canDownload ? <IconDownload /> : <IconTransform />}
    </Button>
  );
}

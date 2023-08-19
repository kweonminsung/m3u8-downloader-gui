import { Button, Collapse } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { IconDownload, IconTransform, IconX } from '@tabler/icons-react';
import { useEffect } from 'react';
import { ParsedFetchString } from '../types/parsedFetchString';
import { IPC } from '../utils/IPC';
import { VideoData } from '../types/videoData';

interface Props {
  canDownload: boolean;
  setCanDownload: React.Dispatch<React.SetStateAction<boolean>>;
  fetchString: string;
  parsedFetchString: ParsedFetchString | null;
  setParsedFetchString: React.Dispatch<
    React.SetStateAction<ParsedFetchString | null>
  >;
  isDownloading: boolean;
  setIsDownloading: React.Dispatch<React.SetStateAction<boolean>>;
  setVideoData: React.Dispatch<React.SetStateAction<VideoData | undefined>>;
}

export function DownloadButton({
  canDownload,
  setCanDownload,
  fetchString,
  parsedFetchString,
  setParsedFetchString,
  isDownloading,
  setIsDownloading,
  setVideoData,
}: Props) {
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
    } catch (err) {
      showNotification({
        color: 'red',
        title: 'Parsing Failed',
        message: 'Invalid Node.js fetch string',
      });
    }
  };

  const download = async () => {
    await IPC.send('downloadM3U8', parsedFetchString);
    await IPC.receive(
      'downloadM3U8',
      (data: { success: boolean; data: VideoData }) => {
        console.log(data);
        if (!data.success) return;

        console.log(data);
        setVideoData(data.data);
        setIsDownloading(true);
      }
    );
  };

  return (
    <>
      <Button
        style={{
          width: '100%',
        }}
        disabled={isDownloading}
        onClick={() => {
          if (canDownload) download();
          else convertToJson();
        }}
      >
        {canDownload ? <IconDownload /> : <IconTransform />}
      </Button>
      <Collapse in={isDownloading}>
        <Button
          color="red"
          style={{
            width: '100%',
          }}
          onClick={() => {
            setCanDownload(false);
            setIsDownloading(false);
          }}
        >
          <IconX />
        </Button>
      </Collapse>
    </>
  );
}

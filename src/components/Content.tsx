import { Collapse, useMantineTheme } from '@mantine/core';
import { ContentContainerDiv } from './Content.styles';
import { DownloadButton } from './DownloadButton';
import ConvertResult from './ConvertResult';
import { ParsedFetchString } from '../types/parsedFetchString';
import { useState } from 'react';
import { Downloading } from './Downloading';
import { VideoData } from '../types/videoData';

interface Props {
  fetchString: string;
  parsedFetchString: ParsedFetchString | null;
  setParsedFetchString: React.Dispatch<
    React.SetStateAction<ParsedFetchString | null>
  >;
  isDownloading: boolean;
  setIsDownloading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Content({
  fetchString,
  parsedFetchString,
  setParsedFetchString,
  isDownloading,
  setIsDownloading,
}: Props) {
  const theme = useMantineTheme();

  const [canDownload, setCanDownload] = useState<boolean>(false);
  const [videoData, setVideoData] = useState<VideoData>();

  return (
    <ContentContainerDiv theme={theme}>
      <ConvertResult
        canDownload={canDownload}
        parsedFetchString={parsedFetchString}
      />

      <Collapse in={isDownloading}>
        <Downloading videoData={videoData} />
      </Collapse>

      <DownloadButton
        canDownload={canDownload}
        setCanDownload={setCanDownload}
        fetchString={fetchString}
        parsedFetchString={parsedFetchString}
        setParsedFetchString={setParsedFetchString}
        isDownloading={isDownloading}
        setIsDownloading={setIsDownloading}
        setVideoData={setVideoData}
      />
    </ContentContainerDiv>
  );
}

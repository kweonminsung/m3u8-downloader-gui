import styled from '@emotion/styled';
import { Progress } from '@mantine/core';
import { VideoData } from '../types/videoData';
import { useEffect } from 'react';

interface Props {
  videoData: VideoData | undefined;
}

export function Downloading({ videoData }: Props) {
  useEffect(() => {});

  return videoData ? (
    <DownloadingContainerDiv>
      <Progress
        value={(1 / videoData.segments.length) * 100}
        label={`${1} / ${videoData.segments.length}`}
        size="xl"
      />
    </DownloadingContainerDiv>
  ) : null;
}

const DownloadingContainerDiv = styled.div`
  width: 100%;
  height: 60px;
  background-color: #f0f0f0;
  margin: 20px 0 20px 0;
`;

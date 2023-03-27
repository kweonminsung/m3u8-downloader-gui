import { useMantineTheme } from '@mantine/core';
import { ContentContainerDiv } from './Content.styles';
import { DownloadButton } from './DownloadButton';
import ConvertResult from './ConvertResult';

interface Props {
  fetchString: string;
  setFetchString: React.Dispatch<React.SetStateAction<string>>;
}

export default function Content({ fetchString, setFetchString }: Props) {
  const theme = useMantineTheme();

  return (
    <ContentContainerDiv theme={theme}>
      <DownloadButton
        fetchString={fetchString}
        setFetchString={setFetchString}
      />
      <ConvertResult />
    </ContentContainerDiv>
  );
}

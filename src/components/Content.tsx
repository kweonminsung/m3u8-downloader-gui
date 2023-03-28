import { useMantineTheme } from '@mantine/core';
import { ContentContainerDiv } from './Content.styles';
import { DownloadButton } from './DownloadButton';
import ConvertResult from './ConvertResult';
import { useDisclosure } from '@mantine/hooks';
import { ParsedFetchString } from '../types/parsedFetchString';

interface Props {
  fetchString: string;
  setFetchString: React.Dispatch<React.SetStateAction<string>>;
  parsedFetchString: ParsedFetchString | null;
  setParsedFetchString: React.Dispatch<
    React.SetStateAction<ParsedFetchString | null>
  >;
}

export default function Content({
  fetchString,
  setFetchString,
  parsedFetchString,
  setParsedFetchString,
}: Props) {
  const theme = useMantineTheme();

  const [opened, { toggle }] = useDisclosure(false);

  return (
    <ContentContainerDiv theme={theme}>
      <ConvertResult opened={opened} parsedFetchString={parsedFetchString} />

      <DownloadButton
        toggle={toggle}
        fetchString={fetchString}
        setFetchString={setFetchString}
        parsedFetchString={parsedFetchString}
        setParsedFetchString={setParsedFetchString}
      />
    </ContentContainerDiv>
  );
}

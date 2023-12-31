import { ActionIcon } from '@mantine/core';
import { IconClipboard, IconLink } from '@tabler/icons-react';
import { SeachbarContainerDiv, SearchbarTextarea } from './Searchbar.styles';

interface Props {
  fetchString: string;
  setFetchString: React.Dispatch<React.SetStateAction<string>>;
  isDownloading: boolean;
}

export default function SearchBar({
  fetchString,
  setFetchString,
  isDownloading,
}: Props) {
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFetchString(event.target.value);
  };

  const pasteFromClipboard = async () => {
    const text = await navigator.clipboard.readText();
    setFetchString(text);
  };

  return (
    <SeachbarContainerDiv>
      <SearchbarTextarea
        radius="md"
        disabled={isDownloading}
        autosize
        minRows={5}
        maxRows={10}
        icon={<IconLink size="1.1rem" stroke={1.5} />}
        placeholder="Input Node.js fetch copy of .m3u8 file URL"
        rightSection={
          <ActionIcon
            disabled={isDownloading}
            onClick={() => {
              pasteFromClipboard();
            }}
          >
            <IconClipboard />
          </ActionIcon>
        }
        rightSectionWidth={42}
        value={fetchString}
        onChange={handleInputChange}
      ></SearchbarTextarea>
    </SeachbarContainerDiv>
  );
}

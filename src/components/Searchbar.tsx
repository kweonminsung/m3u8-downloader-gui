import { TextInput, useMantineTheme } from '@mantine/core';
import { IconLink } from '@tabler/icons-react';
import { SeachbarContainerDiv } from './Searchbar.styles';
import { useState } from 'react';
import SeachbarRightButton from './SeachbarRightButton';

export default function SearchBar() {
  const theme = useMantineTheme();

  const [link, setLink] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value);
  };

  return (
    <SeachbarContainerDiv>
      <TextInput
        icon={<IconLink size="1.1rem" stroke={1.5} />}
        radius="md"
        size="md"
        rightSection={<SeachbarRightButton theme={theme} setLink={setLink} />}
        placeholder="Input .m3u8 Download Link"
        rightSectionWidth={42}
        onChange={handleInputChange}
        value={link}
      />
    </SeachbarContainerDiv>
  );
}

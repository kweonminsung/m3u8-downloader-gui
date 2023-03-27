import { ActionIcon, useMantineTheme } from '@mantine/core';
import { IconClipboard, IconDownload } from '@tabler/icons-react';

interface Props {
  setLink: React.Dispatch<React.SetStateAction<string>>;
}

export default function SeachbarRightButton({ setLink }: Props) {
  const theme = useMantineTheme();

  const pasteFromClipboard = async () => {
    const text = await navigator.clipboard.readText();
    setLink(text);
  };

  console.log(theme.primaryColor);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '5px',
        alignItems: 'center',
        marginRight: '35px',
      }}
    >
      <ActionIcon
        onClick={() => {
          pasteFromClipboard();
        }}
      >
        <IconClipboard />
      </ActionIcon>
      <ActionIcon
        size={32}
        radius="md"
        color={theme.primaryColor}
        variant="filled"
      >
        <IconDownload size="1.1rem" stroke={1.5} />
      </ActionIcon>
    </div>
  );
}

import { Badge, Box, Collapse, Divider, List, Text } from '@mantine/core';
import { ParsedFetchString } from '../types/parsedFetchString';

interface Props {
  opened: boolean;
  parsedFetchString: ParsedFetchString | null;
}

export default function ConvertResult({ opened, parsedFetchString }: Props) {
  return (
    <Collapse in={opened}>
      {parsedFetchString && (
        <Box py={10} px={15}>
          <Text fz="xs" align="center">
            <Badge fz="xs">{parsedFetchString.method}</Badge>
            <br />
            {parsedFetchString.url}
          </Text>

          <Divider label="Referer" labelPosition="center" mt={10} />

          <Text size="xs" align="center">
            {parsedFetchString.headers.Referer}
          </Text>

          <Divider label="Cookies" labelPosition="center" mt={10} />

          <List size="xs" spacing={-3}>
            {parsedFetchString.headers.cookie &&
              parsedFetchString.headers.cookie
                .split(';')
                .map((cookie: string) => {
                  const [key, value] = cookie.split('=');
                  return (
                    <List.Item fz="xs" key={key}>
                      {key} : {value}
                    </List.Item>
                  );
                })}
          </List>
        </Box>
      )}
    </Collapse>
  );
}

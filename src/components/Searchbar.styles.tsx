import styled from '@emotion/styled';
import { Textarea, TextareaProps } from '@mantine/core';

export const SeachbarContainerDiv = styled.div`
  padding: 10px;
  background-color: #f0f0f0;
`;

export const SearchbarTextarea = styled(Textarea)<TextareaProps>`
  textarea::-webkit-scrollbar {
    display: none;
  }
`;

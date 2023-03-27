import styled from '@emotion/styled';

export const LibraryContainerDiv = styled.div`
  flex: 1;
  width: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #228be6;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: trasparent;
    border-radius: 10px;
  }
`;

import styled from '@emotion/styled';

export const ContentContainerDiv = styled.div`
  flex: 1;
  width: 100%;
  word-break: break-all;
  // overflow-x: hidden;
  overflow-y: auto;
  padding: 15px;
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

import { ActionIcon } from '@mantine/core';
import React from 'react';
import styled from 'styled-components';
import { Settings } from 'tabler-icons-react';

const StyledFooter = styled.div`
  display: flex;
  padding: 1rem;
`;

interface FooterProps {
  setNicknameInput(nickname: string): void;
  setSettingsModalOpened(opened: boolean): void;
}

export default function Footer(data: FooterProps) {
  const { setNicknameInput, setSettingsModalOpened } = data;
  return (
    <StyledFooter>
      <ActionIcon
        size="xl"
        variant="default"
        radius="md"
        onClick={(e: { preventDefault: () => void }) => {
          e.preventDefault();
          setSettingsModalOpened(true);
          setNicknameInput('');
        }}
      >
        <Settings />
      </ActionIcon>
    </StyledFooter>
  );
}

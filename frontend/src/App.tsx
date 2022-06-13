import {
  ActionIcon,
  Button,
  Input,
  InputWrapper,
  Modal,
  Space,
  Switch,
} from '@mantine/core';
import styled from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';

import useStore from './utils/zustand';
import randomNickname from './utils/randomNickname';

import './index.css';
import { useState, SetStateAction } from 'react';
import { Settings } from 'tabler-icons-react';
import Footer from './components/Footer';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function App() {
  const [settingsModalOpened, setSettingsModalOpened] = useState(false);

  const nickname = useStore((state) => state.nickname);
  const setNickname = useStore((state) => state.setNickname);
  const [nicknameInput, setNicknameInput] = useState('');
  // set random nickname if not set
  if (!nickname) {
    setNickname(randomNickname());
  }

  const isOnHome = true;

  const data = { setNicknameInput, setSettingsModalOpened };

  return (
    <StyledApp>
      <Modal
        opened={settingsModalOpened}
        onClose={() => setSettingsModalOpened(false)}
        title="Settings"
      >
        <InputWrapper label="Nickname">
          <Input
            size="md"
            radius="md"
            onChange={(e: { target: { value: SetStateAction<string> } }) => {
              setNicknameInput(e.target.value);
            }}
            placeholder={nickname}
          />
        </InputWrapper>
        <Space h="sm" />
        <Button
          size="sm"
          radius="md"
          type="submit"
          onClick={() => {
            nicknameInput && setNickname(nicknameInput);
            setSettingsModalOpened(false);
          }}
        >
          Change nickname
        </Button>
        <Space h="md" />
        <Switch label="Filtering curses" size="md" />
        <Space h="sm" />
        <Switch label="Streamer mode" size="md" />
      </Modal>
      <Header />
      <Home />
      {isOnHome && <Footer {...data} />}
    </StyledApp>
  );
}

export default App;

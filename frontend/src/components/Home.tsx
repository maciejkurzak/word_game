import React from 'react';

import {
  ActionIcon,
  Button,
  Center,
  Container,
  Grid,
  Group,
  Input,
  InputWrapper,
  Modal,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Switch,
  Text,
  Title,
} from '@mantine/core';
import { PlayerPlay, Settings, Lock, World, Users } from 'tabler-icons-react';

import { SetStateAction, useEffect, useState } from 'react';

import styled from 'styled-components';

import socket from '../utils/socket';

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const LobbySelect = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
  max-width: 500px;
  width: 100%;
`;

interface LobbySelectSectionProps {
  span?: string;
}

const LobbySelectSection = styled.div<LobbySelectSectionProps>`
  grid-column: span ${(props) => props.span || 1};
`;

const publicLobbies = [
  {
    id: 'jXoPaZ',
    name: "Tyrer's Lobby",
    players: 3,
    status: 'WAITING',
  },
  {
    id: 'wpNdoZ',
    name: "Ben's Lobby",
    players: 10,
    status: 'WAITING',
  },
  {
    id: 'AjsNJf',
    name: "George's Lobby",
    players: 5,
    status: 'IN_GAME',
  },
  {
    id: 'jXoPaZ1',
    name: "Tyrer's Lobby",
    players: 3,
    status: 'WAITING',
  },
  {
    id: 'wpNdoZ1',
    name: "Ben's Lobby",
    players: 10,
    status: 'WAITING',
  },
  {
    id: 'AjsNJf1',
    name: "George's Lobby",
    players: 5,
    status: 'IN_GAME',
  },
  {
    id: 'jXoPaZ2',
    name: "Tyrer's Lobby",
    players: 3,
    status: 'WAITING',
  },
  {
    id: 'wpNdoZ2',
    name: "Ben's Lobby",
    players: 10,
    status: 'WAITING',
  },
  {
    id: 'AjsNJf2',
    name: "George's Lobby",
    players: 5,
    status: 'IN_GAME',
  },
  {
    id: 'wpNdoZ3',
    name: "Ben's Lobby",
    players: 10,
    status: 'WAITING',
  },
  {
    id: 'AjsNJf3',
    name: "George's Lobby",
    players: 5,
    status: 'IN_GAME',
  },
];

interface publicLobbiesProps {
  displayName: string;
  icon: any;
  color: string;
}

const lobbyStatus: { [name: string]: publicLobbiesProps } = {
  WAITING: {
    displayName: 'Waiting',
    icon: <Lock />,
    color: '#ffc107',
  },
  IN_GAME: {
    displayName: 'In game',
    icon: <Lock />,
    color: '#1cff07',
  },
};

const StyledPublicLobbyButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  max-height: 16rem;
  overflow-y: auto;
`;

interface JoinLobbyButtonProps {
  key: string;
  onClick: () => void;
  status: string;
}

const JoinLobbyButton = styled.a<JoinLobbyButtonProps>`
  border-radius: 0;
  border: none;
  background-color: #00000040;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #00000080;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    .name {
      color: white;
      font-size: 1.2rem;
      font-weight: 600;
      word-wrap: anywhere;
      hyphens: auto;
    }
    .status-players {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      .status {
        background-color: ${(props) => lobbyStatus[props.status].color}40;
        color: ${(props) => lobbyStatus[props.status].color};
        padding: 0.1rem 0.25rem;
        font-weight: 600;
        border-radius: 0.2rem;
        width: max-content;
        font-size: 0.8rem;
      }
      .players {
        display: flex;
        font-size: 0.8rem;
        align-items: center;
        .icon {
          margin-right: 0.25rem;
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }
`;

const PublicLobbyButtons = () => {
  return (
    <StyledPublicLobbyButtons>
      {publicLobbies.map((lobby) => {
        return (
          <JoinLobbyButton
            key={lobby.id}
            status={lobby.status}
            onClick={() => {
              console.log('join lobby');
            }}
          >
            <div className="text">
              <div className="name">{lobby.name}</div>
              <div className="status-players">
                <div className="status">{lobbyStatus[lobby.status].displayName}</div>
                <div className="players">
                  <Users className="icon" />
                  {lobby.players}
                </div>
              </div>
            </div>
          </JoinLobbyButton>
        );
      })}
    </StyledPublicLobbyButtons>
  );
};

function Home() {
  const [message, setMessage] = useState('');
  const [messages, setMessages]: [string[], any] = useState([]);

  socket.off('message').on('message', (text) => {
    console.log(text);
    setMessages((messages: string[]) => [...messages, text]);
  });

  socket.on('hello', (text, callback) => {
    // console.log(text);
    callback('got it');
  });

  return (
    <StyledHome>
      <LobbySelect>
        <LobbySelectSection span="7">
          <Title order={3}>Create new lobby</Title>
          <Text>Name</Text>
          <Group spacing="xs" noWrap>
            <Input style={{ width: '100%' }} />
            <ActionIcon size="lg" variant="filled" color="blue">
              <PlayerPlay />
            </ActionIcon>
          </Group>
          <Space h="sm" />
          <Group spacing="xs" grow>
            <Button size="xs" leftIcon={<World size={14} />}>
              Public
            </Button>
            <Button size="xs" leftIcon={<Lock size={14} />}>
              Private
            </Button>
          </Group>
          <Space h="md" />
        </LobbySelectSection>
        <LobbySelectSection span="5">
          <Title order={3}>Join private lobby</Title>
          <Text>Join code</Text>
          <Group spacing="xs">
            <Input style={{ width: '100%' }} />
          </Group>
          <Space h="sm" />
          <Button style={{ width: '100%' }} size="xs">
            Join
          </Button>
          <Space h="md" />
        </LobbySelectSection>
        <LobbySelectSection span="12">
          <Title order={3}>Join public lobby</Title>
          <Space h="xs" />
          <PublicLobbyButtons />
        </LobbySelectSection>
      </LobbySelect>
    </StyledHome>
  );
}

export default Home;

import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Header from '../components/header';
import socket from '../utils/socket';

socket.emit('create-game', '', (res) => {
  console.log(res);
});

const CreateGame = () => (
  <>
    <Header />
    <h1>Create new game</h1>
  </>
);

export default CreateGame;

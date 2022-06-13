import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Word Game</h1>
    </StyledHeader>
  );
}

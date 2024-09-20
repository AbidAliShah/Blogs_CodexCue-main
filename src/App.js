import React from 'react';
import styled from 'styled-components';
import BlogList from './components/BlogList';

const AppContainer = styled.div`
  background-color: #f8f9fa;
  min-height: 100vh;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  margin-bottom: 32px;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  color: #333;
`;

const App = () => {
  return (
    <AppContainer>
      <Header>
        <Title>Blog Posts</Title>
      </Header>
      <BlogList />
    </AppContainer>
  );
};

export default App;

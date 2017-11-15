import React from 'react';
import { ContentWrapper } from 'style/Layout';
import { ContentCard } from 'style/Cards';
import SendMessageForm from 'scenes/SendMessageForm';
import styled from 'styled-components';

const Content = styled.div`
  flex: 1;
  margin-left: 30px;
`;

const Sidebar = styled.div`
  min-width: 300px;
`;

const App = () => (
  <ContentWrapper>
    <Sidebar>
      <SendMessageForm />
    </Sidebar>
    <Content>
      <ContentCard>Here will be the sent / received texts.</ContentCard>
    </Content>
  </ContentWrapper>
);

export default App;

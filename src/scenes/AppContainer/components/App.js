import React from 'react';
import { ContentWrapper, NormalPage } from 'style/Layout';
import { smallUp } from 'style/breakpoints';
import SendMessageForm from 'scenes/SendMessageForm';
import MessagesList from 'scenes/MessagesList';
import styled from 'styled-components';

const Content = styled.div`
  flex: 1;

  ${smallUp`
    margin-left: 30px;
  `};
`;

const Sidebar = styled.div`
  width: 100%;

  ${smallUp`
    max-width: 300px;
  `};
`;

const App = () => (
  <ContentWrapper>
    <NormalPage>
      <Sidebar>
        <SendMessageForm />
      </Sidebar>
      <Content>
        <MessagesList />
      </Content>
    </NormalPage>
  </ContentWrapper>
);

export default App;

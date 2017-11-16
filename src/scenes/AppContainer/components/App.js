import React from 'react';
import { ContentWrapper, NormalPage } from 'style/Layout';
import SendMessageForm from 'scenes/SendMessageForm';
import MessagesList from 'scenes/MessagesList';
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

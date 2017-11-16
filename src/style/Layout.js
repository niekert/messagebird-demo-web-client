import styled from 'styled-components';
import { smallUp } from 'style/breakpoints';
import { prop } from 'styled-tools';

export const ContentWrapper = styled.div`
  min-height: 100%;
  background: ${prop('theme.bg.body')};
  color: ${prop('theme.color.main')};
  padding: ${prop('theme.spacing.1')};

  ${smallUp`
    padding: ${prop('theme.spacing.3')};
  `};
`;

export const NormalPage = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;

  ${smallUp`
    max-width: 1000px;
    flex-direction: row;
  `};
`;

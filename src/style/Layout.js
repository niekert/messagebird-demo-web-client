import styled from 'styled-components';
import { prop } from 'styled-tools';

export const ContentWrapper = styled.div`
  min-height: 100%;
  background: ${prop('theme.bg.body')};
  color: ${prop('theme.color.main')};
  padding: ${prop('theme.spacing.3')};
`;

export const NormalPage = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
`;

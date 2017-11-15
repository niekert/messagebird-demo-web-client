import styled from 'styled-components';
import { prop } from 'styled-tools';

export const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  background: ${prop('theme.bg.body')};
  color: ${prop('theme.color.main')};
  padding: ${prop('theme.spacing.3')};
`;

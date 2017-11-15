import styled from 'styled-components';
import { prop } from 'styled-tools';

export const ContentCard = styled.div`
  padding: ${prop('theme.spacing.3')};
  background: ${prop('theme.bg.card')};
  border-radius: 5px;
  box-shadow: ${prop('theme.shadows.1')};
  padding: ${prop('theme.spacing.1')};
`;

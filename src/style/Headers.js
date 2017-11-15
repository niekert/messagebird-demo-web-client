import styled from 'styled-components';
import { prop } from 'styled-tools';

export const H1 = styled.h1`
  margin-bottom: ${prop('theme.spacing.2')};
  line-height: 30px;
  font-size: ${prop('theme.fs.h1')};
  font-weight: 400;
`;

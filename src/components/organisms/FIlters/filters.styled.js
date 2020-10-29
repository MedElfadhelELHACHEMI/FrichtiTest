import styled from 'styled-components';

import COLORS from '../../../styles/constants/colors';
import breakpoint from '../../../styles/utils/breakpoint';
import typography from '../../../styles/utils/typography';

const Styled = styled.button`
  min-height: 4.8rem;
  width: 100%;
  border: 1px solid #eff1f4;
  border-radius: 0.4rem;
  margin-bottom: 2rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  ${typography({
    fontSize: '1.2rem',
    fontWeight: 'bold',
    lineHeight: '1.6rem',
  })};
  outline: none;
  padding: 0 8rem 0 4rem;
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.whiteHover};
  }
`;
Styled.Logo = styled.figure`
  align-items: center;
  background-color: transparent;
  display: flex;
  flex: 1;
  justify-content: center;
  ${breakpoint.medium`
    flex: 0;
  `}
`;

export default Styled;

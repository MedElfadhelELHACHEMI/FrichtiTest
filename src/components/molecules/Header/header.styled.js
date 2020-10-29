import styled from 'styled-components';

import COLORS from '../../../styles/constants/colors';
import SIZES from '../../../styles/constants/sizes';
import breakpoint from '../../../styles/utils/breakpoint';
import typography from '../../../styles/utils/typography';

const Styled = styled.header`
  box-shadow: 0 0.1rem 0.1rem 0 rgba(38, 48, 60, 0.1),
    0 0.1rem 0 0 rgba(29, 64, 105, 0.1);
  display: flex;
  height: ${SIZES.headerHeight};
  width: 100%;
`;

Styled.Logo = styled.figure`
  align-items: center;
  background-color: ${COLORS.primary};
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 0 1.6rem;

  ${breakpoint.medium`
    flex: 0;
  `}
`;

Styled.SearchContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  background-color: ${COLORS.white};
`;

Styled.FirstName = styled.button`
  ${typography({ fontSize: '1.2rem', fontWeight: 'bold' })};
  background: white;
  border: 0;
  cursor: pointer;
  display: none;
  margin: 0;
  padding-left: 1.6rem;
  padding-right: 1.6rem;

  ${breakpoint.medium`
    display: block;
  `}
`;

export default Styled;

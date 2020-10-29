import styled from 'styled-components';

import COLORS from '../../../styles/constants/colors';
import SIZES from '../../../styles/constants/sizes';
import breakpoint from '../../../styles/utils/breakpoint';
import typography from '../../../styles/utils/typography';

const Styled = styled.aside`
  height: ${SIZES.page};
  width: 24rem;
  position: fixed;
  padding-top: 24rem;
  display: inline;
`;

Styled.Catgories = styled.ul`
  background-color: transparent;
  flex: 1;
  list-style-type: none;
  padding: 0 1.6rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  ${breakpoint.medium`
    display: flex;
  `}
`;

Styled.Category = styled.li`
  display: block;
  float: left;
  line-height: 4rem;
  text-align: left;
  width: 100%;
  padding-left: 2rem;
  margin-bottom: 1rem;

  &:hover {
    background-color: rgb(240, 243, 247);
    border-radius: 0.4rem;
  }
`;

Styled.Link = styled.a`
  ${typography({ fontSize: '1.5rem', fontWeight: 'bold' })};
  color: ${COLORS.dark};
  text-decoration: none;
  &:hover {
    font-weight: bolder;
  }
`;

export default Styled;

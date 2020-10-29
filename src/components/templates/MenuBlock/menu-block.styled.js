import styled from 'styled-components';

import SIZES from '../../../styles/constants/sizes';
import typography from '../../../styles/utils/typography';
import COLORS from '../../../styles/constants/colors';

const Styled = styled.section`
  margin: 0 auto;
  max-width: ${SIZES.page};
  width: 100%;
`;

const ANCHOR_TO_TOP = '9rem';

Styled.Title = styled.h2`
  ${typography({ fontWeight: 'bolder', fontSize: '2rem', lineHeight: '2.4rem' })};
  margin-bottom: 0.8rem;
  color: ${COLORS.dark};
  position: relative;
  padding-left: 5.8rem;
  &::after {
    background-color: rgb(253, 241, 141);
    content: "";
    display: inline-block;
    height: 0.8rem;
    margin-right: 1.2rem;
    vertical-align: middle;
    width: 4.8rem;
    position: absolute;
    left: 0;
    bottom: 1.2rem;
  }

  &::before,
  &:target::before {
    background: none;
    content: "";
    display: block;
    height: ${ANCHOR_TO_TOP};
    margin: calc(${ANCHOR_TO_TOP} * -1) 0 0;
  }
`;

Styled.Quantity = styled.p`
  ${typography({ fontWeight: 'bold', fontSize: '1.3rem' })};
  color: ${COLORS.grey};
  margin-bottom: 1.6rem;
`;

export default Styled;

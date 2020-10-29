import styled from 'styled-components';

import COLORS from '../../../styles/constants/colors';
import breakpoint from '../../../styles/utils/breakpoint';
import typography from '../../../styles/utils/typography';

const Styled = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  background: ${COLORS.overlay};
  height: 100vh;
  z-index: 8;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-top: 4rem;
`;
Styled.ModalContent = styled.div`
  pointer-events: all;
  max-width: 89.4rem;
  background-color: ${COLORS.white};
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 3rem;
  border-radius: 0.4rem;
  z-index: 9;
`;
Styled.ModalTitle = styled.div`
  min-height: 4.8rem;
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  letter-spacing: 0.5px;
  text-transform: none;
  ${typography({
    fontSize: '3.2rem',
    fontWeight: 'bold',
  })};
  padding: 0 4rem;
`;
Styled.Logo = styled.figure`
  align-items: center;
  background-color: transparent;
  display: flex;
  flex: 1;
  justify-content: center;
  margin-right: 4rem;
  ${breakpoint.medium`
    flex: 0;
  `}
`;
Styled.ModalDescription = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;
Styled.ModalAllergensTitle = styled.h4`
  ${typography({
    fontSize: '1.4rem',
    fontWeight: 'bold',
    lineHeight: '2.1rem',
  })};
`;
Styled.ModalAllergensList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 4rem;
  padding: 2rem 0;
`;
Styled.ModalAllergensItem = styled.button`
  height: 4rem;
  border: 1px solid #eff1f4;
  border-radius: 0.4rem;
  background-color: ${(props) => (props.selected ? COLORS.grey : COLORS.white)};
  margin-top: 2rem;
  letter-spacing: normal;
  text-transform: none;
  margin-right: 2rem;
  padding: 0 1.6rem;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    background-color: ${COLORS.whiteHover};
  }
  ${typography({
    fontSize: '1.4rem',
    lineHeight: '1rem',
  })};
`;

export default Styled;

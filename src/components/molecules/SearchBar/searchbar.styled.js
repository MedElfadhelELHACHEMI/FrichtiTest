import styled from 'styled-components';

import COLORS from '../../../styles/constants/colors';
import breakpoint from '../../../styles/utils/breakpoint';
import typography from '../../../styles/utils/typography';

const Styled = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  margin-right: 2rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-end;
`;
Styled.InputContainer = styled.div`
  background-color: rgb(240, 243, 247);
  border-radius: 1.8rem;
  display: flex;
  flex-direction: row;
  height: 3.6rem;
  padding-left: 1.2rem;
  position: relative;
  width: 212px;
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

Styled.Input = styled.input`
  ${typography({
    fontSize: '1.4rem',
    lineHeight: '2.4rem',
  })};
  text-transform: none;
  background-color: rgb(240, 243, 247);
  color: rgb(38, 48, 60);
  border: 0px;
  border-radius: 1.8rem;
  height: auto;
  letter-spacing: normal;
  padding-left: 0.8rem;
  outline-width: 0;
`;

Styled.Results = styled.ul`
  ${breakpoint.small`
    width: 500px;
    right:0px;
  `};
  position: absolute;
  width: 100vw;
  height: auto;
  top: 100%;
  right: -5rem;
  background-color: ${COLORS.white};
  overflow-y: scroll;
  max-height: 50rem;
  padding: 1rem 2rem;
`;
Styled.ResultItem = styled.li`
  height: 8rem;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

export default Styled;

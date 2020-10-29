import styled from "styled-components";

import breakpoint from "../../../styles/utils/breakpoint";
import SideBar from "../../molecules/SideBar/sidebar";

import MenuBlock from "../../templates/MenuBlock/menu-block";

const Styled = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 0;
  ${breakpoint.xSmall`
   padding: 0 14rem;
  `}
`;
Styled.Main = styled.main`
  display: block;
  padding: 4.8rem 3rem;
  width: 100%;
  margin-left: 0;
  ${breakpoint.xSmall`
  margin-left: 24rem;
   width: calc(100% - 24rem);
  `}

  ${breakpoint.medium`
    padding: 7.2rem 0;
  `}
`;

Styled.SideBar = styled(SideBar)`
  display: none;
  ${breakpoint.xSmall`
   display: inline;
  `}
`;

Styled.Block = styled(MenuBlock)`
  margin-bottom: 7.2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;
export default Styled;

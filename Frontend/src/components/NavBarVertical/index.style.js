import styled from "styled-components";

export const NavBarV = styled.div`
  background: var(--color--navbar);
  padding: 10px;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Copyright = styled.span`
  writing-mode: vertical-rl;
  text-orientation: sideways;
  color: var(--color--light);
`;

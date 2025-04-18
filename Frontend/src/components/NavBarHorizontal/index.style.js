import { styled } from "styled-components";

export const NavBarH = styled.div`
  background: var(--color--navbar);
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const ImgLogo = styled.img`
  display: block;
  width: 178px;
  object-fit: cover;
  object-position: center;
`;

export const NavBarHList = styled.ul`
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
  margin-left: 6rem;
  margin-right: 3rem;
`;

export const NavBarHListLink = styled.a`
  text-decoration: none;
  color: var(--color--primary);
  font-size: 1.25rem;
  color: var(--color--light);
`;

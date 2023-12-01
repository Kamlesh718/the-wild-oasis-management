import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);

  border-bottom: 1px solid va(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: end;
  padding: 1.4rem 4.2rem;
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;

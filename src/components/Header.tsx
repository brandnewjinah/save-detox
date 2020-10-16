import React, { FC } from "react";
import { Link } from "react-router-dom";

//import syles and assets
import styled from "styled-components";

interface Props {}

const Header: FC<Props> = () => {
  return (
    <Container>
      <Link to="/">Header</Link>
    </Container>
  );
};

const Container = styled.div`
  background-color: darkseagreen;
`;

export default Header;

import React, { FC, useEffect, useState } from "react";

//import components

import Banner from "../components/Banner";

//import syles and assets
import styled from "styled-components";

interface Props {}

const Home: FC<Props> = () => {
  return (
    <Container>
      <Main>
        <Content>
          <Left>title</Left>
          <Right>right</Right>
        </Content>
      </Main>
    </Container>
  );
};

const Container = styled.div``;

const Main = styled.div`
  // background-color: azure;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  height: 100vh;
`;

const Left = styled.div`
  background-color: lightblue;
  width: 65%;
`;

const Right = styled.div`
  background-color: lemonchiffon;
  width: 33%;
  margin-left: 2%;
`;

export default Home;

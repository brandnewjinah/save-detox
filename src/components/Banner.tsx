import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

//import syles and assets
import styled from "styled-components";
import { Close, Refresh } from "../assets/Icons";

interface Props {
  open?: () => void;
  post?: any;
  random?: () => void;
}

const Banner: FC<Props> = ({ open }) => {
  const [data, setData] = useState([]);

  const [post, setPost] = useState({ title: "", id: "" });

  const getData = async () => {
    const { data } = await Axios.get("/data/alldata.json");
    setData(data);
    getRandom(data);
  };

  const getRandom = (data: string | any[]) => {
    let i = data.length - 1;
    let r = Math.floor(Math.random() * Math.floor(i));
    let title = data[r] && data[r].title;
    let id = data[r] && data[r].id;
    setPost({ title, id });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Content>
        <Link to={post.id}>{post.title}</Link>
      </Content>
      <div style={{ display: "flex" }}>
        <RefreshBtn onClick={() => getRandom(data)}>
          <Refresh />
        </RefreshBtn>
        <CloseBtn onClick={open}>
          <Close />
        </CloseBtn>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: aliceblue;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 2em;
  margin: 1em 0;
`;

const Content = styled.div``;

const CloseBtn = styled.div`
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

const RefreshBtn = styled.div`
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

export default Banner;

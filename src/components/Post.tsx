import React, { FC, useEffect } from "react";

//import syles and assets
import styled from "styled-components";

interface Props {
  match: any;
}

const Post: FC<Props> = (props) => {
  const postName = props.match.params.id;
  console.log(props.match);
  return <Container>{postName}</Container>;
};

const Container = styled.div``;

export default Post;

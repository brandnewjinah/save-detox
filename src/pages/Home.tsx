import React, { FC } from "react";

//import components
import Header from "../components/Header";

interface Props {}

const Home: FC<Props> = () => {
  return (
    <div>
      <Header />
      Main Contents
    </div>
  );
};

export default Home;

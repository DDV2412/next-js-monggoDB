import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [name, setName] = useState("Home");
  return <div>{name}</div>;
};

export default Home;

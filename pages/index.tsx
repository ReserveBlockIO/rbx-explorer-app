import type { NextPage } from "next";
import Head from "next/head";
import { BlockRowsContainer } from "../src/components/block-rows-container";
import { Search } from "../src/components/search";
import { isMobile } from "react-device-detect";
import { BlockListContainer } from "../src/components/block-list-container";

const Home: NextPage = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return (
    <div>
      <Head>
        <title>RBX Explorer</title>
        <meta name="description" content="ReserveBlock Explorer: Home" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {isMobile ? <BlockListContainer /> : <BlockRowsContainer />}
    </div>
  );
};

export default Home;

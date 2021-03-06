/* eslint-disable @next/next/no-html-link-for-pages */
import type { NextPage } from "next";
import Head from "next/head";
import { BlockListContainer } from "../../src/components/block-list-container";
import { Search } from "../../src/components/search";

const BlockListPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>RBX Explorer</title>
        <meta name="description" content="ReserveBlock Explorer: Blocks" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb align-items-center">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <a href="/block">Blocks</a>
            </li>
          </ol>
        </nav>
      </div>

      <BlockListContainer />
    </div>
  );
};

export default BlockListPage;

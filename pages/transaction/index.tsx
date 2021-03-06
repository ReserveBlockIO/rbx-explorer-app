/* eslint-disable @next/next/no-html-link-for-pages */
import type { NextPage } from "next";
import Head from "next/head";
import { Search } from "../../src/components/search";
import { TransactionListContainer } from "../../src/components/transaction-list-container";

const TransactionListPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>RBX Explorer: Transactions</title>
        <meta name="description" content="ReserveBlock Explorer Transactions" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb align-items-center">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <a href="/transaction">Transactions</a>
            </li>
          </ol>
        </nav>
        <TransactionListContainer />
      </div>
    </div>
  );
};

export default TransactionListPage;

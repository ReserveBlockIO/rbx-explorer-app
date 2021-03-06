/* eslint-disable @next/next/no-html-link-for-pages */
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Nft } from "../../../src/models/nft";
import { NftService } from "../../../src/services/nft-service";
import { formatBytes } from "../../../src/utils/formatting";

const NftDetailPage: NextPage = () => {
  const router = useRouter();

  const { id } = router.query;

  const [nft, setNft] = useState<Nft | undefined>(undefined);
  useEffect(() => {
    if (!id) return;

    const service = new NftService();

    service.retrieve(id.toString()).then((data) => {
      console.log(data);
      setNft(data);
    });
  }, [id]);

  if (!nft) return <></>;

  return (
    <>
      <Head>
        <title>RBX Explorer</title>
        <meta name="description" />
        <title>{`ReserveBlock Explorer: NFT ${id}`}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb align-items-center">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <a href="/nfts">NFTs</a>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              <a href={`/nft/${nft.identifier}`}>
                {nft.name}
              </a>
            </li>
          </ol>
        </nav>
        <div className="text-center p-3 h3">{nft.name}</div>


        <table className="table table-striped">
          <tbody>

            <tr>
              <th>Identifier:</th>
              <td>{nft.identifier}</td>
            </tr>
            <tr>
              <th>Name:</th>
              <td>{nft.name}</td>
            </tr>
            <tr>
              <th>Description:</th>
              <td>{nft.description}</td>
            </tr>

            <tr>
              <th>minterAddress:</th>
              <td>{nft.minterAddress}</td>
            </tr>
            <tr>
              <th>Owner Address:</th>
              <td>{nft.ownerAddress}</td>
            </tr>

            <tr>
              <th>Minter Name:</th>
              <td>{nft.minterName}</td>
            </tr>
            <tr>
              <th>Primary Asset Name:</th>
              <td>{nft.primaryAssetName}</td>
            </tr>
            <tr>
              <th>Primary AssetSize:</th>
              <td>{formatBytes(nft.primaryAssetSize)}</td>
            </tr>

            <tr>
              <th>Mint Transaction:</th>
              <td> <a href={"/transaction/" + nft.mintTransaction} >
                {nft.mintTransaction}
              </a></td>
            </tr>
            {nft.burnTransaction ? (
              <tr>
                <th>Burn Transaction:</th>
                <td> <a href={"/transaction/" + nft.burnTransaction} >
                  {nft.burnTransaction}
                </a></td>
              </tr>
            ) : null}
          </tbody>

        </table>

        <div className="mt-3">
          <h4>Smart Contract Code</h4>
          <pre className="bg-black p-2">
            {nft.dataDataFormatted}
          </pre>
        </div>
      </div>



    </>
  );
};

export default NftDetailPage;

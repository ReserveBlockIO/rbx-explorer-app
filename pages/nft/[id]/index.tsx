import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Nft } from "../../../src/models/nft";
import { NftService } from "../../../src/services/nft-service";

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
      <div className="text-center p-5 h3">{nft.name}</div>
      <div className="container">

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
                <th>ownerAddress:</th>
                <td>{nft.ownerAddress}</td>
              </tr>

              <tr>
                <th>minterName:</th>
                <td>{nft.minterName}</td>
              </tr>
              <tr>
                <th>primaryAssetName:</th>
                <td>{nft.primaryAssetName}</td>
              </tr>
              <tr>
                <th>primaryAssetSize:</th>
                <td>{nft.primaryAssetSize}</td>
              </tr>
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

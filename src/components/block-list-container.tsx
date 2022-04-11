import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { Block } from "../models/block";
import { BlockService } from "../services/block-service";
import { BlockList } from "./block-list";

interface Props {
  validatorAddress?: string;
}

export const BlockListContainer = (props: Props) => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [canLoadMore, setCanLoadMore] = useState<boolean>(true);

  const fetchPage = async (p: number) => {
    const service = new BlockService();
    try {
      const params = props.validatorAddress
        ? { validator: props.validatorAddress }
        : {};

      const data = await service.list(p, params);
      if (data.page == 1) {
        setBlocks(data.results);
      } else {
        const results = [];
        for (const result of data.results) {
          const exists = blocks.some((b) => b.height == result.height);
          if (!exists) {
            results.push(result);
          }
        }

        setBlocks([...blocks, ...results]);
      }

      setCanLoadMore(data.numPages > data.page);
    } catch (e) {
      console.log(e);
      setCanLoadMore(false);
    }
  };

  useEffect(() => {
    const poll = () => {
      const service = new BlockService();
      const params = props.validatorAddress
        ? { validator: props.validatorAddress }
        : {};

      service.list(1, params).then((data) => {
        const newBlocks = [];
        for (const block of data.results) {
          const exists = blocks.some((b) => b.height == block.height);
          if (!exists) {
            newBlocks.push(block);
          }
        }
        if (newBlocks.length > 0) {
          setBlocks([...newBlocks, ...blocks]);
        }
      });
    };

    const interval = setInterval(() => {
      poll();
    }, 5000);

    return () => clearInterval(interval);
  }, [blocks]);

  return (
    <div className="container">
      <InfiniteScroll
        pageStart={0}
        loadMore={fetchPage}
        hasMore={canLoadMore}
        initialLoad={true}
        loader={
          <div
            className="d-flex justify-content-center align-items-center"
            key={0}
          >
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
      >
        <BlockList blocks={blocks} />
      </InfiniteScroll>
    </div>
  );
};

import { Block } from "../models/block";
import { Validator } from "../models/validator";
import { BlockListContainer } from "./block-list-container";
import { DetailItem } from "./detail-item";
import { TransactionCard } from "./transaction-card";

interface Props {
  validator: Validator;
}

export const ValidatorDetail = (props: Props) => {
  const { validator } = props;

  return (
    <>
      <div className="container">
        <h4>Validator Details</h4>
        <div className="bg-dark p-2">
          <div className="d-block d-md-flex justify-start">
            <DetailItem
              label="Address"
              value={`${validator.address}`}
            ></DetailItem>
            <div className="px-1 py-1"></div>
            <DetailItem
              label="Name"
              value={`${validator.uniqueName}`}
            ></DetailItem>
            <div className="px-1  py-1"></div>

            <DetailItem
              label="Location"
              value={`${validator.locationLabel}`}
            ></DetailItem>
          </div>
          <div className="py-1"></div>

          <div className="d-block d-md-flex justify-start">
            <DetailItem
              label="Connection Date"
              value={`${validator.dateLabel}`}
            ></DetailItem>
            <div className="px-1  py-1"></div>

            <div className="px-1  py-1"></div>
            <DetailItem
              label="Status"
              value={`${validator.isActive ? "Active" : "Inactive"}`}
            ></DetailItem>
            <div className="px-1  py-1"></div>

            <DetailItem
              label="Blocks Crafted"
              value={`${validator.blockCount}`}
            ></DetailItem>
          </div>
        </div>
        <h4 className="mt-3">Blocks</h4>
      </div>
      <div>
        <BlockListContainer initialBlocks={[]} validatorAddress={validator.address} />
      </div>
    </>
  );
};

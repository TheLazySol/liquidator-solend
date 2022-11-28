import { FC, useState } from "react";
import Link from "next/link";
import AssetInput from "./AssetInput";
const Supply: FC = (props) => {
  const [amount, setAmount] = useState();
  return (
    <div className="flex flex-col ">
      {/* <AssetInput /> */}
      <button className="btn p-2 btn-secondary">
        {amount ? "Enter a value" : "Pay"}
      </button>
    </div>
  );
};
export default Supply;

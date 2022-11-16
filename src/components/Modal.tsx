import close from "../images/carbon_close.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

type modalProps = {
  onClick: () => void;
  value: string;
};
export default function Modal({ onClick, value }: modalProps) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="modal">
      <div className="flex justify-between border-b-[1px] mb-[10px]">
        <h2 className="largeBoldtext">Share</h2>
        <button onClick={onClick}>
          <img src={close} alt="close" />
        </button>
      </div>

      <p className="normalText">Page link</p>

      <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
        <input
          className="smallNormalTextTwo text-darkGrayText w-[100%] bg-gray-300 p-[5px]"
          readOnly
          value={value}
        />
      </CopyToClipboard>

      {copied ? <span className="text-red-500 lightLext">copied</span> : null}
    </div>
  );
}

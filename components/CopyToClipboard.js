import styles from "../styles/components/CopyToClipboard.module.css";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Clipboard } from "react-bootstrap-icons";
import { useState, useEffect } from "react";

const CopyToClipboard = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const copyText = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <OverlayTrigger
      onExited={() => setCopied(false)}
      overlay={
        <Tooltip id="tooltip-copy">{copied ? "Copied!" : "Copy"}</Tooltip>
      }
    >
      <button
        className={styles.copytoclipboard}
        onClick={copyText}
        type="button"
      >
        <Clipboard />
      </button>
    </OverlayTrigger>
  );
};

export default CopyToClipboard;

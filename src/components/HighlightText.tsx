import * as React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

type HighlightTextProps = {
  text: string;
  variant?: "code" | "text";
};

const HighlightText: React.FC<HighlightTextProps> = ({
  text,
  variant = "code",
}) => {
  const [isCopied, setIsCopied] = React.useState(false);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isCopied) {
      timer = setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isCopied]);

  const handleHighlight = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    const range = document.createRange();
    range.selectNode(e.currentTarget);
    window.getSelection()?.removeAllRanges();
    window.getSelection()?.addRange(range);
  };

  if (variant === "text") {
    return (
      <div className="text-highlight-container">
        <div className={`alert ${isCopied ? "active" : "inactive"}`}>
          Copied!
        </div>
        <CopyToClipboard text={text} onCopy={() => setIsCopied(true)}>
          <div className="highlighted-text">{text}</div>
        </CopyToClipboard>
      </div>
    );
  } else {
    return (
      <div className="code-embed-container">
        <CopyToClipboard text={text} onCopy={() => setIsCopied(true)}>
          <button>{isCopied ? "Copied!" : "Copy"}</button>
        </CopyToClipboard>
        <pre onMouseUp={handleHighlight} style={{ cursor: "pointer" }}>
          {text}
        </pre>
      </div>
    );
  }
};

export default HighlightText;

"use client";
import { FormLineType } from "@/types";
import { useRef, useState } from "react";
import { Form } from "./components/Form";
import { Hand } from "./components/Hand";
import domtoimage from "dom-to-image";
import { useToast } from "@chakra-ui/react";

export default function Home() {
  const defaultFormLine: FormLineType = {
    ES: "",
    players: "",
    XBP: "",
    board: "",
    flop: "",
    turn: "",
    river: "",
  };
  const [formLine, setFormLine] = useState<FormLineType>(defaultFormLine);
  const captureRef = useRef(null);
  const toast = useToast();

  const resetFormLine = () => {
    setFormLine(defaultFormLine);
  };
  const captureAndCopy = async () => {
    const node = captureRef.current;
    if (!node) return;

    domtoimage
      .toBlob(node)
      .then((blob) => {
        const items = [new ClipboardItem({ "image/png": blob })];
        return navigator.clipboard.write(items);
      })
      .then(() => {
        toast({
          title: "コピーしました",
          status: "success",
          duration: 1000,
          isClosable: true,
        });
      })
      .catch((error) => {
        alert(`Error:${error}`);
      });
  };

  return (
    <div className="flex items-center m-5 gap-5  w-fit">
      <Form formLine={formLine} setFormLine={setFormLine} />
      <div className="flex flex-col items-start gap-3">
        <div ref={captureRef}>
          <Hand formLine={formLine} />
        </div>
        <div className="flex gap-2">
          <button
            className={
              "bg-danger hover:bg-dangerHover text-white font-bold py-2 px-4 rounded"
            }
            onClick={resetFormLine}
          >
            リセット
          </button>
          <button
            onClick={captureAndCopy}
            className={
              "bg-accent-green hover:bg-dark-accent-green text-white font-bold py-2 px-4 rounded"
            }
          >
            クリップボードに保存
          </button>
        </div>
        <div id="img"></div>
      </div>
    </div>
  );
}

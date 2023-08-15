'use client';
import { FormLineType, Position, PreflopAction } from '@/types';
import { useRef, useState } from 'react';
import { Form } from './components/Form';
import { Hand } from './components/Hand';
import domtoimage from 'dom-to-image';
export default function Home() {
  const [formLine, setFormLine] = useState<FormLineType>({
    players: '',
    XBP: '',
    board: '',
    flop: '',
    turn: '',
    river: '',
  });
  const captureRef = useRef(null);
  const captureAndCopy = async () => {
    const node = captureRef.current;
    if (!node) return;

    domtoimage
      .toBlob(node)
      .then((blob) => {
        const items = [new ClipboardItem({ 'image/png': blob })];
        return navigator.clipboard.write(items);
      })
      .then(() => {
        console.log('Image copied to clipboard!');
      })
      .catch((error) => {
        alert(`Error:${error}`);
      });
  };

  return (
    <div className="flex items-center m-5 gap-5">
      <Form formLine={formLine} setFormLine={setFormLine} />
      <div className="flex flex-col items-start gap-3">
        <div ref={captureRef}>
          <Hand formLine={formLine} />
        </div>
        <button
          onClick={captureAndCopy}
          className={
            'bg-accent-green hover:bg-dark-accent-green text-white font-bold py-2 px-4 rounded'
          }
        >
          クリップボードに保存
        </button>
        <div id="img"></div>
      </div>
    </div>
  );
}

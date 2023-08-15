import { Position } from '@/types';
import { FC } from 'react';
import { Card } from './Card';

type Props = {
  position: Position | '?';
  cards: string[];
};

export const CardTag: FC<Props> = (props) => {
  const { position, cards } = props;
  return (
    <div
      className={`flex h-[60px] w-fit overflow-hidden rounded-xl box-content  bg-bg border-2 border-action-border`}
    >
      <div className="w-[50px] rounded-l-xl flex justify-center items-center bg-position text-white text-xl font-sans">
        {position}
      </div>
      <div className="px-1 flex justify-center items-center gap-1">
        <Card card={cards[0]} />
        <Card card={cards[1]} />
      </div>
    </div>
  );
};

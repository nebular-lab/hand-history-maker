import { Player } from '@/types';
import { FC } from 'react';
import { CardTag } from './CardTag';

type Props = {
  players: Player[];
  XBP: string;
  ES: string;
};

export const Players: FC<Props> = (props) => {
  const { players, XBP, ES } = props;
  return (
    <div className="flex items-center h-[65px] gap-2">
      <div className=" flex gap-2 justify-center items-center ">
        <div className="text-white bg-position w-fit p-2 font-sans font-medium rounded-xl border-2 border-action-border">
          {ES == '' ? 'x' : ES}BB
        </div>
        <div className="text-white bg-position w-fit p-2 font-sans font-medium rounded-xl border-2 border-action-border">
          {XBP == '' ? 'x' : XBP}BP
        </div>
      </div>
      <div className="flex gap-2">
        {players.map((player) => (
          <CardTag
            key={player.position}
            position={player.position}
            cards={player.hands}
          />
        ))}
      </div>
    </div>
  );
};

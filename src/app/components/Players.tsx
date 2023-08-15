import { Player } from '@/types';
import { FC } from 'react';
import { CardTag } from './CardTag';

type Props = {
  players: Player[];
  XBP: string;
};

export const Players: FC<Props> = (props) => {
  const { players, XBP } = props;
  return (
    <div className="flex items-center h-[65px] ">
      <div className=" flex w-[80px] justify-center items-center ">
        <div className="text-white w-fit p-2 font-sans font-medium rounded-xl border-2 border-accent-green">
          {XBP == '' ? 'X':XBP}BP
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

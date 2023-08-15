import { Action, Position } from '@/types';
import { FC } from 'react';

type Props = Action & {
  position: Position | '?';
};

export const ActionTag: FC<Props> = (props) => {
  const { position, move, amount } = props;
  let bgColor = '';
  if (move == 'f') {
    bgColor = 'bg-fold';
  } else if (move == 'c') {
    bgColor = 'bg-callCheck';
  } else if (move == 'x') {
    bgColor = 'bg-callCheck';
  } else if (move == 'b') {
    bgColor = 'bg-small';
  } else if (move == 'r') {
    bgColor = 'bg-raise';
  } else if (move == 'a') {
    bgColor = 'bg-allin';
  }
  return (
    <div
      className={`flex h-[60px]  overflow-hidden rounded-xl box-content  bg-bg border-2 border-action-border`}
    >
      <div className="w-[50px] rounded-l-xl flex justify-center items-center bg-position text-white text-xl font-sans">
        {position}
      </div>
      <div
        className={`${bgColor} w-24 flex justify-center items-center text-white text-xl font-sans font-medium`}
      >
        {move.toUpperCase()} {amount}
      </div>
    </div>
  );
};

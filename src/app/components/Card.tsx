import { FC } from 'react';

type Props = {
  card: string;
};
export const Card: FC<Props> = (props) => {
  let num: string;
  let mark: string;
  const { card } = props;
  if (card == '?') {
    num = '?';
    mark = '?';
  } else {
    num = cardStringToObject(card).num;
    mark = cardStringToObject(card).mark;
  }

  let markColor = '';
  if (mark == 'c') {
    markColor = 'bg-club';
  } else if (mark == 'd') {
    markColor = 'bg-diamond';
  } else if (mark == 'h') {
    markColor = 'bg-heart';
  } else if (mark == 's') {
    markColor = 'bg-spade';
  } else {
    markColor = 'bg-spade';
  }

  return (
    <div
      className={`${markColor} rounded-md flex font-sans h-[55px] w-[40px]  text-white text-3xl  items-center justify-center`}
    >
      {num}
    </div>
  );
};

export type CardType = {
  num: CardNumType;
  mark: CardMarkType;
};
export type CardNumType =
  | 'A'
  | 'K'
  | 'Q'
  | 'J'
  | 'T'
  | '9'
  | '8'
  | '7'
  | '6'
  | '5'
  | '4'
  | '3'
  | '2';
export type CardMarkType = 's' | 'h' | 'd' | 'c';

function cardStringToObject(s: string): CardType {
  if (s.length !== 2) {
    throw new Error('Input string should have exactly 2 characters');
  }

  return {
    num: s[0] as CardNumType,
    mark: s[1] as CardMarkType,
  };
}

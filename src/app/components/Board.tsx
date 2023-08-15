import { FC } from 'react';
import { Card, CardType } from './Card';

type Props = {
  cards: string[];
};
export const Board: FC<Props> = (props) => {
  const { cards } = props;
  while (cards.length < 5) {
    cards.push('?');
  }
  return (
    <div className="flex h-[65px]">
      <div className="w-[80px]"></div>
      <div className="flex items-center gap-1  border-action-border rounded-xl px-1 border-2 w-fit">
        {cards.map((card,index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

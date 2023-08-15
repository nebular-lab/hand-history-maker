import { Action, Player } from '@/types';
import { ActionTag } from './ActionTag';

type Props = {
  street: string;
  actions: Action[];
  players: Player[];
};
export const Street: React.FC<Props> = (props) => {
  const { street, actions, players } = props;
  return (
    <div className="flex items-center h-[65px]">
      <div className="flex flex-col w-[80px] justify-center items-center">
        <div className="text-xl text-white font-medium font-sans">
          {street.toUpperCase()}
        </div>
      </div>
      <div className="flex gap-2">
        {actions.map((action, index) => {
          const position =
            players.length == 2
              ? index % 2 == 0
                ? players[0].position
                : players[1].position
              : '?';
          return <ActionTag key={index} {...action} position={position} />;
        })}
      </div>
    </div>
  );
};

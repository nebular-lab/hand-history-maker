import { FormLineType } from '@/types';
import { parseFormLine } from '@/utils/parseFormLine';
import { Street } from './Street';
import { Board } from './Board';
import { Players } from './Players';

type Props = {
  formLine: FormLineType;
};

export const Hand = (props: Props) => {
  const { formLine } = props;
  const { players, XBP, board, flop, turn, river } = parseFormLine(formLine);
  return (
    <div className="flex flex-col bg-bg rounded-md gap-2 p-4 min-w-[754px]">
      <Players players={players} XBP={XBP} />
      <Board cards={board} />
      <Street street="flop" actions={flop} players={players} />
      <Street street="turn" actions={turn} players={players} />
      <Street street="river" actions={river} players={players} />
    </div>
  );
};

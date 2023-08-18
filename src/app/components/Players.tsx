import { Player } from "@/types";
import { FC } from "react";
import { CardTag } from "./CardTag";

type Props = {
  players: Player[];
  XBP: string;
  ES: string;
};

export const Players: FC<Props> = (props) => {
  const { players, XBP, ES } = props;
  return (
    <div className="flex items-center h-[65px] gap-2">
      {ES == "" || (
        <div className="text-white flex items-center px-3 h-full bg-position w-fit  font-sans font-medium rounded-xl border-2 border-action-border text-xl">
          {ES}BB
        </div>
      )}
      {XBP == "" || (
        <div className="text-white flex items-center px-3 h-full bg-position w-fit  font-sans font-medium rounded-xl border-2 border-action-border text-xl">
          {XBP}BP
        </div>
      )}

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

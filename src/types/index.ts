export type Position = 'BTN' | 'SB' | 'BB' | 'UTG' | 'HJ' | 'CO';
export type Move = 'f' | 'x' | 'c' | 'b' | 'r' | 'a';
export type Action = {
  move: Move;
  amount: string;
};
export type PreflopAction = '2BP' | '3BP' | '4BP';
export type FormLineType = {
  players: string;
  ES: string;
  XBP: string;
  board: string;
  flop: string;
  turn: string;
  river: string;
};
export type Player = {
  position: Position;
  hands: [string, string];
};

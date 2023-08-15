import { Action, FormLineType, Move, Player, Position } from '@/types';

export const parseFormLine = (formLine: FormLineType) => {
  return {
    players: parseFirstLine(formLine.players),
    XBP: parseSecondLine(formLine.XBP),
    board: parseThirdLine(formLine.board),
    flop: parseActionLine(formLine.flop),
    turn: parseActionLine(formLine.turn),
    river: parseActionLine(formLine.river),
  };
};

function parseFirstLine(line: string): Player[] {
  const positionsOrder = ['SB', 'BB', 'UTG', 'HJ', 'CO', 'BTN'];

  const splitByVs = line.split('vs');
  if (splitByVs.length !== 2 || !splitByVs[0] || !splitByVs[1]) {
    return [];
  }

  const parsePlayer = (segment: string): Player | null => {
    const match = segment.match(/(BB|SB|UTG|HJ|CO|BTN)(?:\/(..)(..))?/);
    if (!match) return null;

    const position = match[1] as Position;
    const hand1 = match[2] || '?';
    const hand2 = match[3] || '?';

    return { position, hands: [hand1, hand2] };
  };

  let player1 = parsePlayer(splitByVs[0]);
  let player2 = parsePlayer(splitByVs[1]);

  if (!player1 || !player2) return [];

  // Order players based on the positionsOrder array
  if (
    positionsOrder.indexOf(player1.position) >
    positionsOrder.indexOf(player2.position)
  ) {
    [player1, player2] = [player2, player1];
  }

  return [player1, player2];
}

function parseSecondLine(line: string): string {
  if (!['2', '3', '4'].includes(line)) {
    return '';
  }

  return line;
}

function parseThirdLine(line: string): string[] {
  const cards = line.match(/[AKQJT98765432\d][cdhs]/g);
  if (!cards || cards.length > 5) {
    return [];
  }

  return cards;
}

function parseActionLine(line: string): Action[] {
  const actions: Action[] = [];
  const moves = line.split('/');
  for (const move of moves) {
    const match = move.match(/(x|b|c|r|f|a)(\d+(\.\d+)?(?:%|BB)?)?/);

    if (!match) {
      break;
    }
    actions.push({ move: match[1] as Move, amount: match[2] as string });
  }

  return actions;
}
